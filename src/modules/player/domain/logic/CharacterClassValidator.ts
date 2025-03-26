import Mage from "../../../character/domain/logic/classes/Mage"
import Rogue from "../../../character/domain/logic/classes/Rogue"
import Warrior from "../../../character/domain/logic/classes/Warrior"

export type CharacterClassValidationResponse = {
    code: "CHARACTER_CLASS_VALID" | "CHARACTER_CLASS_INVALID"
}

export const VALID_CHARACTER_CLASSES: Array<string> = [
    Rogue.characterType,
    Mage.characterType,
    Warrior.characterType,
]

export class CharacterClassValidator {
    static validate(characterType: string): CharacterClassValidationResponse {
        if (VALID_CHARACTER_CLASSES.includes(characterType)) {
            return { code: "CHARACTER_CLASS_VALID" }
        }

        return { code: "CHARACTER_CLASS_INVALID" }
    }
}
