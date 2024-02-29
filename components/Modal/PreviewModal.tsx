"use client";

import { useModalToggle } from "@/store/modal-store";

const PreviewModal = ({ children }: { children: React.ReactNode }) => {
  const { isPreviewModalOpen, setIsPreviewModalOpen } = useModalToggle();

  function onDismiss(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (event.target !== event.currentTarget) return;
    setIsPreviewModalOpen(false);
  }

  console.log(isPreviewModalOpen);

  return (
    <>
      {isPreviewModalOpen ? (
        <aside
          className="fixed left-0 top-0 z-50 h-screen w-screen overflow-hidden backdrop-blur-xs"
          onClick={onDismiss}
        >
          {children}
        </aside>
      ) : null}
    </>
  );
};

export default PreviewModal;
