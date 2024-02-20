import { create } from 'zustand'

export const useCategoryStore = create((set) => ({
  open: false,
  setOpen: (open) => set(() => ({ open: open })),
}))