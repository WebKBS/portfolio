import { create } from "zustand";

interface BannerStore {
  isTitle: boolean;
  setIsTitle: (title: boolean) => void;
}

export const useTitle = create<BannerStore>((set) => ({
  isTitle: false,
  setIsTitle: (title) => set({ isTitle: title }),
}));
