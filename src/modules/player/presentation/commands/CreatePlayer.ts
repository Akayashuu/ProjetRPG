import BaseCommand from "../../../../BaseCommand.js"
import type CommandContext from "../../../../common/context/CommandContext.js"

class CreatePlayerCommand extends BaseCommand {
    public name = "createplayer"
    public subCommands = new Map<string, BaseCommand>()

    execute(ctx: CommandContext): void {
        ctx.displaySelectionPrompt("Select a character class", {
            Warrior: {
                callback: () => {
                    console.log("You selected Warrior")
                },
            },
            Mage: {
                callback: () => {
                    console.log("You selected Mage")
                },
            },
            Rogue: {
                callback: () => {
                    console.log("You selected Rogue")
                },
            },
        })
    }
}

export default CreatePlayerCommand
