import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, PieChart } from 'lucide-react'

const Analysis = () => {
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

  const analysisMetrics = [
    { title: 'Market Volatility', value: '42%', icon: BarChart3, color: 'from-blue-500 to-cyan-500' },
    { title: 'Trend Strength', value: '7.8/10', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { title: 'Portfolio Value', value: '$125,430', icon: PieChart, color: 'from-purple-500 to-pink-500' },
  ]

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-bold text-text-primary mb-2">Market Analysis</h1>
        <p className="text-text-secondary">In-depth analysis of cryptocurrency trends and patterns</p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        variants={containerVariants}
      >
        {analysisMetrics.map((metric, index) => {
          const IconComponent = metric.icon
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`glass-card p-6 bg-gradient-to-br ${metric.color} opacity-20`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-text-secondary mb-2">{metric.title}</p>
                  <p className="text-3xl font-bold text-text-primary">{metric.value}</p>
                </div>
                <IconComponent className="w-8 h-8 text-primary" />
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div variants={itemVariants} className="glass-card p-6">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Technical Analysis</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-surface">
            <span className="text-text-secondary">RSI (14)</span>
            <span className="font-semibold text-text-primary">65.4</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-surface">
            <span className="text-text-secondary">MACD</span>
            <span className="font-semibold text-green-400">Bullish</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-surface">
            <span className="text-text-secondary">Moving Average (50)</span>
            <span className="font-semibold text-text-primary">$43,567</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Analysis
