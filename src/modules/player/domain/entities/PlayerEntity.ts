import type {
    CharacterClass,
    CharacterStats,
} from "../../../character/domain/logic/classes/ClassAbstract"

class PlayerEntity {
    constructor(
        private name: string,
        private characterType: CharacterClass,
        private baseCharacterStats: CharacterStats,
    ) {}
}

export default PlayerEntity
