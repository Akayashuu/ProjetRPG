import ClassAbstract from "../modules/character/domain/logic/characters/ClassAbstract"
import { CharacterHealth } from "../modules/character/domain/logic/stats/CharacterHealth"
import { CharacterManaPoints } from "../modules/character/domain/logic/stats/CharacterManaPoints"
import { CharacterStrength } from "../modules/character/domain/logic/stats/CharacterStrength"
import { CharacterIntelligence } from "../modules/character/domain/logic/stats/CharacterIntelligence"
import { CharacterDefense } from "../modules/character/domain/logic/stats/CharacterDefense"
import { CharacterMagicResistance } from "../modules/character/domain/logic/stats/CharacterMagicResistance"
import { CharacterAgility } from "../modules/character/domain/logic/stats/CharacterAgility"
import { CharacterLuck } from "../modules/character/domain/logic/stats/CharacterLuck"
import { CharacterEndurance } from "../modules/character/domain/logic/stats/CharacterEndurance"
import { CharacterSpirit } from "../modules/character/domain/logic/stats/CharacterSpirit"
import type { CharacterClass } from "@prisma/client"
import CharacterMovement from "../modules/character/domain/logic/movements/CharacterMovements"

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
    public movements: CharacterMovement

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
        this.movements = new CharacterMovement(this)
    }
}

export default Mage
