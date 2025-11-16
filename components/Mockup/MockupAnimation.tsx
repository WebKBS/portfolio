'use client';

import topMockup from '@/public/images/mockup/iphone-top.png';
import iphoneMockup from '@/public/images/mockup/iphone.png';
import macMockup from '@/public/images/mockup/mac.png';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Loading from '../Loading/LoadingSpinner';
import styles from './MockupAnimation.module.css';
import { IWorks } from '@/types/worksType';

const MockupAnimation = ({
  title,
  desktopImage,
  mobileImage,
}: {
  title: string;
  desktopImage: IWorks['desktopImage'];
  mobileImage: IWorks['mobileImage'];
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
        { transform: 'translateY(0)' },
        { transform: `translateY(calc(-100% + ${macBoxClientHeight}px))` },
      ],
      {
        duration: (macBoxClientHeight / 100) * 10000,
        iterations: Infinity,
        direction: 'alternate',
      },
    );
  }

  if (iphoneBoxClientHeight && iphoneImageRef.current) {
    iphoneImageRef.current.animate(
      [
        { transform: 'translateY(0)' },
        {
          transform: `translateY(calc(-100% + ${iphoneBoxClientHeight}px))`,
        },
      ],
      {
        duration: (iphoneBoxClientHeight / 100) * 10000,
        iterations: Infinity,
        direction: 'alternate',
      },
    );
  }

  return (
    <div className={styles.mockupContent}>
      {desktopImage && (
        <div className={styles.macBox}>
          <Image src={macMockup} alt='맥북 목업' className={styles.macMockup} priority />
          <div className={styles.macImageBox} ref={macBoxRef}>
            <Loading />
            <Image
              ref={macImageRef}
              src={desktopImage}
              alt={title}
              className={styles.macImage}
              onLoad={macOnloadHandler}
              loading='lazy'
            />
          </div>
        </div>
      )}

      {mobileImage && (
        <div className={styles.iphoneBox}>
          <Image
            width={400}
            height={400}
            src={iphoneMockup}
            alt='아이폰 목업'
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
            <Loading />
            <Image
              ref={iphoneImageRef}
              width={400}
              height={400}
              src={mobileImage}
              alt={title}
              className={styles.iphoneImage}
              onLoad={iphoneOnloadHandler}
              loading='lazy'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MockupAnimation;
