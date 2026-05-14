import { motion } from 'framer-motion'

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      className="h-full"
    >
      <div className="glass-card p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
        <p className="text-text-secondary">Welcome to your dashboard. Here you can view your analytics and manage your account.</p>
      </div>
    </motion.div>
  )
}

export default Dashboard