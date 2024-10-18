import Bookmarkcard from "@/components/bookmark-card/bookmark-card"
import Button from "@/components/button/button"

export default function Page() {

  return (
    <div className="w-[75%] mx-auto min-h-[calc(100vh-80px)]">
        <h2 className="font-bold text-[30px] text-center pt-[50px] pb-[60px]">
            ブックマークしたアイテム
        </h2>
           <div>
                <div className="w-full flex justify-between p-5">
                    <div className="flex gap-6"><Button className="bg-secondary text-primary">Shadow</Button><Button className="bg-secondary text-primary">Wave</Button></div>
                    <p className="text-[#909090]">更新順</p>
                </div>
            </div>
            <div className="flex gap-5"><Bookmarkcard/></div>
    </div>
  )
}