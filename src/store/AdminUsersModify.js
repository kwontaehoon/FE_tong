import { create } from 'zustand'

// 메인 카테고리
export const useAdminUserModifyStore = create((set) => ({
  open: false,
  setOpen: (open) => set(() => ({ open: open })),
}))