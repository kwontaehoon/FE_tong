import { create } from 'zustand'

// 이용약관 동의
export const useTermStore = create((set) => ({
    open: false,
    setOpen: (open) => set(() => ({ open: open })),
}));

// 개인정보처리방침
export const usePrivacyStore = create((set) => ({
    open: false,
    setOpen: (open) => set(() => ({ open: open })),
}));