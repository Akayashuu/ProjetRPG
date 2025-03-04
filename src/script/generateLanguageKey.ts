import fs from "node:fs"
import path from "node:path"
import { uniq } from "lodash-es"
import * as prettier from "prettier"
import FR from "../common/langs/fr.json" with { type: "json" }
import { execSync } from "node:child_process"

class LanguageKeyGenerator {
    private extractPlaceholders(str: string): string[] {
        const regex = /%([a-zA-Z_]+)/g
        const placeholders = []
        let match: RegExpExecArray | null

        while (true) {
            match = regex.exec(str)
            if (match === null) break
            let actualMatch = match[1]
            if (actualMatch.endsWith("__")) {
                actualMatch = actualMatch.slice(0, -2)
            }
            placeholders.push(actualMatch)
        }

        return uniq(placeholders)
    }

    private extractKeysAndArgs(
        obj: Record<string, object | string>,
        prefix = "",
    ): { key: string; args: string[] }[] {
        let keys: { key: string; args: string[] }[] = []

        for (const key in obj) {
            const value = obj[key] as Record<string, object | string> | string
            const fullKey = prefix ? `${prefix}.${key}` : key

            if (typeof value === "object") {
                // Recursively extract keys from nested objects
                keys = keys.concat(this.extractKeysAndArgs(value, fullKey))
            } else {
                // Add the current key to the list
                keys.push({
                    key: fullKey,
                    args: this.extractPlaceholders(value),
                })
            }
        }

        return keys
    }

    private checkMissingKeysAcrossLanguages(
        languageFiles: Array<{
            language: string
            file: { key: string; args: string[] }[]
        }>,
    ) {
        const map = new Map<string, string[]>()

        for (const languageFile of languageFiles) {
            const keys = languageFile.file.map((key) => key.key)
            map.set(languageFile.language, keys)
        }

        const languages = Array.from(map.keys())

        for (let i = 0; i < languages.length; i++) {
            for (let j = i + 1; j < languages.length; j++) {
                const language = languages[i]
                const otherLanguage = languages[j]

                const currentKeys = map.get(language) || []
                const otherKeys = map.get(otherLanguage) || []

                const missingInCurrent = otherKeys.filter((key) => !currentKeys.includes(key))
                if (missingInCurrent.length > 0) {
                    console.log(`\nKeys missing in ${language} (from ${otherLanguage}):`)
                    for (const key of missingInCurrent) {
                        console.log(`  - ${key}`)
                    }
                }

                const missingInOther = currentKeys.filter((key) => !otherKeys.includes(key))
                if (missingInOther.length > 0) {
                    console.log(`\nKeys missing in ${otherLanguage} (from ${language}):`)
                    for (const key of missingInOther) {
                        console.log(`  - ${key}`)
                    }
                }
            }
        }
    }

    public async generateLangKeys(display: boolean) {
        try {
            const keysAndArgsFR = this.extractKeysAndArgs(FR)

            // Generate the TypeScript type definition
            let content = "// @generated\n\n"

            content += "export const LangArgs = {\n"
            content += keysAndArgsFR
                .map(
                    (key) => `    "${key.key}": [${key.args.map((arg) => `"${arg}"`).join(", ")}],`,
                )
                .join("\n")
            content += "\n} as const"

            if (display) {
                console.log(content)
            }

            // Optional: Save the result to a TypeScript file
            const outputPath = path.join(process.cwd(), "src/generated/LangKey.ts")

            const prettierConfigFile = await prettier.resolveConfigFile(outputPath)
            const prettierConfig = prettierConfigFile
                ? await prettier.resolveConfig(prettierConfigFile)
                : {}

            const formattedContent = await prettier.format(content, {
                ...prettierConfig,
                parser: "typescript",
            })

            fs.writeFileSync(outputPath, formattedContent)
            console.log(`Type definition written to ${outputPath}`)

            execSync(`npx prettier --write ${outputPath}`)
            console.log("Type definition prettified")
            this.checkMissingKeysAcrossLanguages([
                { language: "FR", file: this.extractKeysAndArgs(FR) },
            ])
        } catch (error) {
            console.error("Error generating type definition:", error)
        }
    }
}

export default LanguageKeyGenerator
// Add a named export to make the file properly importable in ESM
export { LanguageKeyGenerator }
