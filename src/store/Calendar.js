import { create } from 'zustand'

// 관리자 달력
export const useAdminCalendarStore = create((set) => ({
  open: false,
  flag: 'start',
  startDate: "",
  endDate: "",
  setOpen: (open) => set(() => ({ open: open })),
  setFlag: (flag => set(() => ({ flag: flag }))),
  setStartDate: (startDate) => set(() => ({ startDate: startDate })),
  setEndDate: (endDate) => set(() => ({ endDate: endDate }))
}))