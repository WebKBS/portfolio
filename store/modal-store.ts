import { create } from "zustand";

interface IRouterModalToggle {
  modalOpen: boolean;
  setRouterModalState: (modalOpen: boolean) => void;
}

interface IModalToggle {
  isPreviewModalOpen: boolean;
  setIsPreviewModalOpen: (isPreviewModalOpen: boolean) => void;
}

export const useRouterModalToggle = create<IRouterModalToggle>((set) => ({
  modalOpen: true,

  setRouterModalState: (modalOpen) => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    set({ modalOpen });
  },
}));

export const useModalToggle = create<IModalToggle>((set) => ({
  isPreviewModalOpen: false,

  setIsPreviewModalOpen: (isPreviewModalOpen) => {
    if (isPreviewModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    set({ isPreviewModalOpen });
  },
}));
