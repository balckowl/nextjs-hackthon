import { getAllBoxshadows } from "@/app/data/box-shadow"
import { getAllWaves } from "@/app/data/wave"
import BookMark from "@/components/bookmark-card/bookmark"

export default async function Page() {

  const allWaves = await getAllWaves()
  const allBoxShadows = await getAllBoxshadows()

  return (
    <div>
      <BookMark allWaves={allWaves} allBoxShadows={allBoxShadows}/>
    </div>
  )
}
