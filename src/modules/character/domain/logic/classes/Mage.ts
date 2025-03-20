import { ClassAbstract } from "./ClassAbstract"

class Mage extends ClassAbstract {
    characterType = "MAGE"
    characterStats = {
        healthPoints: 90,
        manaPoints: 150,
        strength: 4,
        intelligence: 15,
        defense: 5,
        magicResistance: 12,
        agility: 7,
        luck: 6,
        endurance: 5,
        spirit: 10,
    }
    ascii = `
                       .
              /^\\     .
        /\\   "V"
       /__\\   I      O  o
      //..\\   I     .
      \\].\`[/ I
      /l\\/j\\ (]    .  O
     /. ~~ ,\\/I          .
     \\L__j^\\/I       o
      \\/--v}  I     o   .
       |    |  I   _________
       |    |  I c(\`       ')o
       |    l  I   \\.     ,/
     _/j  L l\\_!  _//^---^\\\\_ 
        `
}

export default Mage
