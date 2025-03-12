import type * as readline from "readline"

import type { LangArgs } from "../../generated/LangKey.js"
import Language, { type LangArgsMap, type RequiresArgs } from "../Language.js"

class CommandContext {
    constructor(private rl: readline.Interface) {}
    public $$<T extends keyof typeof LangArgs>(
        node: T,
        ...args: RequiresArgs<T> extends true ? [args: LangArgsMap[T]] : [args?: never]
    ) {
        const resolvedArgs = args[0] ?? ({} as LangArgsMap[T])
        return Language.resolveLanguage(Language.defaultLanguage, node, resolvedArgs as never)
    }

    public stop(): void {
        this.rl.close()
    }

    public ask(question: string, callback: (answer: string) => void): void {
        this.rl.question(question, callback)
    }

    public getTerminalSize() {
        return {
            height: process.stdout.columns || 80,
            width: process.stdout.rows / 2 || 24,
        }
    }

    public displaySelectionPrompt(
        question: string,
        options: {
            [answer: string]: {
                callback: () => void | Promise<void>
            }
        },
    ): void {
        console.clear()
        console.log(question)

        let currentIndex = 0
        const entries = Object.entries(options)

        const render = () => {
            console.clear()
            console.log(question)

            entries.forEach((entry, index) => {
                console.log(`${index === currentIndex ? "→" : " "} ${index + 1}. ${entry[0]}`)
            })
        }

        render()

        const keypressHandler = (str: string, key: { name: string }) => {
            const num = Number.parseInt(str, 10)
            if (!Number.isNaN(num) && num >= 1 && num <= entries.length) {
                currentIndex = num - 1
                render()
                if (key.name === "return") {
                    selectCurrentOption()
                }
                return
            }
            console.log(str, key)
            switch (key.name) {
                case "up":
                    currentIndex = currentIndex === 0 ? entries.length - 1 : currentIndex - 1
                    render()
                    break
                case "down":
                    currentIndex = currentIndex === entries.length - 1 ? 0 : currentIndex + 1
                    render()
                    break
                case "return":
                    selectCurrentOption()
                    break
            }
        }

        const selectCurrentOption = () => {
            process.stdin.removeListener("keypress", keypressHandler)

            const [, optionValue] = entries[currentIndex]
            if (optionValue.callback) {
                const result = optionValue.callback()
                if (result instanceof Promise) {
                    result.catch(console.error)
                }
            }
        }

        process.stdin.on("keypress", keypressHandler)
    }
}

export default CommandContext
