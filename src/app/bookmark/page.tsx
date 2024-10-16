'use client'

export default function Page() {
  return (
    <div className="container mx-auto min-h-[calc(100vh-80px)]">
        <h2 className="font-bold text-[30px] text-center pt-[50px] pb-[60px]">
            ブックマークしたアイテム
        </h2>
        <div className="scale-90">
            <div>
                <div className="w-full flex justify-between p-5">
                    <div className="flex gap-6"><p>ブックマーク</p><p>共有</p><p>ブックマーク</p><p>共有</p></div>
                    <p>更新順</p>
                </div>
            </div>
            <div className="grid grid-cols-6 grid-rows-6 gap-10">
                <div className="col-span-2 row-span-3 border-[3px] h-[250px] rounded-[30px]">
                    <div className="h-full w-full"></div> 
                    <div className="flex justify-between">
                        <h2 className="text-xl font-bold">タイトル</h2>
                        <button>公開</button>
                    </div>
                </div>
                <div className="col-span-2 row-span-3 col-start-3 border-[3px] h-[250px] rounded-[30px]">
                <div className="h-full w-full"></div> 
                    <div className="flex justify-between">
                        <h2 className="text-xl font-bold">タイトル</h2>
                        <button>公開</button>
                    </div>
                </div>
                <div className="col-span-2 row-span-3 col-start-5 border-[3px] h-[250px] rounded-[30px]">
                <div className="h-full w-full"></div> 
                    <div className="flex justify-between">
                        <h2 className="text-xl font-bold">タイトル</h2>
                        <button>公開</button>
                    </div>
                </div>
                <div className="col-span-2 row-span-3 row-start-4 border-[3px] h-[250px] rounded-[30px]">
                <div className="h-full w-full"></div> 
                    <div className="flex justify-between">
                        <h2 className="text-xl font-bold">タイトル</h2>
                        <button>公開</button>
                    </div>
                </div>
                <div className="col-span-2 row-span-3 col-start-3 row-start-4 border-[3px] h-[250px] rounded-[30px]">
                <div className="h-full w-full"></div> 
                    <div className="flex justify-between">
                        <h2 className="text-xl font-bold">タイトル</h2>
                        <button>公開</button>
                    </div>
                </div>
                <div className="col-span-2 row-span-3 col-start-5 row-start-4 border-[3px] h-[250px] rounded-[30px]">
                <div className="h-full w-full"></div> 
                    <div className="flex justify-between">
                        <h2 className="text-xl font-bold">タイトル</h2>
                        <button>公開</button>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  )
}
