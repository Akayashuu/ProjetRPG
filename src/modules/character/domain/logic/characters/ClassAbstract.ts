import type { CharacterClass } from "@prisma/client"

abstract class ClassAbstract {
    abstract characterType: CharacterClass
    abstract position: { x: number; y: number }
}
export default ClassAbstract
