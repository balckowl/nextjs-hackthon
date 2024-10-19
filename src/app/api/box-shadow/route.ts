import  { type NextRequest, NextResponse } from "next/server"
import { db } from "@/db"
import { boxShadows } from "@/db/schema"
import { auth } from "@/auth"
import {eq} from "drizzle-orm"
import { revalidatePath } from 'next/cache'

const POST = async (req: NextRequest) =>{
    const {title, isShared, offsetX, offsetY, blurRadius, spreadRadius, color, shadowColor} = await req.json()
    
    const session = await auth()

    if(!session){
        throw Error("認証してください")
    }

    const { user } = session

    const userId = user?.id

    await db.insert(boxShadows).values({ userId: userId as string, title, isShared, offsetX, offsetY, blurRadius, spreadRadius, color, shadowColor  })
    revalidatePath('/bookmark');

    return NextResponse.json({status: 201})
}

const DELETE = async (req: NextRequest) =>{
    const {id} = await req.json()
    
    const session = await auth()

    if(!session){
        throw Error("認証してください")
    }

    await db.delete(boxShadows).where(eq(boxShadows.id, id));
    revalidatePath('/bookmark');

    return NextResponse.json({status: 204})
}

export {POST, DELETE}
