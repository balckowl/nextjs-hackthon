import {db} from "@/db"
import { waves } from "@/db/schema"
import { eq, desc } from "drizzle-orm"

export const getAllSharedWaves = async () => {
    const allSharedWaves = await db.query.waves.findMany({
        orderBy: [desc(waves.updatedAt)],
        where: eq(waves.isShared, true),
        with:{user: true}
    })

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
