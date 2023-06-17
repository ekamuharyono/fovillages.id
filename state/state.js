import { create } from "zustand"

export const useZustandState = create((set, get) => {
  return {
    isShowPopup: false,
    setShowPopup: () => set((state) => ({
      isShowPopup: !state.isShowPopup
    }))
  }
})