import { CharacterStat } from "./AbstractCharacterStat"

export class CharacterHealth extends CharacterStat<number> {
    constructor(value: number) {
        if (value < 0) {
            throw new Error("Health value cannot be negative")
        }
        super(value)
    }
}
