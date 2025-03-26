import Characters from "../../../character/domain/Characters"

export type CharacterClassValidationResponse = {
    code: "CHARACTER_CLASS_VALID" | "CHARACTER_CLASS_INVALID"
}

export class CharacterClassValidator {
    static validate(characterType: string): CharacterClassValidationResponse {
        const CharacterInstance = new Characters()
        if (CharacterInstance.getCharactersTypes().includes(characterType)) {
            return { code: "CHARACTER_CLASS_VALID" }
        }

        return { code: "CHARACTER_CLASS_INVALID" }
    }
}
