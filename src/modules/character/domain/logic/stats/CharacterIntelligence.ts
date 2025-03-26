import { CharacterStat } from "./AbstractCharacterStat"

export class CharacterIntelligence extends CharacterStat<number> {
    constructor(value: number) {
        if (value < 0) {
            throw new Error("Intelligence value cannot be negative")
        }
        super(value)
    }
}
