import {db} from "@/db"
import { boxShadows, users} from "@/db/schema"
import { eq, desc } from "drizzle-orm"


export const getAllSharedBoxshadows = async () => {
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

export const getBoxshadowWithUser = async (id: number) => {
    const boxshadowWithUser = await db
        .select({
            boxShadow: boxShadows,
            user: users,
        })
        .from(boxShadows)
        .leftJoin(users, eq(users.id, boxShadows.userId))
        .where(eq(boxShadows.id, id))
        .limit(1)

    return boxshadowWithUser.length > 0 ? boxshadowWithUser[0] : null
}

