import { create } from 'zustand'

// 관리자 회원 정보 수정
export const useAdminUserModifyStore = create((set) => ({
  open: false,
  info: [],
  setOpen: (open) => set(() => ({ open: open })),
  setInfo: (info) => set(() => ({ info: info }))
}))

// 관리자 게시판 수정
export const useAdminBoardModifyStore = create((set) => ({
  open: false,
  info: [],
  setOpen: (open) => set(() => ({ open: open })),
  setInfo: (info) => set(() => ({ info: info }))
}))