import { PrismaClient, type Prisma } from "@prisma/client"

export const GlobalPrismaClient = new PrismaClient()
export default GlobalPrismaClient

export type PrismaClientOrTransaction = Omit<
    PrismaClient<Prisma.PrismaClientOptions, never>,
    "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
>
