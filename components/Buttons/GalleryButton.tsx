"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useModalToggle } from "@/store/modal-store";

const GalleryButton = () => {
  const setIsPreviewModalOpen = useModalToggle(
    (state) => state.setIsPreviewModalOpen,
  );

  return (
    <Button
      size="sm"
      className="bg-emerald-500 dark:bg-emerald-400"
      onClick={() => setIsPreviewModalOpen(true)}
    >
      Gallery
    </Button>
  );
};

export default GalleryButton;
