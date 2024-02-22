"use client";

import topMockup from "@/public/mockup/iphone-top.png";
import iphoneMockup from "@/public/mockup/iphone.png";
import macMockup from "@/public/mockup/mac.png";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./Mockup.module.css";

const Mockup = ({
  title,
  image,
  mobileImage,
}: {
  title: string;
  image: string;
  mobileImage: string;
}) => {
  const macRef = useRef<HTMLImageElement | null>(null);
  const iphoneRef = useRef<HTMLImageElement | null>(null);
  const macImageRef = useRef<HTMLImageElement | null>(null);
  const iphoneImageRef = useRef<HTMLImageElement | null>(null);

  console.log("1");
  const macBoxHeight = macRef.current?.clientHeight;
  const iphoneBoxHeight = iphoneRef.current?.clientHeight;

  useEffect(() => {
    console.log("2");

    macImageRef.current?.animate(
      [
        { transform: "translateY(0)" },
        { transform: `translateY(calc(-100% + ${macBoxHeight}px))` },
      ],
      {
        duration: (macBoxHeight! / 100) * 10000,
        iterations: Infinity,
        direction: "alternate",
      },
    );

    iphoneImageRef.current?.animate(
      [
        { transform: "translateY(0)" },
        { transform: `translateY(calc(-100% + ${iphoneBoxHeight}px))` },
      ],
      {
        duration: (iphoneBoxHeight! / 100) * 10000,
        iterations: Infinity,
        direction: "alternate",
      },
    );
  }, [macBoxHeight, iphoneBoxHeight]);

  return (
    <div className={styles.mockupContent}>
      <div className={styles.macBox}>
        <Image
          width={400}
          height={400}
          src={macMockup}
          alt="맥북 목업"
          priority
        />
        <div className={styles.macImageBox} ref={macRef}>
          <Image
            ref={macImageRef}
            width={400}
            height={400}
            src={image}
            alt={title}
            priority
            className={styles.macImage}
          />
        </div>
      </div>
      <div className={styles.iphoneBox}>
        <Image
          width={400}
          height={400}
          src={iphoneMockup}
          alt="아이폰 목업"
          priority
        />
        <div className={styles.iphoneImageBox} ref={iphoneRef}>
          <div className={styles.topBox}>
            <Image
              width={240}
              height={240}
              src={topMockup}
              alt={title}
              className={styles.topImage}
              priority
            />
          </div>
          <Image
            ref={iphoneImageRef}
            width={400}
            height={400}
            src={mobileImage}
            alt={title}
            className={styles.iphoneImage}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Mockup;
