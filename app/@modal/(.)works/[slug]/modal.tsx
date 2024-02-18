"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, type ElementRef } from "react";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <aside className="fixed left-0 top-0 h-screen w-screen">
      <dialog
        ref={dialogRef}
        className="h-screen w-screen bg-transparent"
        onClose={onDismiss}
      >
        {children}
      </dialog>
    </aside>,
    document.getElementById("modal-root")!,
  );
}

// 모달을 따로 커스텀으로 만들고 난후 zutand store에 상태를 저장하고 페이지 바로보기 클릭시 해당 모달을 삭제하는 방식으로 교체해야함
