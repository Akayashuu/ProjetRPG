import type { CharacterClass } from "../../../character/domain/logic/classes/ClassAbstract"
import ClassRegistry from "../../../character/domain/logic/classes/ClassRegistry"
import PlayerEntity from "../../domain/entities/PlayerEntity"
import CreatePlayer from "../../domain/logic/CreatePlayer"

class ExecuteCreatePlayer {
    static execute(name: string, charClass: CharacterClass) {
        const response = CreatePlayer.createPlayer(name, charClass)
        if (response.code === "PLAYER_CREATED") {
            const character = ClassRegistry.getClass(charClass)
            const instance = new character()
            return new PlayerEntity(name, instance.characterType, instance.characterStats)
        }

        return response
    }
}

export default ExecuteCreatePlayer
