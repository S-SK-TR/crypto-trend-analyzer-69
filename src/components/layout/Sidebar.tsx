import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, BarChart2, TrendingUp, Target, Settings } from 'lucide-react'

const Sidebar = () => {
  const navItems = [
    { to: '/dashboard', icon: Home, label: 'Dashboard' },
    { to: '/market', icon: BarChart2, label: 'Market' },
    { to: '/analysis', icon: TrendingUp, label: 'Analysis' },
    { to: '/strategy', icon: Target, label: 'Strategy' },
    { to: '/settings', icon: Settings, label: 'Settings' }
  ]

  return (
    <aside className="w-64 bg-surface/80 backdrop-blur-md border-r border-white/10 flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary font-display">CryptoTrend</h1>
      </div>
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => `
                  flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                  ${isActive ? 'bg-primary/20 text-primary' : 'text-text-secondary hover:bg-white/10'}
                `}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar