'use client'
import { useState } from "react"

export default function Page() {
    const [boxShadowx, setboxShadowx] =useState<string>('0');
    const [boxShadowy, setboxShadowy] =useState<string>('0');
    const [boxShadowb, setboxShadowb] =useState<string>('15');
    const [boxShadows, setboxShadows] =useState<string>('-5');
    const [boxColor, setboxColor] = useState('#777777');
    const [boxRadius, setboxRadius] =useState<string>('10');

    const boxShadow = `${boxShadowx}px ${boxShadowy}px ${boxShadowb}px ${boxShadows}px ${boxColor}`;

  return (
    <div className="container mx-auto min-h-[calc(100vh-80px-80px)]">
        <h2>Box Shadow Generator</h2>
        <div className="w-[170px] h-[170px] bg-[#f5f5f5]" 
             style={{ boxShadow, borderRadius: `${boxRadius}px` }}
        >
        </div>
        <div>
            横:{boxShadowx}px
            <input type="range" 
            onChange={(e) => setboxShadowx(e.target.value)}
            min={-100}
            max={100}
            step={1}
            />
        </div>
        <div>
            縦:{boxShadowy}px
            <input type="range" 
            onChange={(e) => setboxShadowy(e.target.value)}
            min={-100}
            max={100}
            step={1}
            />
        </div>
        <div>
            ぼかし:{boxShadowb}px
            <input type="range" 
            onChange={(e) => setboxShadowb(e.target.value)}
            min={0}
            max={100}
            step={1}
            />
        </div>
        <div>
            広がり:{boxShadows}px
            <input type="range" 
            onChange={(e) => setboxShadows(e.target.value)}
            min={-100}
            max={100}
            step={1}
            />
        </div>
        <div>
            色: <input type="color" value={boxColor} onChange={(e) => setboxColor(e.target.value)} />
        </div>
        <div>
            角丸:{boxRadius}px
            <input type="range" 
            onChange={(e) => setboxRadius(e.target.value)}
            min={0}
            max={100}
            step={1}
            />
        </div>
        <div className="bg-zinc-400">
            <h2>CSS</h2>
            box-shadow: {boxShadow};<br />
            box-radius: {boxRadius}px;<br /><br />
            <h2>Tailwindcss</h2>
            shadow-[{boxShadow}];<br />
            rounded-[{boxRadius}px];
        </div>
       
    </div>
  );
};
