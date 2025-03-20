export type CharacterClassValidationResponse = {
    code: "CHARACTER_CLASS_VALID" | "CHARACTER_CLASS_INVALID"
}

export const VALID_CHARACTER_CLASSES: Array<string> = [] // TODO: Add valid character classes

export class CharacterClassValidator {
    static validate(characterType: string): CharacterClassValidationResponse {
        if (VALID_CHARACTER_CLASSES.includes(characterType)) {
            return { code: "CHARACTER_CLASS_VALID" }
        }

        return { code: "CHARACTER_CLASS_INVALID" }
    }
}
