'use client'
import UpdateBoxShadow from '@/components/generator/box-shadow/update-box-shadow'
import { getLocalBoxShadowById } from '@/lib/localStore'
import type { LocalBoxShadow } from '@/types'
import { useEffect, useState } from 'react'

export default function Page({ params }: { params: { id: string } }) {
  const [data, setData] = useState<LocalBoxShadow | null>(null)

  useEffect(() => {
    const parsed = Number(params.id)
    const found = getLocalBoxShadowById(parsed)
    setData(found ?? null)
  }, [params.id])

  if (!data) return <div>Box shadow data not found.</div>

  return <UpdateBoxShadow boxShadow={data} />
}
