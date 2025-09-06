'use client'
import UpdateSvgWaves from '@/components/generator/svg-waves/update-svg-waves'
import { getLocalWaveById } from '@/lib/localStore'
import type { LocalWave } from '@/types'
import { useEffect, useState } from 'react'

export default function Page({ params }: { params: { id: string } }) {
  const [data, setData] = useState<LocalWave | null>(null)

  useEffect(() => {
    const parsed = Number(params.id)
    const found = getLocalWaveById(parsed)
    setData(found ?? null)
  }, [params.id])

  if (!data) return <div>SVG Waves data not found.</div>

  return <UpdateSvgWaves wave={data} />
}
