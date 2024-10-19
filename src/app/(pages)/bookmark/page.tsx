import { getAllBoxshadows, getAllBoxshadowsByUserId } from "@/app/data/box-shadow"
import { getAllWaves, getAllWavesByUserId } from "@/app/data/wave"
import { auth } from "@/auth"
import BookMark from "@/components/bookmark-card/bookmark"

export default async function Page() {

  const session = await auth()

  if (!session) return "ログインしてませんね"

  const { user } = session

  const allWaves = await getAllWavesByUserId(user?.id as string)
  const allBoxShadows = await getAllBoxshadowsByUserId(user?.id as string)

  return (
    <div>
      <BookMark allWaves={allWaves} allBoxShadows={allBoxShadows} />
    </div>
  )
}
