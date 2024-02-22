import { create } from "zustand";

interface IMenuToggle {
  menuOpen: boolean;
  setToggleMenu: (menuOpen: boolean) => void;
}

export const useMenuToggle = create<IMenuToggle>((set) => ({
  menuOpen: false,
  setToggleMenu: (menuOpen) => {
    // 메뉴가 열릴 때는 body를 숨깁니다.
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      // 메뉴가 닫힐 때는 body를 다시 보이도록 합니다.
      document.body.style.overflow = "auto";
    }

    set({ menuOpen });
  },
}));
