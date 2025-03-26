import type { CharacterClass } from "@prisma/client"

abstract class ClassAbstract {
    abstract characterType: CharacterClass
}
export default ClassAbstract
