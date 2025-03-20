import type { CharacterClass, Prisma } from "@prisma/client"
import PlayerEntity from "../domain/entities/PlayerEntity"
import GlobalPrismaClient, {
    type PrismaClientOrTransaction,
} from "../../../common/database/GlobalPrismaClient"

class PlayerRepository {
    private constructor(private client: PrismaClientOrTransaction = GlobalPrismaClient) {}

    public static default(): PlayerRepository {
        return new PlayerRepository()
    }

    public static getSaveRequest(
        player: PlayerEntity,
        tx: PrismaClientOrTransaction = GlobalPrismaClient,
    ): Prisma.PrismaPromise<unknown> {
        return tx.player.upsert({
            where: { id: player.id },
            update: {
                name: player.name,
            },
            create: {
                name: player.name,
                class: player.characterType,
            },
        })
    }

    public async createPlayer(name: string, charClass: CharacterClass) {
        const result = await this.client.player.create({
            data: {
                name: name,
                class: charClass,
            },
        })

        return new PlayerEntity(result)
    }

    public async save(player: PlayerEntity): Promise<void> {
        await PlayerRepository.getSaveRequest(player)
    }

    public async findAllPlayers(): Promise<PlayerEntity[]> {
        const players = await this.client.player.findMany()
        return players.map((player) => new PlayerEntity(player))
    }
}

export default PlayerRepository
