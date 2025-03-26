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

class Warrior extends ClassAbstract {
    public characterType: CharacterClass = "WARRIOR"
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
        this.health = new CharacterHealth(150)
        this.manaPoints = new CharacterManaPoints(50)
        this.strength = new CharacterStrength(15)
        this.intelligence = new CharacterIntelligence(5)
        this.defense = new CharacterDefense(12)
        this.magicResistance = new CharacterMagicResistance(6)
        this.agility = new CharacterAgility(8)
        this.luck = new CharacterLuck(5)
        this.endurance = new CharacterEndurance(10)
        this.spirit = new CharacterSpirit(4)
    }
}

export default Warrior
