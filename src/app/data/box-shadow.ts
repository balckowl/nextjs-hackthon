import {db} from "@/db"
import { boxShadows } from "@/db/schema"
import { eq, desc } from "drizzle-orm"


export const getAllSharedBoxshadows = async () => {
    const allSharedBoxshadows = await db.query.boxShadows.findMany({
        orderBy: [desc(boxShadows.updatedAt)],
        where: eq(boxShadows.isShared, true)
    })

    return allSharedBoxshadows
}

export const getAllBoxshadowsByUserId = async (userId: string) => {

    const allBoxshadowsByUserId = await db.query.boxShadows.findMany({
        where: eq(boxShadows.userId, userId),
        orderBy: [desc(boxShadows.updatedAt)]
      })

    return allBoxshadowsByUserId
}

export const getBoxshadow = async(id: number) => {
    
    const boxShadow = await db.query.boxShadows.findFirst({
        where: eq(boxShadows.id, id)
    })

    return boxShadow

}
