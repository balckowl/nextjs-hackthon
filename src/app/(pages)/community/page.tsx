import { getAllSharedBoxshadows } from "@/app/data/box-shadow"
import { getAllSharedWaves } from "@/app/data/wave"
import { auth } from "@/auth";
import Community from "@/components/community/community"

export default async function Page() {

    const session = await auth()
    const userId = session?.user?.id || null;

    const allSharedBoxShadowWithUsers = await getAllSharedBoxshadows()
    const allSharedWavesWithUsers = await getAllSharedWaves()

    return (
        <Community allBoxShadowsWithUsers={allSharedBoxShadowWithUsers} allWavesWithUsers={allSharedWavesWithUsers} userId={userId}/>
    )
}
