import {db} from "@/db"
import { boxShadows } from "@/db/schema"
import { eq, desc } from "drizzle-orm"


export const getAllBoxshadows = async () => {
    const allBoxshadows = await db.query.boxShadows.findMany({
        orderBy: [desc(boxShadows.id)]
    })

    return allBoxshadows
}

export const getAllBoxshadowsByUserId = async (userId: string) => {

    const allBoxshadowsByUserId = await db.query.boxShadows.findMany({
        where: eq(boxShadows.userId, userId)
      })

    return allBoxshadowsByUserId
}

export const getBoxshadow = async(id: number) => {
    
    const boxShadow = await db.query.boxShadows.findFirst({
        where: eq(boxShadows.id, id)
    })

    return boxShadow

}
