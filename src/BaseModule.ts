import type BaseCommand from "./BaseCommand"

abstract class BaseModule {
    abstract registerCommands(): Array<{ new (): BaseCommand }>
}

export default BaseModule
