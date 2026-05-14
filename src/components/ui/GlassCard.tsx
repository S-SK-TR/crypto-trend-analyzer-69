import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface GlassCardProps {
  children: ReactNode
  className?: string
}

const GlassCard = ({ children, className = '' }: GlassCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default GlassCard