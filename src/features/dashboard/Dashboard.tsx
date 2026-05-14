import { motion } from 'framer-motion'
import BentoGrid from '../../components/ui/BentoGrid'
import GlassCard from '../../components/ui/GlassCard'
import PriceChart from '../../components/charts/PriceChart'
import { useStore } from '../../core/store'
import { format } from 'date-fns'

const Dashboard = () => {
  const { marketData } = useStore()

  // Demo data if no market data available
  const demoData = {
    price: [30000, 30500, 31000, 30800, 31200, 31500, 32000],
    labels: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6', 'Jan 7']
  }

  const displayData = marketData.length > 0 ? marketData : demoData

  return (
    <div className="space-y-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl font-bold text-text-primary font-display"
      >
        Market Overview
      </motion.h1>

      <BentoGrid>
        <GlassCard className="md:col-span-2">
          <div className="h-80">
            <PriceChart data={displayData.price} labels={displayData.labels} />
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="text-lg font-semibold text-text-primary mb-4">Top Performers</h3>
          <ul className="space-y-3">
            {['Bitcoin', 'Ethereum', 'Solana', 'Cardano'].map((coin, index) => (
              <li key={index} className="flex justify-between items-center">
                <span className="text-text-secondary">{coin}</span>
                <span className="text-green-400 font-medium">+{Math.floor(Math.random() * 10)}%</span>
              </li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard>
          <h3 className="text-lg font-semibold text-text-primary mb-4">Recent Alerts</h3>
          <ul className="space-y-3">
            {['BTC price reached $32,000', 'ETH volume spike detected', 'New strategy available'].map((alert, index) => (
              <li key={index} className="text-sm text-text-secondary">
                {alert}
              </li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard>
          <h3 className="text-lg font-semibold text-text-primary mb-4">Market Cap</h3>
          <div className="text-3xl font-bold text-text-primary">$1.2T</div>
          <div className="text-sm text-green-400 font-medium mt-1">+2.3% (24h)</div>
        </GlassCard>
      </BentoGrid>
    </div>
  )
}

export default Dashboard