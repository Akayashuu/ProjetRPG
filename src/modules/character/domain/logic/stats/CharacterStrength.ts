import { CharacterStat } from "./AbstractCharacterStat"

export class CharacterStrength extends CharacterStat<number> {
    constructor(value: number) {
        if (value < 0) {
            throw new Error("Strength value cannot be negative")
        }
        super(value)
    }
}
