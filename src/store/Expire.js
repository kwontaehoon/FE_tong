import { create } from 'zustand'

// 회원 탈퇴
export const useExpireStore = create((set) => ({
  open: false,
  setOpen: (open) => set(() => ({ open: open })),
}))

// 회원 탈퇴 -> 로그인
export const useExpireLoginStore = create((set) => ({
  open: false,
  setOpen: (open) => set(() => ({ open: open })),
}))