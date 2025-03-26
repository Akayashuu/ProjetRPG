import { CharacterStat } from "./AbstractCharacterStat"

export class CharacterSpirit extends CharacterStat<number> {
    constructor(value: number) {
        if (value < 0) {
            throw new Error("Spirit value cannot be negative")
        }
        super(value)
    }
}
