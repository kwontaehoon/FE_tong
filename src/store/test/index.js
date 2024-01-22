import { create } from 'zustand'

export const useBearStore = create((set) => ({
  bears: 213,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))