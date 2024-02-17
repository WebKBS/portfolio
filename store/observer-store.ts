import { create } from "zustand";

interface ObserverState {
  skills: boolean;
  setSkills: (skills: boolean) => void;
}

export const useObserver = create<ObserverState>((set) => ({
  skills: false,
  setSkills: (skills: boolean) => set({ skills: skills }),
}));
