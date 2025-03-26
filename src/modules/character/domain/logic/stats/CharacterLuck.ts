import { CharacterStat } from "./AbstractCharacterStat"

export class CharacterLuck extends CharacterStat<number> {
    constructor(value: number) {
        if (value < 0) {
            throw new Error("Luck value cannot be negative")
        }
        super(value)
    }
}
