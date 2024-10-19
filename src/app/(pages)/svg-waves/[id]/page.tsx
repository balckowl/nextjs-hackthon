import { getWave } from "@/app/data/wave"
import UpdateSvgWaves from "@/components/generator/svg-waves/update-svg-waves"

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params
    const svgwave = await getWave(Number(id))

    if (!svgwave) {
        return <div>SVG Waves data not found.</div>
    }

    return (
        <UpdateSvgWaves svgwave={svgwave}/>
    )
}
