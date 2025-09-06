import type { LocalBoxShadow, LocalWave } from '@/types'

const WAVE_KEY = 'local:waves'
const BOX_KEY = 'local:boxshadows'
const WAVE_ID_KEY = 'local:waves:nextId'
const BOX_ID_KEY = 'local:boxshadows:nextId'

const isBrowser = () => typeof window !== 'undefined'

function getNextId(key: string) {
  if (!isBrowser()) return Math.floor(Math.random() * 1e9)
  const raw = window.localStorage.getItem(key)
  const current = raw ? Number(raw) : 1
  const next = current + 1
  window.localStorage.setItem(key, String(next))
  return current
}

function readArray<T>(key: string): T[] {
  if (!isBrowser()) return []
  const raw = window.localStorage.getItem(key)
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw) as T[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function writeArray<T>(key: string, data: T[]) {
  if (!isBrowser()) return
  window.localStorage.setItem(key, JSON.stringify(data))
}

// Waves
export function getAllLocalWaves(): LocalWave[] {
  const arr = readArray<LocalWave>(WAVE_KEY)
  // Sort newest first
  return [...arr].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

export function getLocalWaveById(id: number): LocalWave | undefined {
  return getAllLocalWaves().find((w) => w.id === id)
}

export function addLocalWave(input: Omit<LocalWave, 'id' | 'createdAt' | 'updatedAt'>): LocalWave {
  const id = getNextId(WAVE_ID_KEY)
  const now = new Date().toISOString()
  const record: LocalWave = { id, createdAt: now, updatedAt: now, ...input }
  const arr = readArray<LocalWave>(WAVE_KEY)
  arr.push(record)
  writeArray(WAVE_KEY, arr)
  return record
}

export function updateLocalWave(id: number, update: Partial<LocalWave>) {
  const arr = readArray<LocalWave>(WAVE_KEY)
  const idx = arr.findIndex((w) => w.id === id)
  if (idx === -1) return
  arr[idx] = { ...arr[idx], ...update, updatedAt: new Date().toISOString() }
  writeArray(WAVE_KEY, arr)
}

export function deleteLocalWave(id: number) {
  const arr = readArray<LocalWave>(WAVE_KEY)
  const next = arr.filter((w) => w.id !== id)
  writeArray(WAVE_KEY, next)
}

// Box Shadows
export function getAllLocalBoxShadows(): LocalBoxShadow[] {
  const arr = readArray<LocalBoxShadow>(BOX_KEY)
  return [...arr].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

export function getLocalBoxShadowById(id: number): LocalBoxShadow | undefined {
  return getAllLocalBoxShadows().find((b) => b.id === id)
}

export function addLocalBoxShadow(input: Omit<LocalBoxShadow, 'id' | 'createdAt' | 'updatedAt'>): LocalBoxShadow {
  const id = getNextId(BOX_ID_KEY)
  const now = new Date().toISOString()
  const record: LocalBoxShadow = { id, createdAt: now, updatedAt: now, ...input }
  const arr = readArray<LocalBoxShadow>(BOX_KEY)
  arr.push(record)
  writeArray(BOX_KEY, arr)
  return record
}

export function updateLocalBoxShadow(id: number, update: Partial<LocalBoxShadow>) {
  const arr = readArray<LocalBoxShadow>(BOX_KEY)
  const idx = arr.findIndex((b) => b.id === id)
  if (idx === -1) return
  arr[idx] = { ...arr[idx], ...update, updatedAt: new Date().toISOString() }
  writeArray(BOX_KEY, arr)
}

export function deleteLocalBoxShadow(id: number) {
  const arr = readArray<LocalBoxShadow>(BOX_KEY)
  const next = arr.filter((b) => b.id !== id)
  writeArray(BOX_KEY, next)
}

