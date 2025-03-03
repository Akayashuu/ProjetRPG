enum CharacterClass {
    WARRIOR = 0,
    MAGE = 1,
    ROGUE = 2,
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

    get type(): CharacterClass {
        return this.characterType
    }

    get stats(): CharacterStats {
        return this.characterStats
    }
}

export { CharacterClass, type CharacterStats, ClassAbstract }
