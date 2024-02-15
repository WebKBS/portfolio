import { create } from 'zustand';

interface IMenuToggle {
  menuOpen: boolean;
  toggleMenu: () => void;
}

export const useMenuToggle = create<IMenuToggle>((set) => ({
  menuOpen: false,
  toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
}));
