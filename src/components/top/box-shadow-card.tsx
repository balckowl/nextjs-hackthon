"use client"

import GeneratorCard from './generator-card'
import { motion } from 'framer-motion'

export default function BoxShadowCard() {
  return (
    <GeneratorCard name="Shadow">
      <motion.div
        className="absolute bg-primary w-[100%] h-[100%] rotate-[290deg] left-[-55%] shadow-2xl"
        animate={{ left: ['100%', '-70%', '-55%'] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
    </GeneratorCard>
  )
}
