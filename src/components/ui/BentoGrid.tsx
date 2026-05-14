import { ReactNode } from 'react'
import GlassCard from './GlassCard'

interface BentoGridProps {
  children: ReactNode
  className?: string
}

const BentoGrid = ({ children, className = '' }: BentoGridProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${className}`}>
      {children}
    </div>
  )
}

export default BentoGrid