"use client";

import { useTitle } from "@/store/banner-store";

const PageTitle = ({ title }: { title: string }) => {
  const { isTitle } = useTitle();

  return (
    <>
      {isTitle && (
        <h2 className="sticky left-0 top-14 z-[1] mb-4 py-2 text-4xl font-bold backdrop-blur-md">
          {title}
        </h2>
      )}
    </>
  );
};

export default PageTitle;
