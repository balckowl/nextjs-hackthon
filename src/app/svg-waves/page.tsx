'use client'
import { useState } from 'react'

export default function Page() {
  const [fill, setFill] = useState<string>('#000000')
  const [fillOpacity, setFillOpactiy] = useState<string>('0')
  return (
    <div className="container mx-auto min-h-[calc(100vh-80px-80px)]">
      <h2>SVG Waves Generator</h2>
      <div>
        色： <input type="color" onChange={(e) => setFill(e.target.value)} />
      </div>
      <div>
        透明度：
        <input
          type="range"
          onChange={(e) => setFillOpactiy(e.target.value)}
          min={0}
          max={1}
          step="0.01"
        />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <title>装飾用の波形</title>
        <path
          fill={fill}
          fill-opacity={fillOpacity}
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  )
}
