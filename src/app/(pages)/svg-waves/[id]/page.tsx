import { getWaveWithUser } from "@/app/data/wave"
import { auth } from "@/auth"
import UpdateSvgWaves from "@/components/generator/svg-waves/update-svg-waves"

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params
    const svgwaveWithUser = await getWaveWithUser(Number(id))

    if (!svgwaveWithUser) {
        return <div>SVG Waves data not found.</div>
    }

    const session = await auth()
    const userId = session?.user?.id || null;

    return (
        <UpdateSvgWaves svgwaveWithUser={svgwaveWithUser} userId={userId}/>
    )
}
