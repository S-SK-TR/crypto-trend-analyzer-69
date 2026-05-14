import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, Activity } from 'lucide-react'

const Market = () => {
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

  const marketData = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$45,234', change: '+5.2%', icon: DollarSign },
    { name: 'Ethereum', symbol: 'ETH', price: '$2,543', change: '+3.8%', icon: TrendingUp },
    { name: 'Ripple', symbol: 'XRP', price: '$0.52', change: '+2.1%', icon: Activity },
  ]

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-bold text-text-primary mb-2">Market Overview</h1>
        <p className="text-text-secondary">Track real-time cryptocurrency market movements</p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        variants={containerVariants}
      >
        {marketData.map((market, index) => {
          const IconComponent = market.icon
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">{market.name}</h3>
                  <p className="text-sm text-text-secondary">{market.symbol}</p>
                </div>
                <IconComponent className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-text-primary">{market.price}</p>
                <p className="text-sm text-green-400">{market.change}</p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div variants={itemVariants} className="glass-card p-6">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Market Activity</h2>
        <p className="text-text-secondary">Detailed market analysis and charts coming soon...</p>
      </motion.div>
    </motion.div>
  )
}

export default Market
