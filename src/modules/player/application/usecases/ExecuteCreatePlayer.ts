import type ClassAbstract from "../../../character/domain/logic/characters/ClassAbstract"
import { CreatePlayer } from "../../domain/logic/CreatePlayer"
import PlayerRepository from "../../infrastructure/PlayerRepository"

class ExecuteCreatePlayer {
    static async execute(name: string, characterClass: ClassAbstract) {
        const response = CreatePlayer.createPlayer(name, characterClass.characterType)
        if (response.code === "PLAYER_CREATED") {
            const player = await PlayerRepository.default().createPlayer(
                name,
                characterClass.characterType,
            )
            return {
                code: "PLAYER_CREATED",
                player,
            }
        }

        return response
    }
}

export default ExecuteCreatePlayer
