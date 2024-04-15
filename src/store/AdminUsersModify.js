import { create } from 'zustand'

// 메인 카테고리
export const useAdminUserModifyStore = create((set) => ({
  open: false,
  info: [],
  setOpen: (open) => set(() => ({ open: open })),
  setInfo: (info) => set(() => ({ info: info }))
}))