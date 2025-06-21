"use client";

import ModalCarousel from "@/components/Carousel/ModalCarousel";
import ModalInner from "@/components/Modal/ModalInner";
import PreviewModal from "@/components/Modal/PreviewModal";
import { Button } from "@/components/ui/button";
import { useModalToggle } from "@/store/modal-store";
import { MdClose } from "react-icons/md";
import { PreviewImageType } from "@/types/worksType";

const Preview = ({
  previewImageData,
}: {
  previewImageData: PreviewImageType[];
}) => {
  const setIsPreviewModalOpen = useModalToggle(
    (state) => state.setIsPreviewModalOpen,
  );

  return (
    <PreviewModal>
      <ModalInner>
        <div className="p-5 sm:p-6">
          <div className="mb-2 flex justify-between gap-2">
            <div>
              <h2 className="text-lg font-bold">미리보기</h2>
              <p className="text-xs">해상도에 따라 다른 디바이스입니다.</p>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsPreviewModalOpen(false)}
            >
              <MdClose />
            </Button>
          </div>
          <ModalCarousel previewImageData={previewImageData} />
        </div>
      </ModalInner>
    </PreviewModal>
  );
};

export default Preview;
