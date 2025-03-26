import type ClassAbstract from "./logic/characters/ClassAbstract"
import Mage from "./logic/characters/Mage"
import Warrior from "./logic/characters/Warrior"

class Characters {
    private Characters: ClassAbstract[] = []

    public constructor() {
        this.Characters.push(new Mage())
        this.Characters.push(new Warrior())
        this.Characters.push(new Warrior())
    }

    public getCharactersTypes(): string[] {
        return this.Characters.map((c) => c.characterType)
    }
}

export default Characters
