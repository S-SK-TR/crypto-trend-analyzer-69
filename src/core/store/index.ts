import { create } from 'zustand'
import { createContext, useContext } from 'react'

interface MarketData {
  price: number[]
  labels: string[]
}

interface StoreState {
  marketData: MarketData
  isLoading: boolean
  error: string | null
}

interface StoreActions {
  setMarketData: (data: MarketData) => void
  setLoading: (isLoading: boolean) => void
  setError: (error: string | null) => void
  resetStore: () => void
}

type Store = StoreState & StoreActions

const initialState: StoreState = {
  marketData: {
    price: [],
    labels: []
  },
  isLoading: false,
  error: null
}

const StoreContext = createContext<Store | null>(null)

const useZustandStore = create<Store>((set) => ({
  ...initialState,
  setMarketData: (data) => set({ marketData: data }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  resetStore: () => set(initialState)
}))

export const useStore = () => {
  const api = useContext(StoreContext)
  if (!api) {
    throw new Error('useStore must be used within a StoreProvider')
  }
  return useZustandStore(api)
}

export const StoreProvider = StoreContext.Provider