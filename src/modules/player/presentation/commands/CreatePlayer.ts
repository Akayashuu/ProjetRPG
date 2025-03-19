import BaseCommand from "../../../../BaseCommand.js"
import type CommandContext from "../../../../common/context/CommandContext.js"
import Warrior from "../../../character/domain/logic/classes/Warrior.js"
import Line from "../../../draw/presentation/form/Line.js"
import Rectangle from "../../../draw/presentation/form/Rectangle.js"
import StringForm from "../../../draw/presentation/form/StringForm.js"
import Grid from "../../../draw/presentation/Grid.js"
import { Colors } from "../../../draw/presentation/interfaces/Colors.js"
class CreatePlayerCommand extends BaseCommand {
    public name = "createplayer"
    public subCommands = new Map<string, BaseCommand>()

    execute(ctx: CommandContext): void {
        const { height, width } = ctx.getTerminalSize()
        const grid = new Grid(width, height)
        const RecG = new Rectangle(width, height / 2, { x: 0, y: 0 })
        RecG.setBorder(Colors.Green)
        grid.addForm(RecG)
        const Rec = new Rectangle(24, 40, { x: 2, y: 5 })
        Rec.setBorder(Colors.Yellow)
        grid.addForm(Rec)

        const separatorPersonnageCard = new Line(38, { x: 20, y: 6 })
        separatorPersonnageCard.setBorder(Colors.Yellow)
        grid.addForm(separatorPersonnageCard)
    }
}

export default CreatePlayerCommand
