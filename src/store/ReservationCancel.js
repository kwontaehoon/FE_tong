import { create } from 'zustand'

// 예약 취소
export const useReservationCancelStore = create((set) => ({
  open: false,
  setOpen: (open) => set(() => ({ open: open })),
}))