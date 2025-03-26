type BaseStats = Partial<{
    healthPoints: number
    defense: number
    agility: number
    luck: number
    intelligence: number
    manaPoints: number
    spirit: number
    endurance: number
    strength: number
    magicResistance: number
}>

type WarriorStats = BaseStats
type MageStats = BaseStats
type RogueStats = BaseStats

/**
 * Reminder: If you use template literals it doesn't infer the type correctly ¯\_(ツ)_/¯
 */
abstract class ClassAbstract<T extends BaseStats> {
    static characterType: string
    public characterStats: T
    constructor() {
        this.characterStats = this.getDefaultStats()
    }

    protected abstract getDefaultStats(): T
}
export { ClassAbstract, type WarriorStats, type MageStats, type BaseStats, type RogueStats }
