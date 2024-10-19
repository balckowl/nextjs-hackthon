import { type NextRequest, NextResponse } from "next/server"
import { db } from "@/db"
import { waves } from "@/db/schema"
import { auth } from "@/auth"

const POST = async (req: NextRequest) =>{
    const {title, isShared, type, direction, opacity, color} = await req.json()
    
    const session = await auth()

    if(!session){
        throw Error("認証してください")
    }

    const { user } = session

    const userId = user?.id

    await db.insert(waves).values({ userId: userId as string, title, isShared, type, direction, opacity, color})

    return NextResponse.json({status: 201})
}

export {POST}
