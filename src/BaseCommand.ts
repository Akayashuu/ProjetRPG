import type CommandContext from "./common/context/CommandContext"

abstract class BaseCommand {
    abstract name: string
    abstract subCommands: Map<string, BaseCommand>

    abstract execute(ctx: CommandContext): void

    addSubCommand(command: BaseCommand): void {
        this.subCommands.set(command.name, command)
    }

    getSubCommand(name: string): BaseCommand | undefined {
        return this.subCommands.get(name)
    }

    hasSubCommands(): boolean {
        return this.subCommands.size > 0
    }
}

export default BaseCommand
