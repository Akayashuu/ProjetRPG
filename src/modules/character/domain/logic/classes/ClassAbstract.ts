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
    abstract characterType: string
    abstract characterStats: CharacterStats
    abstract ascii: string
}

export { type CharacterStats, ClassAbstract }
