import  { type NextRequest, NextResponse } from "next/server"
import { db } from "@/db"
import { boxShadows } from "@/db/schema"
import { auth } from "@/auth"

const POST = async (req: NextRequest) =>{
    const {isShared, offsetX, offsetY, blurRadius, spreadRadius, color, shadowColor} = await req.json()
    
    const session = await auth()

    if(!session){
        throw Error("認証してください")
    }

    const { user } = session

    const userId = user?.id

    await db.insert(boxShadows).values({ userId: userId as string, isShared, offsetX, offsetY, blurRadius, spreadRadius, color, shadowColor  })

    return NextResponse.json({status: 201})
}

export {POST}
