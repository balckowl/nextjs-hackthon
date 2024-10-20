import {db} from "@/db"
import { waves, users } from "@/db/schema"
import { eq, desc } from "drizzle-orm"

export const getAllSharedWaves = async () => {
    const allSharedWaves = await db.select()
    .from(waves)
    .leftJoin(users, eq(users.id, waves.userId))
    .where(eq(waves.isShared, true))
    .orderBy(desc(waves.updatedAt));

    return allSharedWaves
}

export const getAllWavesByUserId = async (userId: string) => {

    const allWavesByUserId = await db.query.waves.findMany({
        where: eq(waves.userId, userId),
        orderBy: [desc(waves.updatedAt)]
    })

    return allWavesByUserId
}

export const getWaveWithUser = async (id: number) => {
    const waveWithUser = await db
        .select({
            wave: waves,
            user: users,
        })
        .from(waves)
        .leftJoin(users, eq(users.id, waves.userId))
        .where(eq(waves.id, id))
        .limit(1)

    return waveWithUser.length > 0 ? waveWithUser[0] : null
};

