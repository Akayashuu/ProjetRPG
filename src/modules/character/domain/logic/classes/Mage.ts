import { ClassAbstract, type MageStats } from "./ClassAbstract"

class Mage extends ClassAbstract<MageStats> {
    static characterType = "MAGE"
    protected getDefaultStats(): MageStats {
        return {
            strength: 4,
            magicResistance: 12,
            endurance: 5,
            healthPoints: 90,
            defense: 5,
            agility: 7,
            luck: 6,
            intelligence: 15,
            manaPoints: 150,
            spirit: 10,
        }
    }
}

export default Mage
