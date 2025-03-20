import { describe, it, expect } from "vitest"
import { CreatePlayer } from "../domain/logic/CreatePlayer"

describe("createPlayer", () => {
    it("should return NAME_TOO_SHORT when name is less than 3 characters", () => {
        const result = CreatePlayer.createPlayer("ab", "WARRIOR")
        expect(result).toEqual({ code: "NAME_TOO_SHORT" })
    })

    it("should return NAME_TOO_LONG when name is more than 20 characters", () => {
        const result = CreatePlayer.createPlayer("abcdefghijklmnopqrstuvwxyz", "WARRIOR")
        expect(result).toEqual({ code: "NAME_TOO_LONG" })
    })

    it("should return NAME_INVALID when name contains invalid characters", () => {
        const result = CreatePlayer.createPlayer("player-123", "WARRIOR")
        expect(result).toEqual({ code: "NAME_INVALID" })
    })

    it("should return PROFANITY_DETECTED when name contains profanity", () => {
        const result = CreatePlayer.createPlayer("cabless", "WARRIOR")
        expect(result).toEqual({ code: "PROFANITY_DETECTED", profanity: "cable" })
    })

    it("should return CHARACTER_CLASS_INVALID when character class is invalid", () => {
        const result = CreatePlayer.createPlayer("ValidName", "INVALID_CLASS")
        expect(result).toEqual({ code: "CHARACTER_CLASS_INVALID" })
    })

    it("should return PLAYER_CREATED for valid warrior creation", () => {
        const result = CreatePlayer.createPlayer("ValidName", "WARRIOR")
        expect(result).toEqual({ code: "PLAYER_CREATED" })
    })

    it("should return PLAYER_CREATED for valid mage creation", () => {
        const result = CreatePlayer.createPlayer("ValidName", "MAGE")
        expect(result).toEqual({ code: "PLAYER_CREATED" })
    })

    it("should return PLAYER_CREATED for valid rogue creation", () => {
        const result = CreatePlayer.createPlayer("ValidName", "ROGUE")
        expect(result).toEqual({ code: "PLAYER_CREATED" })
    })
})
