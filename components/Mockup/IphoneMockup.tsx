import topMockup from "@/public/mockup/iphone-top.png";
import iphoneMockup from "@/public/mockup/iphone.png";
import Image, { StaticImageData } from "next/image";
import Loading from "../Loading/LoadingSpinner";
import styles from "./IphoneMockup.module.css";

interface IphoneMockupProps {
  src: StaticImageData | string;
  title: string;
}

const IphoneMockup = ({ src, title }: IphoneMockupProps) => {
  return (
    <div className={styles.iphoneBox}>
      <Image
        width={400}
        height={400}
        src={iphoneMockup}
        alt="아이폰 목업"
        className={styles.iphoneMockup}
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
          />
        </div>
        <Loading />
        <Image
          width={400}
          height={400}
          src={src}
          alt={title}
          className={styles.iphoneImage}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default IphoneMockup;
