import { NameValidator } from "./NameValidator"
import { ProfanityFilter } from "./ProfanityFilter"
import { CharacterClassValidator } from "./CharacterClassValidator"

export type CreatePlayerResponse =
    | { code: Exclude<ReturnType<typeof NameValidator.validate>["code"], "NAME_VALID"> }
    | { code: "PLAYER_CREATED" }
    | { code: "PROFANITY_DETECTED"; profanity: string }
    | { code: "CHARACTER_CLASS_INVALID" }

export class CreatePlayer {
    static createPlayer(name: string, characterType: string): CreatePlayerResponse {
        const nameValidation = NameValidator.validate(name)
        if (nameValidation.code !== "NAME_VALID") {
            return nameValidation as Exclude<CreatePlayerResponse, { code: "PLAYER_CREATED" }>
        }

        const profanityFilter = ProfanityFilter.check(name)
        if (profanityFilter.code === "PROFANITY_DETECTED") {
            return profanityFilter
        }

        const characterClassValidation = CharacterClassValidator.validate(characterType)
        if (characterClassValidation.code === "CHARACTER_CLASS_INVALID") {
            return characterClassValidation as { code: "CHARACTER_CLASS_INVALID" }
        }

        return { code: "PLAYER_CREATED" }
    }
}
