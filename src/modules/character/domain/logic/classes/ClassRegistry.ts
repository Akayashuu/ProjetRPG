import { CharacterClass } from "./ClassAbstract"
import Mage from "./Mage"
import Rogue from "./Rogue"
import Warrior from "./Warrior"

class ClassRegistry {
    static classes = {
        [CharacterClass.WARRIOR]: Warrior,
        [CharacterClass.MAGE]: Mage,
        [CharacterClass.ROGUE]: Rogue,
    }

    static getClass(charClass: CharacterClass) {
        return ClassRegistry.classes[charClass]
    }
}

export default ClassRegistry
