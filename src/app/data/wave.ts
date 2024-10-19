import {db} from "@/db"
import { waves, users } from "@/db/schema"
import { eq, desc } from "drizzle-orm"

export const getAllSharedWaves = async () => {
    const allSharedWaves = await db.select()
    .from(waves)
    .leftJoin(users, eq(users.id, waves.userId))  // usersとwavesをuserIdで結合
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

export const getWave = async(id: number) => {
    
    const wave = await db.query.waves.findFirst({
        where: eq(waves.id, id)
    })

    return wave

}
