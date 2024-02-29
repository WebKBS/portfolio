"use client";

import ModalCarousel from "@/components/Carousel/ModalCarousel";
import ModalInner from "@/components/Modal/ModalInner";
import PreviewModal from "@/components/Modal/PreviewModal";
import { Button } from "@/components/ui/button";
import { useModalToggle } from "@/store/modal-store";
import { MdClose } from "react-icons/md";

export interface IPreview {
  mobileImage: string;
  image: string;
}

const Preview = ({ previewImageData }: { previewImageData: IPreview[] }) => {
  const setIsPreviewModalOpen = useModalToggle(
    (state) => state.setIsPreviewModalOpen,
  );

  return (
    <PreviewModal>
      <ModalInner>
        <div className="mb-6 p-5 sm:p-6">
          <div className="mb-2 flex items-center justify-between gap-2">
            <h2 className="text-lg font-bold">미리보기</h2>
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
