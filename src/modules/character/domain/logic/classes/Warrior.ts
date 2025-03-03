import { CharacterClass, ClassAbstract } from "./ClassAbstract"

class Warrior extends ClassAbstract {
    type = CharacterClass.WARRIOR
    stats = {
        healthPoints: 150,
        manaPoints: 50,
        strength: 15,
        intelligence: 5,
        defense: 12,
        magicResistance: 6,
        agility: 8,
        luck: 5,
        endurance: 10,
        spirit: 4,
    }
}

export default Warrior
