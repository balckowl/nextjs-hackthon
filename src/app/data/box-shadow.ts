import {db} from "@/db"

export const getAllBoxshadows = async () => {
    const allBoxshadows = await db.query.boxShadows.findMany()

    return allBoxshadows
}