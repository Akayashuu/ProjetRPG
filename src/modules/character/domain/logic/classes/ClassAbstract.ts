enum CharacterClass {
    WARRIOR = "WARRIOR",
    MAGE = "MAGE",
    ROGUE = "ROGUE",
}

interface CharacterStats {
    healthPoints: number
    manaPoints: number
    strength: number
    intelligence: number
    defense: number
    magicResistance: number
    agility: number
    luck: number
    endurance: number
    spirit: number
}
abstract class ClassAbstract {
    abstract characterType: CharacterClass
    abstract characterStats: CharacterStats
}

export { CharacterClass, type CharacterStats, ClassAbstract }
