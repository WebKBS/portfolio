"use client";

import myImage from "@/public/images/me.jpg";
import { East_Sea_Dokdo } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import styles from "./TopTitle.module.css";

const font = East_Sea_Dokdo({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const TopTitle = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const loadHhandler = () => {
    console.log("Image isLoaded");
    setIsLoaded(true);
  };

  return (
    <div
      className={`sticky left-0 top-14 -z-10 mx-auto h-[400px] w-auto max-w-[1920px] opacity-0 sm:w-full md:h-[740px] ${isLoaded && styles.fadeIn}`}
    >
      <Image
        priority
        src={myImage}
        width={1920}
        height={1920}
        alt="강범수"
        className="h-full w-auto object-cover brightness-50 sm:w-full"
        onLoad={loadHhandler}
        sizes="100vw"
      />
      <div className="absolute left-0 top-0 mx-auto flex h-[400px] w-full max-w-screen-sm items-center px-6 md:left-1/2 md:h-[740px] md:max-w-screen-lg md:-translate-x-1/2">
        <div>
          <h2 className={`text-4xl text-gray-50 md:text-6xl ${font.className}`}>
            <p className={`md:mb-2 ${isLoaded && styles.titleIn}`}>
              아무것도 하지 않으면
            </p>
            <p className={`${isLoaded && styles.titleIn2}`}>
              아무것도 일어나지 않는다.
            </p>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TopTitle;
