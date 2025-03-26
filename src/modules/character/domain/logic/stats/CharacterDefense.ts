import { CharacterStat } from "./AbstractCharacterStat"

export class CharacterDefense extends CharacterStat<number> {
    constructor(value: number) {
        if (value < 0) {
            throw new Error("Defejse value cannot be negative")
        }
        super(value)
    }
}
