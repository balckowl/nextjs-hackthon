import {db} from "@/db"
import { waves } from "@/db/schema"
import { eq, desc } from "drizzle-orm"

export const getAllWaves = async () => {
    const allWaves = await db.query.waves.findMany({
        orderBy: [desc(waves.id)]
    })

    return allWaves
}

export const getAllWavesByUserId = async (userId: string) => {

    const allWavesByUserId = await db.query.waves.findMany({
        where: eq(waves.userId, userId)
    })

    return allWavesByUserId
}

export const getWave = async(id: number) => {
    
    const wave = await db.query.waves.findFirst({
        where: eq(waves.id, id)
    })

    return wave

}
