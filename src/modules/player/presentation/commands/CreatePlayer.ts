import BaseCommand from "../../../../BaseCommand.js"
import type CommandContext from "../../../../common/context/CommandContext.js"
import Rectangle from "../../../draw/presentation/form/Rectangle.js"
import { Colors } from "../../../draw/presentation/interfaces/Colors.js"
class CreatePlayerCommand extends BaseCommand {
    public name = "createplayer"
    public subCommands = new Map<string, BaseCommand>()

    execute(ctx: CommandContext): void {
        const { height, width } = ctx.getTerminalSize()
        const Rec = new Rectangle(width, height, null)
        Rec.setBorder(Colors.Yellow)

        Rec.draw()
    }
}

export default CreatePlayerCommand
