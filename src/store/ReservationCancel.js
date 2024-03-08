import { create } from 'zustand'

// 예약 취소
export const useReservationCancelStore = create((set) => ({
  open: false,
  func: ()=>{},
  setOpen: (open) => set(() => ({ open: open })),
  setFunc: (func) => set(() => ({ func: func }))
}))