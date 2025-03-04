import * as readline from "readline"
import { LanguageKeyGenerator } from "./script/generateLanguageKey.js"
import PlayerModule from "./modules/player/PlayerModule.js"
import MenuModule from "./modules/menu/MenuModule.js"
import CharacterModule from "./modules/character/CharacterModule.js"
import MenuCommand from "./modules/menu/presentation/MenuCommand.js"
import CommandContext from "./common/context/CommandContext.js"

type Handler = "main_menu" | "battle" | "inventory" | "shop" | "exit"
class GameClient {
    private rl: readline.Interface
    private currentHandler: Handler = "main_menu"

    public static Modules = [new PlayerModule(), new MenuModule(), new CharacterModule()]
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        })
        readline.emitKeypressEvents(process.stdin)
        process.stdin.setEncoding("utf8")

        if (process.stdin.isTTY) {
            process.stdin.setRawMode(true)
        }
        console.clear()
    }

    async start(): Promise<void> {
        console.log("Welcome to the RPG game!")
        await new LanguageKeyGenerator().generateLangKeys(false)
        const context = new CommandContext(this.rl)
        new MenuCommand().execute(context)
    }
}

// Start the game client
const client = new GameClient()
void (async () => {
    await client.start()
})()
