'use client'
import React from 'react';
import {Button} from "@/components/ui/button";
import {useModalToggle} from "@/store/modal-store";

const GalleryButton = () => {
  const setIsPreviewModalOpen = useModalToggle(
    (state) => state.setIsPreviewModalOpen,
  );

  return (
    <Button
      size="sm"
      variant={"secondary"}
      onClick={() => setIsPreviewModalOpen(true)}
    >
      Gallery
    </Button>
  );
};

export default GalleryButton;