"use client";

import topMockup from "@/public/mockup/iphone-top.png";
import iphoneMockup from "@/public/mockup/iphone.png";
import macMockup from "@/public/mockup/mac.png";
import Image from "next/image";
import { useRef, useState } from "react";
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
  const macBoxRef = useRef<HTMLDivElement | null>(null);
  const iphoneBoxRef = useRef<HTMLDivElement | null>(null);
  const macImageRef = useRef<HTMLImageElement | null>(null);
  const iphoneImageRef = useRef<HTMLImageElement | null>(null);

  const [macBoxClientHeight, setMacBoxClientHeight] = useState<number>(0);
  const [iphoneBoxClientHeight, setIphoneBoxClientHeight] = useState<number>(0);

  const macOnloadHandler = () => {
    if (macBoxRef.current) {
      setMacBoxClientHeight(macBoxRef.current.clientHeight);
    }
  };

  const iphoneOnloadHandler = () => {
    if (iphoneBoxRef.current) {
      setIphoneBoxClientHeight(iphoneBoxRef.current.clientHeight);
    }
  };

  if (macBoxClientHeight && macImageRef.current) {
    macImageRef.current.animate(
      [
        { transform: "translateY(0)" },
        { transform: `translateY(calc(-100% + ${macBoxClientHeight}px))` },
      ],
      {
        duration: (macBoxClientHeight / 100) * 10000,
        iterations: Infinity,
        direction: "alternate",
      },
    );
  }

  if (iphoneBoxClientHeight && iphoneImageRef.current) {
    iphoneImageRef.current.animate(
      [
        { transform: "translateY(0)" },
        {
          transform: `translateY(calc(-100% + ${iphoneBoxClientHeight}px))`,
        },
      ],
      {
        duration: (iphoneBoxClientHeight / 100) * 10000,
        iterations: Infinity,
        direction: "alternate",
      },
    );
  }

  return (
    <div className={styles.mockupContent}>
      <div className={styles.macBox}>
        <Image
          width={400}
          height={400}
          src={macMockup}
          alt="맥북 목업"
          className={styles.macMockup}
          priority
        />
        <div className={styles.macImageBox} ref={macBoxRef}>
          <Image
            ref={macImageRef}
            width={400}
            height={400}
            src={image}
            alt={title}
            className={styles.macImage}
            onLoad={macOnloadHandler}
            loading="lazy"
          />
        </div>
      </div>
      <div className={styles.iphoneBox}>
        <Image
          width={400}
          height={400}
          src={iphoneMockup}
          alt="아이폰 목업"
          className={styles.iphoneMockup}
          priority
        />
        <div className={styles.iphoneImageBox} ref={iphoneBoxRef}>
          <div className={styles.topBox}>
            <Image
              width={240}
              height={240}
              src={topMockup}
              alt={title}
              className={styles.topImage}
            />
          </div>
          <Image
            ref={iphoneImageRef}
            width={400}
            height={400}
            src={mobileImage}
            alt={title}
            className={styles.iphoneImage}
            onLoad={iphoneOnloadHandler}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Mockup;
