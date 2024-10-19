import { type NextRequest, NextResponse } from "next/server"
import { db } from "@/db"
import { waves } from "@/db/schema"
import { auth } from "@/auth"
import {eq} from "drizzle-orm"
import { revalidatePath } from 'next/cache'

const POST = async (req: NextRequest) =>{
    const {title, isShared, type, direction, opacity, color} = await req.json()
    
    const session = await auth()

    if(!session){
        throw Error("認証してください")
    }

    const { user } = session

    const userId = user?.id

    await db.insert(waves).values({ userId: userId as string, title, isShared, type, direction, opacity, color})
    revalidatePath('/bookmark');

    return NextResponse.json({status: 201})
}

const DELETE = async (req: NextRequest) =>{
    const {id} = await req.json()
    
    const session = await auth()

    if(!session){
        throw Error("認証してください")
    }

    await db.delete(waves).where(eq(waves.id, id));
    revalidatePath('/bookmark');

    return NextResponse.json({status: 204})
}

export {POST, DELETE}
