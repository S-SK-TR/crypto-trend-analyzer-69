import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, BarChart2, TrendingUp, Target, Settings } from 'lucide-react'

const BottomNav = () => {
  const navItems = [
    { to: '/dashboard', icon: Home, label: 'Dashboard' },
    { to: '/market', icon: BarChart2, label: 'Market' },
    { to: '/analysis', icon: TrendingUp, label: 'Analysis' },
    { to: '/strategy', icon: Target, label: 'Strategy' },
    { to: '/settings', icon: Settings, label: 'Settings' }
  ]

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      className="fixed bottom-0 inset-x-0 z-50 bg-surface/80 backdrop-blur-md border-t border-white/10 pb-[env(safe-area-inset-bottom)]"
    >
      <div className="flex h-16">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `
              flex-1 flex flex-col items-center justify-center gap-1 text-xs font-medium transition-colors
              ${isActive ? 'text-primary' : 'text-text-secondary'}
            `}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </motion.nav>
  )
}

export default BottomNav