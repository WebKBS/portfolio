"use client";

import { Button } from "@/components/ui/button";
import { useTitle } from "@/store/banner-store";
import { useModalToggle } from "@/store/modal-store";

const PageTitle = ({
  title,
  isPreview,
}: {
  title: string;
  isPreview?: boolean;
}) => {
  const { isTitle } = useTitle();
  const setIsPreviewModalOpen = useModalToggle(
    (state) => state.setIsPreviewModalOpen,
  );

  const opacity = isTitle ? "opacity-100" : "opacity-0";

  return (
    <>
      <h2
        className={`sticky left-0 top-14 z-[1] flex flex-wrap items-center justify-between gap-2 px-5 py-3 text-xl font-bold backdrop-blur-md transition-opacity sm:text-2xl xl:px-6 ${opacity}`}
      >
        {title}
        {isPreview && (
          <Button
            size="sm"
            variant={"secondary"}
            onClick={() => setIsPreviewModalOpen(true)}
          >
            미리보기
          </Button>
        )}
      </h2>
    </>
  );
};

export default PageTitle;
