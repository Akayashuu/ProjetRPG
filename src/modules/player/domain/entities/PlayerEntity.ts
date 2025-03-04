import type { Player } from "@prisma/client"
class PlayerEntity {
    id = this.db.id
    name = this.db.name
    characterType = this.db.class
    constructor(private readonly db: Player) {}
}

export default PlayerEntity
