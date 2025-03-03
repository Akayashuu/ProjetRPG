import { describe, it, expect } from "vitest"
import { CharacterClass } from "../../character/domain/logic/classes/ClassAbstract"
import CreatePlayer from "../domain/logic/CreatePlayer"

describe("CreatePlayer", () => {
    describe("createPlayer", () => {
        it("should return NAME_TOO_SHORT when name is less than 3 characters", () => {
            const result = CreatePlayer.createPlayer("ab", CharacterClass.WARRIOR)
            expect(result).toEqual({ code: "NAME_TOO_SHORT" })
        })

        it("should return NAME_TOO_LONG when name is more than 20 characters", () => {
            const result = CreatePlayer.createPlayer(
                "abcdefghijklmnopqrstuvwxyz",
                CharacterClass.WARRIOR,
            )
            expect(result).toEqual({ code: "NAME_TOO_LONG" })
        })

        it("should return NAME_INVALID when name contains invalid characters", () => {
            const result = CreatePlayer.createPlayer("player-123", CharacterClass.WARRIOR)
            expect(result).toEqual({ code: "NAME_INVALID" })
        })

        it("should return PROFANITY_DETECTED when name contains profanity", () => {
            const result = CreatePlayer.createPlayer("cabless", CharacterClass.WARRIOR)
            expect(result).toEqual({ code: "PROFANITY_DETECTED", profanity: "cable" })
        })

        it("should return CHARACTER_CLASS_INVALID when character class is invalid", () => {
            // @ts-expect-error - Testing with invalid class
            const result = CreatePlayer.createPlayer("ValidName", "INVALID_CLASS")
            expect(result).toEqual({ code: "CHARACTER_CLASS_INVALID" })
        })

        it("should return PLAYER_CREATED for valid warrior creation", () => {
            const result = CreatePlayer.createPlayer("ValidName", CharacterClass.WARRIOR)
            expect(result).toEqual({ code: "PLAYER_CREATED" })
        })

        it("should return PLAYER_CREATED for valid mage creation", () => {
            const result = CreatePlayer.createPlayer("ValidName", CharacterClass.MAGE)
            expect(result).toEqual({ code: "PLAYER_CREATED" })
        })

        it("should return PLAYER_CREATED for valid rogue creation", () => {
            const result = CreatePlayer.createPlayer("ValidName", CharacterClass.ROGUE)
            expect(result).toEqual({ code: "PLAYER_CREATED" })
        })
    })

    describe("profanityFilter", () => {
        it('should detect profanity "cable"', () => {
            const result = CreatePlayer.profanityFilter("cable123")
            expect(result).toEqual({ code: "PROFANITY_DETECTED", profanity: "cable" })
        })

        it('should detect profanity "test"', () => {
            const result = CreatePlayer.profanityFilter("123test")
            expect(result).toEqual({ code: "PROFANITY_DETECTED", profanity: "test" })
        })

        it('should detect profanity "prof"', () => {
            const result = CreatePlayer.profanityFilter("prof")
            expect(result).toEqual({ code: "PROFANITY_DETECTED", profanity: "prof" })
        })

        it('should detect profanity "user"', () => {
            const result = CreatePlayer.profanityFilter("username")
            expect(result).toEqual({ code: "PROFANITY_DETECTED", profanity: "user" })
        })

        it("should return NO_PROFANITY_DETECTED for clean names", () => {
            const result = CreatePlayer.profanityFilter("validname")
            expect(result).toEqual({ code: "NO_PROFANITY_DETECTED" })
        })
    })

    describe("validateCharacterClass", () => {
        it("should validate WARRIOR character class", () => {
            const result = CreatePlayer.validateCharacterClass(CharacterClass.WARRIOR)
            expect(result).toEqual({ code: "PLAYER_CREATED" })
        })

        it("should validate MAGE character class", () => {
            const result = CreatePlayer.validateCharacterClass(CharacterClass.MAGE)
            expect(result).toEqual({ code: "PLAYER_CREATED" })
        })

        it("should validate ROGUE character class", () => {
            const result = CreatePlayer.validateCharacterClass(CharacterClass.ROGUE)
            expect(result).toEqual({ code: "PLAYER_CREATED" })
        })

        it("should return CHARACTER_CLASS_INVALID for invalid character classes", () => {
            // @ts-expect-error - Testing with invalid class
            const result = CreatePlayer.validateCharacterClass("INVALID_CLASS")
            expect(result).toEqual({ code: "CHARACTER_CLASS_INVALID" })
        })
    })
})
