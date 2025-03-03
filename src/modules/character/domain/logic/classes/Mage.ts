import { CharacterClass, ClassAbstract } from "./ClassAbstract"

class Mage extends ClassAbstract {
    type = CharacterClass.MAGE
    stats = {
        healthPoints: 90,
        manaPoints: 150,
        strength: 4,
        intelligence: 15,
        defense: 5,
        magicResistance: 12,
        agility: 7,
        luck: 6,
        endurance: 5,
        spirit: 10,
    }
}

export default Mage
