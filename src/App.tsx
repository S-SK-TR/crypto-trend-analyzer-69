import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import AppShell from './components/layout/AppShell'
import Dashboard from './features/dashboard/Dashboard'
import Market from './features/market/Market'
import Analysis from './features/analysis/Analysis'
import Strategy from './features/strategy/Strategy'
import Settings from './features/settings/Settings'

function App() {
  const location = useLocation()

  return (
    <AppShell>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/market" element={<Market />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </AnimatePresence>
    </AppShell>
  )
}

export default App