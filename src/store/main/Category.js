import { create } from 'zustand'

// 메인 카테고리
export const useCategoryStore = create((set) => ({
  open: false,
  setOpen: (open) => set(() => ({ open: open })),
}))