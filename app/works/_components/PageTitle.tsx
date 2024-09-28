"use client";

import { useTitle } from "@/store/banner-store";

const PageTitle = ({
  title,
}: {
  title: string;
  isPreview?: boolean;
}) => {
  const { isTitle } = useTitle();

  const opacity = isTitle ? "opacity-100" : "opacity-0";

  return (
    <>
      <h2
        className={`sticky left-0 top-14 z-[1] flex flex-wrap items-center justify-between gap-2 px-5 py-3 text-xl font-bold backdrop-blur-md transition-opacity sm:text-2xl lg:px-0 ${opacity}`}
      >
        {title}
      </h2>
    </>
  );
};

export default PageTitle;
