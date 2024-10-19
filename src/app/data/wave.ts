import {db} from "@/db"
import { waves } from "@/db/schema"
import { eq } from "drizzle-orm"

export const getAllWaves = async () => {
    const allWaves = await db.query.waves.findMany()

    return allWaves
}

export const getAllWavesByUserId = async (userId: string) => {

    const allWavesByUserId = await db.query.waves.findMany({
        where: eq(waves.userId, userId)
    })

    return allWavesByUserId
}