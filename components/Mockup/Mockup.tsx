"use client";

import topMockup from "@/public/mockup/iphone-top.png";
import iphoneMockup from "@/public/mockup/iphone.png";
import macMockup from "@/public/mockup/mac.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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

  const [macClientHeight, setMacClientHeight] = useState<number>(0);
  const [iphoneClientHeight, setIphoneClientHeight] = useState<number>(0);

  // 이미지의 clientHeight를 먼저 가져와서 적용
  useEffect(() => {
    if (macRef.current) {
      setMacClientHeight(macRef.current.clientHeight);
    }
    if (iphoneRef.current) {
      setIphoneClientHeight(iphoneRef.current.clientHeight);
    }
  }, []);

  useEffect(() => {
    if (macClientHeight && macImageRef.current) {
      macImageRef.current.animate(
        [
          { transform: "translateY(0)" },
          { transform: `translateY(calc(-100% + ${macClientHeight}px))` },
        ],
        {
          duration: (macClientHeight / 100) * 10000,
          iterations: Infinity,
          direction: "alternate",
        },
      );
    }
    if (iphoneClientHeight && iphoneImageRef.current) {
      iphoneImageRef.current.animate(
        [
          { transform: "translateY(0)" },
          {
            transform: `translateY(calc(-100% + ${iphoneClientHeight}px))`,
          },
        ],
        {
          duration: (iphoneClientHeight / 100) * 10000,
          iterations: Infinity,
          direction: "alternate",
        },
      );
    }
  }, [macClientHeight, iphoneClientHeight]);

  return (
    <div className={styles.mockupContent}>
      <div className={styles.macBox}>
        <Image
          ref={macRef}
          width={400}
          height={400}
          src={macMockup}
          alt="맥북 목업"
          priority
        />
        <div className={styles.macImageBox}>
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
          ref={iphoneRef}
          width={400}
          height={400}
          src={iphoneMockup}
          alt="아이폰 목업"
          priority
        />
        <div className={styles.iphoneImageBox}>
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
