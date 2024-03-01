"use client";

import { useRouterModalToggle } from "@/store/modal-store";
import { useRouter } from "next/navigation";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { modalOpen, setRouterModalState } = useRouterModalToggle();

  function onDismiss(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (event.target !== event.currentTarget) return;
    setRouterModalState(false);
    router.back();
  }

  return (
    <>
      {modalOpen ? (
        <aside
          className="fixed left-0 top-0 z-50 h-full w-full overflow-hidden backdrop-blur-xs"
          onClick={onDismiss}
        >
          {children}
        </aside>
      ) : null}
    </>
  );
}
