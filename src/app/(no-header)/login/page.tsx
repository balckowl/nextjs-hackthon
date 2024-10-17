import Button from "@/components/button/button";
import { FaGithub } from "react-icons/fa6";

export default function page() {
  return (
    <div className="flex h-screen">
      <div className="w-[25%] border-r-2">
        <div className="h-full flex justify-center items-center">
          <div className="mb-9">
            <img src="/logo/logo.svg" alt="" className="text-4xl font-bold mb-[24px] flex justify-start"/>
            <div className="text-2xl my-12">
              <Button variant="outline" className="font-bold rounded-lg flex"><FaGithub className="size-6 my-auto mr-2" />Github を利用してログイン</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[75%] flex justify-center items-center">
        <img src="/images/bg2.webp" alt="ロゴ画像" className=" size-full justify-center object-cover" />
      </div>
    </div>
  )
}