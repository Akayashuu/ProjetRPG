import { CharacterStat } from "./AbstractCharacterStat"

export class CharacterEndurance extends CharacterStat<number> {
    constructor(value: number) {
        if (value < 0) {
            throw new Error("Endurance value cannot be negative")
        }
        super(value)
    }
}
