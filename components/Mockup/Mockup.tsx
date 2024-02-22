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
  const macRef = useRef<HTMLDivElement | null>(null);
  const iphoneRef = useRef<HTMLDivElement | null>(null);
  const macImageRef = useRef<HTMLImageElement | null>(null);
  const iphoneImageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const animateImage = (
      ref: React.MutableRefObject<HTMLImageElement | null>,
      boxHeight: number,
    ) => {
      const imageHeight = ref.current?.clientHeight;
      const duration =
        imageHeight && boxHeight
          ? Math.abs((imageHeight - boxHeight) / 100) + 1
          : 1;

      // console.log(imageHeight, duration);
      // console.log(boxHeight);

      ref.current?.animate(
        [
          { transform: "translateY(0)" },
          { transform: `translateY(calc(-100% + ${boxHeight}px))` },
        ],
        {
          duration: duration * 3000,
          iterations: Infinity,
          direction: "alternate",
        },
      );
    };
    const macBoxHeight = macRef.current?.clientHeight;
    const iphoneBoxHeight = iphoneRef.current?.clientHeight;

    if (macBoxHeight && iphoneBoxHeight) {
      animateImage(macImageRef, macBoxHeight);
      animateImage(iphoneImageRef, iphoneBoxHeight);
    }
  }, []);

  return (
    <div className={styles.mockupContent}>
      <div className={styles.macBox} ref={macRef}>
        <Image
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
          />
        </div>
      </div>
      <div className={styles.iphoneBox} ref={iphoneRef}>
        <Image width={400} height={400} src={iphoneMockup} alt="아이폰 목업" />
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
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Mockup;
