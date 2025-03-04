import type { LangArgs } from "../generated/LangKey"
import FR from "./langs/fr.json" with { type: "json" }
export type LanguageType = typeof FR
export type Nested = string | { [key: string]: Nested }

const REGEX_STRING_KEY = /<([^>@#:]*\.[^>@#:]*)>/gm

export const LangArray = ["FR"] as const
export type Lang = (typeof LangArray)[number]
export type LowerLang = Lowercase<Lang>

export type LangArgsMap = {
    [K in keyof typeof LangArgs]: Record<(typeof LangArgs)[K][number], string | number | bigint>
}

export type LangKey = keyof typeof LangArgs

export type RequiresArgs<T extends keyof typeof LangArgs> = LangArgsMap[T] extends Record<
    string,
    never
>
    ? false
    : true

class Language {
    static defaultLanguage = "FR" as const
    static maximumDepth = 10

    static sCommandIds: Map<string, string>
    static emojis: Map<string, string>

    static init(sCommandIds: Map<string, string>, emojis: Map<string, string>) {
        Language.sCommandIds = sCommandIds
        Language.emojis = emojis
    }

    static getLanguageFile(lang: Lang): LanguageType {
        switch (lang) {
            case "FR":
                return FR
        }
    }

    static resolveLanguage<T extends keyof typeof LangArgs>(
        lang: Lang,
        node: T,
        ...inputArgsArray: RequiresArgs<T> extends true ? [args: LangArgsMap[T]] : [args?: never]
    ): string {
        const inputArgs = inputArgsArray[0] ?? ({} as LangArgsMap[T])
        const args: Record<string, string | number> = {}
        for (const key in inputArgs) {
            args[`%${key}`] = inputArgs[key].toString()
        }
        let resolvedString = Language.resolveNode(lang, node)

        for (const key in args) {
            if (typeof args[key] === "string" && REGEX_STRING_KEY.test(resolvedString)) {
                resolvedString.replace(key, Language.resolveNode(lang, args[key]))
            } else if (typeof args[key] === "string" && REGEX_STRING_KEY.test(args[key])) {
                args[key] = args[key].replace(REGEX_STRING_KEY, (match, key: string) => {
                    return key
                })
                resolvedString = resolvedString.replace(key, Language.resolveNode(lang, args[key]))
            } else {
                resolvedString = resolvedString.replace(new RegExp(key, "g"), args[key].toString())
            }
        }
        return resolvedString
    }

    static resolveNode(lang: Lang, node: string, depth = 0): string {
        const file = Language.getLanguageFile(lang)
        try {
            const str = node.split(".").reduce((o: Nested, i: string) => {
                if (typeof o === "object" && i in o) {
                    return o[i]
                }
                throw new Error(`Key ${i} not found in language file`)
            }, file) as string
            if (REGEX_STRING_KEY.test(str)) {
                if (depth > Language.maximumDepth) {
                    throw new Error("Maximum depth reached")
                }
                return str.replace(REGEX_STRING_KEY, (match, key) => {
                    if (typeof key === "string") {
                        return Language.resolveNode(lang, key, depth + 1)
                    }
                    return match
                })
            }
            return str
        } catch (e) {
            console.error(e)
            return `Error: Key not found ${node}`
        }
    }

    static resolveNodeOrNull(lang: Lang, node: string): string | null {
        try {
            return Language.resolveNode(lang, node)
        } catch {
            return null
        }
    }
}

export default Language
