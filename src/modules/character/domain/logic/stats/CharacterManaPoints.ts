import { CharacterStat } from "./AbstractCharacterStat"

export class CharacterManaPoints extends CharacterStat<number> {
    constructor(value: number) {
        if (value < 0) {
            throw new Error("Mana Points value cannot be negative")
        }
        super(value)
    }
}
