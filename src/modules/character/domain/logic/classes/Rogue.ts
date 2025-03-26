import { ClassAbstract, type RogueStats } from "./ClassAbstract"

class Rogue extends ClassAbstract<RogueStats> {
    static characterType = "ROGUE"
    protected getDefaultStats(): RogueStats {
        return {
            healthPoints: 110,
            manaPoints: 70,
            strength: 10,
            intelligence: 7,
            defense: 8,
            magicResistance: 7,
            agility: 15,
            luck: 12,
            endurance: 7,
            spirit: 6,
        }
    }
}

export default Rogue
