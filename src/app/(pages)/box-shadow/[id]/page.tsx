import { getBoxshadow } from "@/app/data/box-shadow"
import UpdateBoxShadow from "@/components/generator/box-shadow/update-box-shadow"

export default async function Page({ params }: { params: { id: string } }) {
    
    const { id } = params
    const boxshadow = await getBoxshadow(Number(id))

    if (!boxshadow) {
        return <div>Box shadow data not found.</div>
    }

    return (
       <UpdateBoxShadow boxshadow={boxshadow} />
    )
}
