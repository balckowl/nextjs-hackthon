import { getWave } from "@/app/data/wave"
import UpdateSvgWaves from "@/components/generator/svg-waves/update-svg-waves"

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params
    const svgwaves = await getWave(Number(id))

    if (!svgwaves) {
        return <div>SVG Waves data not found.</div>
    }

    return (
        <UpdateSvgWaves svgwaves={svgwaves}/>
    )
}
