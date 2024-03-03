"use client";
import { useTitle } from "@/store/banner-store";
import { throttle } from "lodash";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./WorksBanner.module.css";

const WorksBanner = ({
  image,
  title,
  height = "h-full",
}: {
  image: string;
  title: string;
  height?: string;
}) => {
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const setTitle = useTitle((state) => state.setIsTitle);
  const isTitle = useTitle((state) => state.isTitle);

  useEffect(() => {
    setTitle(false);
  }, [setTitle]);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (bannerRef.current) {
        if (window.scrollY > bannerRef.current.clientHeight / 6) {
          if (isTitle) return;
          bannerRef.current.classList.add("opacity-0");
          setTitle(true);
        } else {
          if (!isTitle) return;
          bannerRef.current.classList.remove("opacity-0");
          setTitle(false);
        }
      }
    }, 120);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setTitle, isTitle]);

  return (
    <div
      ref={bannerRef}
      className="sticky left-0 top-14 z-[-1] h-[400px] w-screen overflow-hidden transition-opacity duration-300"
    >
      <Image
        priority
        src={image}
        alt="Works Banner"
        width={1920}
        height={1920}
        sizes="100vw"
        className={`absolute left-1/2 top-0 -translate-x-1/2 object-cover ${height}`}
      />
      <div
        className={`absolute left-0 top-0 z-0 h-full w-full ${styles.linearGradient}`}
      ></div>
      <div className="mx-auto h-full max-w-screen-lg px-5 py-6 lg:max-w-screen-2xl lg:px-6">
        <div className="flex h-full w-full items-end">
          <h2 className="flex w-full flex-wrap items-center justify-between gap-2 text-xl font-bold text-white drop-shadow-lg sm:text-2xl">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WorksBanner;
