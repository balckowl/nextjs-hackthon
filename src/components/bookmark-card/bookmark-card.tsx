'use client'
import { useState } from 'react'

export default function Bookmarkcard() {
    const [isPublic, setIsPublic] = useState<boolean>(false)


  return (
    <div className="border-[3px] h-[267px] w-[410px] rounded-[30px]">
        <div className="h-full w-full"></div>
            <div className="flex justify-between">
                <h2 className="text-xl mt-2">タイトル</h2>
                <button
                    type="button"
                    onClick={() => setIsPublic(true)}
                    className={`${isPublic ? 'bg-[#ededed] text-[#909090] hidden' : 'bg-secondary text-primary'} font-bold text-[13px] px-5 mt-2 rounded-xl`}
                >
                    公開
                </button>
                <button
                    type="button"
                    onClick={() => setIsPublic(false)}
                    className={`${!isPublic ? 'bg-secondary text-primary hidden' : 'bg-[#ededed] text-[#909090]'} font-bold text-[13px] px-5 mt-2 rounded-xl`}
                >
                    非公開
                </button>  
            </div>
            <small className='text-[#BEBEBE]'>yyyy/mm/dd hh/mm/ss</small>
    </div>
  )
}
