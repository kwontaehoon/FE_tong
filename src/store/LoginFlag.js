import { create } from 'zustand'

// 로그인 유무
export const useLoginStore = create((set) => ({
  open: false,
  setOpen: (open) => set(() => ({ open: open })),
}))