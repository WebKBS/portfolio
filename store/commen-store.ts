import { create } from "zustand";

interface IMenuToggle {
  menuOpen: boolean;
  setToggleMenu: () => void;
}

export const useMenuToggle = create<IMenuToggle>((set) => ({
  menuOpen: false,
  setToggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
}));
