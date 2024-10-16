'use client'
import AlertPopup from "@/components/alert-popup/alert-popup";
import ColorPicker from "@/components/color-picker.tsx/color-picker";
import InputSlider from "@/components/input-slider/input-slider";
import { copyToClipboard } from "@/lib/copy-to-clipboard";
import { useState } from "react"
import { RiClipboardLine } from "react-icons/ri";

export default function Page() {

    const [boxColor, setboxColor] =useState<string>('#ff5555');
    const [boxShadowx, setboxShadowx] =useState<number>(0);
    const [boxShadowy, setboxShadowy] =useState<number>(0);
    const [boxShadowb, setboxShadowb] =useState<number>(15);
    const [boxShadows, setboxShadows] =useState<number>(-5);
    const [boxShadowColor, setboxShadowColor] = useState<string>('#777777');
    const [isCopySuccess, setisCopySuccess] = useState<boolean>(false);

    const boxShadow = `${boxShadowx}px ${boxShadowy}px ${boxShadowb}px ${boxShadows}px ${boxShadowColor}`;

  return (
    <div className="w-[75%] mx-auto min-h-[calc(100vh-80px)]">
        <AlertPopup value={isCopySuccess} setValue={setisCopySuccess} />
        <div className="grid grid-cols-2 gap-5 pt-[35px] mb-[35px]">
            <div className="flex justify-center items-center h-[320px] rounded-2xl border-[3px] overflow-hidden relative">
                <div className="w-[170px] h-[170px] rounded-[32px]" 
                    style={{ boxShadow, backgroundColor:boxColor }}
                >
                </div>
            </div>
        <div className="h-[320px] rounded-2xl border-[3px] relative">
          <button type="button" className="focus:outline-none absolute top-5 right-5 border-[2px] p-3 rounded-md" onClick={()=> copyToClipboard(boxShadow, setisCopySuccess)}>
            <RiClipboardLine color="#ededed" />
          </button>
        </div>
        </div>
        <div className="mb-[20px]">
        <h2 className="font-bold text-[20px]">プロパティ</h2>
      </div>
      <div className="grid grid-cols-4 gap-x-10 gap-y-6">
            <div>
                <p className="mb-[7px] text-[14px]">カラー</p>
                <ColorPicker color={boxColor} setColor={setboxColor} />
            </div>
            <div>
                <p className="mb-[7px] text-[14px]">シャドウカラー</p>
                <ColorPicker color={boxShadowColor} setColor={setboxShadowColor} />
            </div>
            <div>
                <p className="mb-[7px] text-[14px]">X軸オフセット</p>
                <InputSlider value={boxShadowx} setValue={setboxShadowx} min={-50} max={50} unit="px" />
            </div> 
            <div>
                <p className="mb-[7px] text-[14px]">Y軸オフセット</p>
                <InputSlider value={boxShadowy} setValue={setboxShadowy} min={-50} max={50} unit="px" />
            </div>
            <div>
                <p className="mb-[7px] text-[14px]">ぼかし</p>
                <InputSlider value={boxShadowb} setValue={setboxShadowb} min={0} max={100} unit="px" />
            </div>
            <div>
                <p className="mb-[7px] text-[14px]">広がり</p>
                <InputSlider value={boxShadows} setValue={setboxShadows} min={-50} max={50} unit="px" />
            </div>
        </div>
    </div>
  );
};
