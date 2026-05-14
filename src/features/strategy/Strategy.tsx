import { motion } from 'framer-motion'
import { Target, Zap, Shield } from 'lucide-react'

const Strategy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const strategies = [
    {
      title: 'Long-term Growth',
      icon: Target,
      description: 'Hold quality cryptocurrencies for long-term appreciation',
      allocation: '60%',
    },
    {
      title: 'Active Trading',
      icon: Zap,
      description: 'Day trading and swing trading for short-term gains',
      allocation: '25%',
    },
    {
      title: 'Risk Management',
      icon: Shield,
      description: 'Diversification and stop-loss orders to protect capital',
      allocation: '15%',
    },
  ]

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-bold text-text-primary mb-2">Trading Strategies</h1>
        <p className="text-text-secondary">Create and manage your investment strategies</p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        variants={containerVariants}
      >
        {strategies.map((strategy, index) => {
          const IconComponent = strategy.icon
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <IconComponent className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-text-primary">{strategy.title}</h3>
              </div>
              <p className="text-sm text-text-secondary mb-4">{strategy.description}</p>
              <div className="flex items-baseline justify-between p-3 rounded-lg bg-surface">
                <span className="text-text-secondary">Allocation</span>
                <span className="text-2xl font-bold text-primary">{strategy.allocation}</span>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div variants={itemVariants} className="glass-card p-6">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Active Strategies</h2>
        <p className="text-text-secondary mb-4">No active strategies yet. Create one to get started.</p>
        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors">
          Create New Strategy
        </button>
      </motion.div>
    </motion.div>
  )
}

export default Strategy
