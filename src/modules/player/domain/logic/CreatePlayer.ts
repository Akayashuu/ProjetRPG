import { CharacterClass } from "../../../character/domain/logic/classes/ClassAbstract"

export type CreatePlayerResponse =
    | {
          code: "NAME_TOO_SHORT" | "NAME_TOO_LONG" | "NAME_INVALID"
      }
    | {
          code: "PLAYER_CREATED"
      }
    | {
          code: "PROFANITY_DETECTED"
          profanity: string
      }
    | {
          code: "CHARACTER_CLASS_INVALID"
      }

export type ProfanityFilterResponse =
    | {
          code: "PROFANITY_DETECTED"
          profanity: string
      }
    | {
          code: "NO_PROFANITY_DETECTED"
      }
class CreatePlayer {
    static createPlayer(name: string, characterType: CharacterClass): CreatePlayerResponse {
        if (name.length < 3) return { code: "NAME_TOO_SHORT" }
        if (name.length > 20) return { code: "NAME_TOO_LONG" }
        if (!/^[a-zA-Z0-9]+$/.test(name)) return { code: "NAME_INVALID" }

        const profanityFilter = CreatePlayer.profanityFilter(name)
        if (profanityFilter.code === "PROFANITY_DETECTED") return profanityFilter

        const characterClass = CreatePlayer.validateCharacterClass(characterType)
        return characterClass
    }

    static profanityFilter(name: string): ProfanityFilterResponse {
        const profanities = ["cable", "cables", "cabless", "cablesss"]
        const profanity = profanities.find((p) => name.includes(p))
        if (profanity) return { code: "PROFANITY_DETECTED", profanity }

        return { code: "NO_PROFANITY_DETECTED" }
    }

    static validateCharacterClass(characterType: CharacterClass): CreatePlayerResponse {
        // Could be done with a boucle, but it woudln't be very understandable
        if (characterType === CharacterClass.WARRIOR) return { code: "PLAYER_CREATED" }
        if (characterType === CharacterClass.MAGE) return { code: "PLAYER_CREATED" }
        if (characterType === CharacterClass.ROGUE) return { code: "PLAYER_CREATED" }

        return { code: "CHARACTER_CLASS_INVALID" }
    }
}

export default CreatePlayer
