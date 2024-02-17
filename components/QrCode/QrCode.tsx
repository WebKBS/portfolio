"use client";

import { useQRCode } from "next-qrcode";

const QrCode = ({ url }: { url: string }) => {
  const { SVG } = useQRCode();

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
        <p className="text-xs">모바일 바로보기</p>
      </div>
    </div>
  );
};

export default QrCode;
