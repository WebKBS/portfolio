"use client";

import { useQRCode } from "next-qrcode";

const QrCode = ({ url }: { url: string }) => {
  const { SVG } = useQRCode();

  return (
    <div className="hidden lg:block">
      <div className="inline-flex flex-col gap-3">
        <SVG
          text={url}
          options={{
            width: 52,
            margin: 1,
          }}
        />
        <p className="text-center text-xs">모바일</p>
      </div>
    </div>
  );
};

export default QrCode;
