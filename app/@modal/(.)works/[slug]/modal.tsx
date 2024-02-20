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
          className="backdrop-blur-xs fixed left-0 top-0 z-50 h-screen w-screen"
          onClick={onDismiss}
        >
          {children}
        </aside>
      ) : null}
    </>
  );
}

// 모달을 따로 커스텀으로 만들고 난후 zutand store에 상태를 저장하고 페이지 바로보기 클릭시 해당 모달을 삭제하는 방식으로 교체해야함
