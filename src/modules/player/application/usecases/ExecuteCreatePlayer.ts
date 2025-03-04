import type { CharacterClass } from "../../../character/domain/logic/classes/ClassAbstract"
import CreatePlayer from "../../domain/logic/CreatePlayer"
import PlayerRepository from "../../infrastructure/PlayerRepository"

class ExecuteCreatePlayer {
    static async execute(name: string, charClass: CharacterClass) {
        const response = CreatePlayer.createPlayer(name, charClass)
        if (response.code === "PLAYER_CREATED") {
            const player = await PlayerRepository.default().createPlayer(name, charClass)
            return {
                code: "PLAYER_CREATED",
                player,
            }
        }

        return response
    }
}

export default ExecuteCreatePlayer
