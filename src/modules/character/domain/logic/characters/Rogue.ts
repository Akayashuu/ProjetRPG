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
import CharacterMovement from "../movements/CharacterMovements"

class Rogue extends ClassAbstract {
    public characterType: CharacterClass = "ROGUE"
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
    public movements: CharacterMovement

    public constructor() {
        super()
        this.health = new CharacterHealth(110)
        this.manaPoints = new CharacterManaPoints(70)
        this.strength = new CharacterStrength(10)
        this.intelligence = new CharacterIntelligence(7)
        this.defense = new CharacterDefense(8)
        this.magicResistance = new CharacterMagicResistance(7)
        this.agility = new CharacterAgility(15)
        this.luck = new CharacterLuck(12)
        this.endurance = new CharacterEndurance(7)
        this.spirit = new CharacterSpirit(6)
        this.movements = new CharacterMovement(this)
    }
}

export default Rogue
