import { create } from 'zustand'

// 패치노트
export const useFetchNoteStore = create((set) => ({
  open: false,
  setOpen: (open) => set(() => ({ open: open })),
}))