"use client";

import useObserverAction from "@/hooks/observer";
import { useObserver } from "@/store/observer-store";
import { useQRCode } from "next-qrcode";

const QrCode = ({ url }: { url: string }) => {
  const { SVG } = useQRCode();

  const abcRef = useObserverAction("mobile");

  return (
    <div className="hidden lg:block">
      <div className="flex items-end gap-3">
        <SVG
          text={url}
          options={{
            width: 52,
            margin: 1,
          }}
        />
        <p className="text-sm">모바일에서 보기</p>
        <div
          ref={abcRef}
          className={`${useObserver((state) => (state.mobile ? "translate-x-40 text-red-800 transition-all duration-1000" : ""))}`}
        >
          테스트
        </div>
      </div>
    </div>
  );
};

export default QrCode;
