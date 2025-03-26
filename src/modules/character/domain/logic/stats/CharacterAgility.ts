import { CharacterStat } from "./AbstractCharacterStat"

export class CharacterAgility extends CharacterStat<number> {
    constructor(value: number) {
        if (value < 0) {
            throw new Error("Agility value cannot be negative")
        }
        super(value)
    }
}
