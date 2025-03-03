import { CharacterClass } from "../../../character/domain/logic/classes/ClassAbstract"

export type ProfanityFilterResponse =
    | { code: "PROFANITY_DETECTED"; profanity: string }
    | { code: "NO_PROFANITY_DETECTED" }

export type NameValidationResponse = {
    code: "NAME_TOO_SHORT" | "NAME_TOO_LONG" | "NAME_INVALID" | "NAME_VALID"
}

export type CharacterClassValidationResponse = {
    code: "CHARACTER_CLASS_VALID" | "CHARACTER_CLASS_INVALID"
}

export type CreatePlayerResponse =
    | { code: Exclude<NameValidationResponse["code"], "NAME_VALID"> }
    | { code: "PLAYER_CREATED" }
    | { code: Exclude<ProfanityFilterResponse["code"], "NO_PROFANITY_DETECTED">; profanity: string }
    | { code: "CHARACTER_CLASS_INVALID" }

class CreatePlayer {
    private static readonly PROFANITIES = ["cable", "test", "prof", "user"]
    private static readonly VALID_CHARACTER_CLASSES = [
        CharacterClass.WARRIOR,
        CharacterClass.MAGE,
        CharacterClass.ROGUE,
    ]

    static createPlayer(name: string, characterType: CharacterClass): CreatePlayerResponse {
        const nameValidation = CreatePlayer.validateName(name)
        if (nameValidation.code !== "PLAYER_CREATED") {
            return nameValidation
        }

        const profanityFilter = CreatePlayer.profanityFilter(name)
        if (profanityFilter.code === "PROFANITY_DETECTED") {
            return profanityFilter
        }

        const characterClassValidation = CreatePlayer.validateCharacterClass(characterType)
        if (characterClassValidation.code === "CHARACTER_CLASS_INVALID") {
            return characterClassValidation as CreatePlayerResponse
        }

        return { code: "PLAYER_CREATED" }
    }

    static validateName(name: string): CreatePlayerResponse {
        if (name.length < 3) return { code: "NAME_TOO_SHORT" }
        if (name.length > 20) return { code: "NAME_TOO_LONG" }
        if (!/^[a-zA-Z0-9]+$/.test(name)) return { code: "NAME_INVALID" }

        return { code: "PLAYER_CREATED" }
    }

    static profanityFilter(name: string): ProfanityFilterResponse {
        const profanity = CreatePlayer.PROFANITIES.find((p) => name.toLowerCase().includes(p))
        if (profanity) return { code: "PROFANITY_DETECTED", profanity }

        return { code: "NO_PROFANITY_DETECTED" }
    }

    static validateCharacterClass(characterType: CharacterClass): CharacterClassValidationResponse {
        if (CreatePlayer.VALID_CHARACTER_CLASSES.includes(characterType)) {
            return { code: "CHARACTER_CLASS_VALID" }
        }

        return { code: "CHARACTER_CLASS_INVALID" }
    }
}

export default CreatePlayer
