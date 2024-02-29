"use client";

import { useTitle } from "@/store/banner-store";

const PageTitle = ({ title }: { title: string }) => {
  const { isTitle } = useTitle();

  const opacity = isTitle ? "opacity-100" : "opacity-0";

  return (
    <>
      <h2
        className={`sticky left-0 top-14 z-[1] py-3 text-3xl font-bold backdrop-blur-md transition-opacity ${opacity}`}
      >
        {title}
      </h2>
    </>
  );
};

export default PageTitle;
