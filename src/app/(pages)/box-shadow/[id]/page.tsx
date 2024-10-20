import { getBoxshadowWithUser } from "@/app/data/box-shadow"
import { auth } from "@/auth"
import UpdateBoxShadow from "@/components/generator/box-shadow/update-box-shadow"

export default async function Page({ params }: { params: { id: string } }) {
    
    const { id } = params
    const boxshadowWithUser = await getBoxshadowWithUser(Number(id))

    console.log(boxshadowWithUser)

    if (!boxshadowWithUser) {
        return <div>Box shadow data not found.</div>
    }

    const session = await auth()
    const userId = session?.user?.id || null;

    return (
       <UpdateBoxShadow boxshadowWithUser={boxshadowWithUser} userId={userId}/>
    )
}
