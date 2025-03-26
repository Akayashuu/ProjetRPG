import ClassAbstract from "./ClassAbstract"
import { CharacterHealth } from "../stats/CharacterHealth"
import { CharacterManaPoints } from "../stats/CharacterManaPoints"
import { CharacterStrength } from "../stats/CharacterStrength"
import { CharacterIntelligence } from "../stats/CharacterIntelligence"
import { CharacterDefense } from "../stats/CharacterDefense"
import { CharacterMagicResistance } from "../stats/CharacterMagicResistance"
import { CharacterAgility } from "../stats/CharacterAgility"
import { CharacterLuck } from "../stats/CharacterLuck"
import { CharacterEndurance } from "../stats/CharacterEndurance"
import { CharacterSpirit } from "../stats/CharacterSpirit"
import type { CharacterClass } from "@prisma/client"

class Mage extends ClassAbstract {
    public characterType: CharacterClass = "MAGE"
    public position = { x: 0, y: 0 }

    public health: CharacterHealth
    public manaPoints: CharacterManaPoints
    public strength: CharacterStrength
    public intelligence: CharacterIntelligence
    public defense: CharacterDefense
    public magicResistance: CharacterMagicResistance
    public agility: CharacterAgility
    public luck: CharacterLuck
    public endurance: CharacterEndurance
    public spirit: CharacterSpirit

    public constructor() {
        super()
        this.health = new CharacterHealth(90)
        this.manaPoints = new CharacterManaPoints(150)
        this.strength = new CharacterStrength(4)
        this.intelligence = new CharacterIntelligence(15)
        this.defense = new CharacterDefense(5)
        this.magicResistance = new CharacterMagicResistance(12)
        this.agility = new CharacterAgility(7)
        this.luck = new CharacterLuck(6)
        this.endurance = new CharacterEndurance(5)
        this.spirit = new CharacterSpirit(10)
    }
}

export default Mage
