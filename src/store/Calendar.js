import { create } from 'zustand'

// 관리자 달력
export const useAdminCalendarStore = create((set) => ({
  open: false,
  setOpen: (open) => set(() => ({ open: open })),
}))