import { ClassAbstract, type WarriorStats } from "./ClassAbstract.js"

class Warrior extends ClassAbstract<WarriorStats> {
    static characterType = "WARRIOR"
    protected getDefaultStats(): WarriorStats {
        return {
            agility: 8,
            defense: 12,
            endurance: 10,
            healthPoints: 150,
            luck: 5,
            strength: 15,
            intelligence: 5,
            manaPoints: 50,
            spirit: 4,
            magicResistance: 6,
        }
    }
}

export default Warrior
