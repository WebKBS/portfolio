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
  const macRef = useRef<HTMLDivElement | null>(null);
  const iphoneRef = useRef<HTMLDivElement | null>(null);
  const macImageRef = useRef<HTMLImageElement | null>(null);
  const iphoneImageRef = useRef<HTMLImageElement | null>(null);

  const [macClientHeight, setMacClientHeight] = useState<number>(0);
  const [iphoneClientHeight, setIphoneClientHeight] = useState<number>(0);
  const [macImageLoaded, setMacImageLoaded] = useState<boolean>(false);
  const [iphoneImageLoaded, setIphoneImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (macClientHeight && macImageRef.current && macImageLoaded) {
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

    if (iphoneClientHeight && iphoneImageRef.current && iphoneImageLoaded) {
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
  }, [macClientHeight, iphoneClientHeight, macImageLoaded, iphoneImageLoaded]);

  const handleMacImageLoad = () => {
    if (macRef.current) {
      setMacClientHeight(macRef.current.clientHeight);
    }
    setMacImageLoaded(true);
  };

  const handleIphoneImageLoad = () => {
    if (iphoneRef.current) {
      setIphoneClientHeight(iphoneRef.current.clientHeight);
    }
    setIphoneImageLoaded(true);
  };

  return (
    <div className={styles.mockupContent}>
      <div className={styles.macBox} ref={macRef}>
        <Image
          width={400}
          height={400}
          src={macMockup}
          alt="맥북 목업"
          priority
          onLoad={handleMacImageLoad}
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
      <div className={styles.iphoneBox} ref={iphoneRef}>
        <Image
          width={400}
          height={400}
          src={iphoneMockup}
          alt="아이폰 목업"
          priority
          onLoad={handleIphoneImageLoad}
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
