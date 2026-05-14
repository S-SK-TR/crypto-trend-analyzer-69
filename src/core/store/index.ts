import { create } from 'zustand'

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

// Zustand store - bağlamsız, doğrudan çalışacak
export const useStore = create<Store>((set) => ({
  ...initialState,
  setMarketData: (data) => set({ marketData: data }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  resetStore: () => set(initialState)
}))
