import { create } from 'zustand'

// 대댓글 모달
export const useRecommentsStore = create((set) => ({
  open: false,
  comments: [],
  setOpen: (open) => set(() => ({ open: open })),
  setComments: (id) => set(() => ({ id: id })),
}))