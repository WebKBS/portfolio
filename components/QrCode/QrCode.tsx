'use client';

import { useQRCode } from 'next-qrcode';

const QrCode = ({ url }: { url: string }) => {
  const { SVG } = useQRCode();

  return (
    <div className="hidden lg:block">
      <div className="flex gap-3 items-end">
        <SVG
          text={url}
          options={{
            width: 52,
            margin: 1,
          }}
        />
        <p className="text-sm">모바일에서 보기</p>
      </div>
    </div>
  );
};

export default QrCode;
