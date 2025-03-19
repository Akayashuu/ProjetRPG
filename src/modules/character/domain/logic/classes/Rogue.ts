import { CharacterClass, ClassAbstract } from "./ClassAbstract"

class Rogue extends ClassAbstract {
    characterType = CharacterClass.ROGUE
    characterStats = {
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
    ascii = `
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣾⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣿⣿⣿⣿⠿⢋⡥⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡿⠋⣴⠏⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⡿⢿⣿⣦⣀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⡟⠁⠀⠉⠛⠿⠿⠿⢿⣿⡇⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣯⣤⣤⣤⣤⠀⠀⠀⠘⣆⠤⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⣸⡟⠀⠀⠀
        ⠀⠀⠀⠀⢀⣠⣾⣿⣿⣿⣿⣿⣿⣿⠉⠁⠀⠀⠀⢸⣿⣿⠇⠀⠀⡟⠀⠀⠀⠀
        ⠀⠀⢀⣴⣿⡿⠿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠈⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⢠⡿⠋⠁⠀⠀⠀⠉⠙⠻⠿⢿⡿⠀⠀⠀⠀⠀⠀⣿⣿⣤⣤⡀⠀⠀⠀⠀⠀
            
    `
}

export default Rogue
