import { CharacterStat } from "./AbstractCharacterStat"

export class CharacterMagicResistance extends CharacterStat<number> {
    constructor(value: number) {
        if (value < 0) {
            throw new Error("Magic Resistance value cannot be negative")
        }
        super(value)
    }
}
