import { create } from 'zustand'

// 대댓글 모달
export const useRecommentsStore = create((set) => ({
  open: false,
  commentId: null,
  setOpen: (open) => set(() => ({ open: open })),
  setCommentId: (commentId) => set(() => ({ commentId: commentId })),
}))