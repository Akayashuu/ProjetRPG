import BaseModule from "../../BaseModule.js"
import MenuCommand from "./presentation/MenuCommand.js"

class MenuModule extends BaseModule {
    registerCommands() {
        return [MenuCommand]
    }
}

export default MenuModule
