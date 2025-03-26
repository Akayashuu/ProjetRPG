import { describe, it, expect } from "vitest"
import Mage from "./domain/logic/characters/Mage"
import CharacterMovement from "./domain/logic/movements/CharacterMovements"
import Directions from "./domain/logic/movements/Direction"

describe("CharacterMovement", () => {
    const mockCharacter = new Mage()
    const characterMovement = new CharacterMovement(mockCharacter)

    it("should move character to the north", () => {
        const initialPosition = { ...mockCharacter.position }
        characterMovement.move(Directions.NORTH)
        expect(mockCharacter.position.y).toBe(initialPosition.y + 1)
        expect(mockCharacter.position.x).toBe(initialPosition.x)
    })

    it("should move character to the south", () => {
        const initialPosition = { ...mockCharacter.position }
        characterMovement.move(Directions.SOUTH)
        expect(mockCharacter.position.y).toBe(initialPosition.y - 1)
        expect(mockCharacter.position.x).toBe(initialPosition.x)
    })

    it("should move character to the east", () => {
        const initialPosition = { ...mockCharacter.position }
        characterMovement.move(Directions.EAST)
        expect(mockCharacter.position.x).toBe(initialPosition.x + 1)
        expect(mockCharacter.position.y).toBe(initialPosition.y)
    })

    it("should move character to the west", () => {
        const initialPosition = { ...mockCharacter.position }
        characterMovement.move(Directions.WEST)
        expect(mockCharacter.position.x).toBe(initialPosition.x - 1)
        expect(mockCharacter.position.y).toBe(initialPosition.y)
    })

    it("should not move character if direction is invalid", () => {
        const initialPosition = { ...mockCharacter.position }
        characterMovement.move("INVALID_DIRECTION" as unknown as Directions)
        expect(mockCharacter.position).toEqual(initialPosition)
    })
})
