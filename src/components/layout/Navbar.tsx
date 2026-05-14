import { User } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <header className="bg-surface/80 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center gap-4">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-semibold text-text-primary font-display"
          >
            Dashboard
          </motion.h2>
        </div>
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center"
          >
            <User className="w-5 h-5 text-primary" />
          </motion.div>
        </div>
      </div>
    </header>
  )
}

export default Navbar