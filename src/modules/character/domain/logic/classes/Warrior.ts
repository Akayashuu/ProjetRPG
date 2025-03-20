import { ClassAbstract } from "./ClassAbstract.js"

class Warrior extends ClassAbstract {
    characterType = "WARRIOR"
    characterStats = {
        healthPoints: 150,
        manaPoints: 50,
        strength: 15,
        intelligence: 5,
        defense: 12,
        magicResistance: 6,
        agility: 8,
        luck: 5,
        endurance: 10,
        spirit: 4,
    }
    ascii = `
      __      _
     /__\\__  //
    //_____\\///
   _| /-_-\\)|/_
  (___\\ _ //___\\
  (  |\\_/// *  \\
   \\_| \\_((*   *))
   ( |__|_\\    *//
   (o/  _  \\_*_/
   //\\__|__/\\
  // |  | |  |
 //  _\\ | |___)
//  (___|
    
    `
}

export default Warrior
