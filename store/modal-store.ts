import { create } from "zustand";

interface IRouterModalToggle {
  modalOpen: boolean;
  setRouterModalState: (modalOpen: boolean) => void;
}

export const useRouterModalToggle = create<IRouterModalToggle>((set) => ({
  modalOpen: true,
  setRouterModalState: (modalOpen) => set({ modalOpen }),
}));
