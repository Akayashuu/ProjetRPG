import BaseModule from "../../BaseModule.js"
import CreatePlayerCommand from "./presentation/commands/CreatePlayer.js"

class PlayerModule extends BaseModule {
    registerCommands() {
        return [CreatePlayerCommand]
    }
}

export default PlayerModule
