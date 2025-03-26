import type ClassAbstract from "../characters/ClassAbstract"
import type Direction from "./Direction"
import { type Movements, MoveToNorth, MoveToSouth, MoveToEast, MoveToWest } from "./Movements"

class CharacterMovement {
    private movements: { [key in Direction]: Movements }

    constructor(private readonly character: ClassAbstract) {
        this.movements = {
            NORTH: new MoveToNorth(),
            SOUTH: new MoveToSouth(),
            EAST: new MoveToEast(),
            WEST: new MoveToWest(),
        }
    }

    move(direction: Direction) {
        const movement = this.movements[direction]
        if (movement) {
            movement.move(this.character)
        }
    }
}

export default CharacterMovement
