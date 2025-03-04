import colors from "colors"
import BaseCommand from "../../../BaseCommand.js"
import type CommandContext from "../../../common/context/CommandContext"
class MenuCommand extends BaseCommand {
    public name = "menu"
    public subCommands = new Map<string, BaseCommand>()
    gamename = `
        ____                                       ____                              
        |  _ \\ _   _ _ __   __ _  ___  ___  _ __   |  _ \\ _ __ __ _  __ _  ___  _ __  
        | | | | | | | '_ \\ / _\` |/ _ \\/ _ \\| '_ \\  | | | | '__/ _\` |/ _\` |/ _ \\| '_ \\ 
        | |_| | |_| | | | | (_| |  __/ (_) | | | | | |_| | | | (_| | (_| | (_) | | | |
        |____/ \\__,_|_| |_|\\__, |\\___|\\___ |_| |_| |____/|_|  \\__,_|\\__, |\\___ |_| |_|
                            |___/                                    |___/             
    `.replace(/ /g, "\u00A0")
    dragonArt = `
                                                             __----~~~~~~~~~~~------___
                                              .  .   ~~//====......          __--~ ~~
                              -.            \\_|//     |||\\  ~~~~~~::::... /~
                           ___-==_       _-~o~  \\/    |||  \\            _/~~-
                   __---~~~.==~||\\=_    -_--~/_-~|-   |\\   \\        _/~
               _-~~     .=~    |  \\-_    '-~7  /-   /  ||    \\      /
             .~       .~       |   \\ -_    /  /-   /   ||      \\   /
            /  ____  /         |     \\ ~-_/  /|- _/   .||       \\ /
            |~~    ~~|--~~~~--_ \\     ~==-/   | \\~--===~~        .\\
                     '         ~-|      /|    |-~\\~~       __--~~
                                 |-~~-_/ |    |   ~\\_   _-~              /\\
                                      /  \\     \\__   \\/~                \\__
                                  _--~ _/ | .-~~____--~-/                  ~~==.
                                 ((->/~   '.|||' -_|    ~~-/ ,              . _||
                                            -_     ~\\      ~~---l__i__i__i--~~_/
                                            _-~-__   ~)  \\--______________--~~
                                          //.-~~~-~_--~- |-------~~~~~~~~
                                                 //.-~~~--\\
        `

    execute(ctx: CommandContext): void {
        const options = {
            [colors.green(ctx.$$("commands.menu.start"))]: {
                callback() {
                    console.log(colors.green("Démarrage de l'aventure..."))
                },
            },
            [colors.blue(ctx.$$("commands.menu.help"))]: {
                callback() {
                    // TODO: Redirect to HelpCommand
                },
            },
            [colors.red(ctx.$$("commands.menu.exit"))]: {
                callback() {
                    console.log(colors.red(ctx.$$("commands.menu.exit_message")))
                    ctx.stop()
                },
            },
        }
        let currentIndex = 0
        const entries = Object.entries(options)
        const render = () => {
            console.clear()
            console.log(this.render(options, currentIndex))
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
                optionValue.callback()
            }
        }

        process.stdin.on("keypress", keypressHandler)
    }

    private render(
        options: {
            [answer: string]: {
                callback: () => void | Promise<void>
            }
        },
        index: number,
    ): string {
        const terminalWidth = process.stdout.columns || 80
        const terminalHeight = process.stdout.rows / 2 || 24

        const gameNameLines = this.gamename.split("\n")
        const dragonArtLines = this.dragonArt.split("\n")

        const maxContentWidth = Math.max(
            ...gameNameLines.map((line) => line.length),
            ...dragonArtLines.map((line) => line.length),
            ...Object.keys(options).map((line) => line.length),
        )
        const horizontalPadding = Math.floor((terminalWidth - maxContentWidth) / 2)

        let title = colors.yellow(`╔${"═".repeat(terminalWidth - 2)}╗\n`)

        const topPadding = Math.max(
            0,
            Math.floor((terminalHeight - gameNameLines.length - dragonArtLines.length - 4) / 4),
        )
        for (let i = 0; i < topPadding; i++) {
            title += colors.yellow(`║${" ".repeat(terminalWidth - 2)}║\n`)
        }

        for (const line of gameNameLines) {
            const paddedLine = line
                .padStart(line.length + horizontalPadding)
                .padEnd(terminalWidth - 2)
            title += colors.yellow("║") + colors.yellow(paddedLine) + colors.yellow("║\n")
        }

        for (const line of dragonArtLines) {
            const paddedLine = line
                .padStart(line.length + horizontalPadding)
                .padEnd(terminalWidth - 2)
            title += colors.yellow("║") + colors.red(paddedLine) + colors.yellow("║\n")
        }

        const horizontalPaddingOptions = Math.floor((terminalWidth - 2) / 2)

        let i = 0
        for (const [option, _] of Object.entries(options)) {
            const isCurrent = index === i
            const paddedOption = option
                .padStart(option.length + horizontalPaddingOptions)
                .padEnd(terminalWidth + 8)
            title +=
                colors.yellow("║") +
                (isCurrent ? colors.bgWhite.black(paddedOption) : colors.white(paddedOption)) +
                colors.yellow("║\n")
            i++
        }

        const bottomPadding = Math.max(
            0,
            terminalHeight - gameNameLines.length - dragonArtLines.length - topPadding - 4,
        )
        for (let i = 0; i < bottomPadding; i++) {
            title += colors.yellow(`║${" ".repeat(terminalWidth - 2)}║\n`)
        }

        title += colors.yellow(`╚${"═".repeat(terminalWidth - 2)}╝`)

        return title
    }
}

export default MenuCommand
