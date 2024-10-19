import {db} from "@/db"
import { boxShadows, users} from "@/db/schema"
import { eq, desc } from "drizzle-orm"


export const getAllSharedBoxshadowsWithUser = async () => {
    const allSharedBoxshadows = await db.select()
    .from(boxShadows)
    .leftJoin(users, eq(users.id, boxShadows.userId))
    .where(eq(boxShadows.isShared, true))
    .orderBy(desc(boxShadows.updatedAt));

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
