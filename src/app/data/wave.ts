import {db} from "@/db"

export const getAllWaves = async () => {
    const allwaves = await db.query.waves.findMany()

    return allwaves
}