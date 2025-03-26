import type ClassAbstract from "../characters/ClassAbstract"

interface Movements {
    move(character: ClassAbstract): void
}

class MoveToNorth implements Movements {
    move(character: ClassAbstract) {
        character.position.y += 1
    }
}

class MoveToSouth implements Movements {
    move(character: ClassAbstract) {
        character.position.y -= 1
    }
}

class MoveToEast implements Movements {
    move(character: ClassAbstract) {
        character.position.x += 1
    }
}

class MoveToWest implements Movements {
    move(character: ClassAbstract) {
        character.position.x -= 1
    }
}

export { type Movements, MoveToNorth, MoveToSouth, MoveToEast, MoveToWest }
