import {db} from "@/db"
import { boxShadows } from "@/db/schema"
import { eq } from "drizzle-orm"


export const getAllBoxshadows = async () => {
    const allBoxshadows = await db.query.boxShadows.findMany()

    return allBoxshadows
}

export const getAllBoxshadowsByUserId = async (userId: string) => {

    const allBoxshadowsByUserId = await db.query.boxShadows.findMany({
        where: eq(boxShadows.userId, userId)
      })

    return allBoxshadowsByUserId
}