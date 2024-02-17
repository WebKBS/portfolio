import { create } from "zustand";

interface ObserverState {
  mobile: boolean;
  setMob: (mobile: boolean) => void;
}

export const useObserver = create<ObserverState>((set) => ({
  mobile: false,
  setMob: (mobile: boolean) => set({ mobile: mobile }),
}));
