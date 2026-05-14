import { ReactNode } from 'react'
import { StoreProvider as ZustandProvider } from './index'

interface StoreProviderProps {
  children: ReactNode
}

const StoreProvider = ({ children }: StoreProviderProps) => {
  return <ZustandProvider value={null}>{children}</ZustandProvider>
}

export default StoreProvider