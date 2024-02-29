import macMockup from "@/public/mockup/mac.png";
import Image, { StaticImageData } from "next/image";
import Loading from "../Loading/LoadingSpinner";
import styles from "./MacMockup.module.css";

interface MacMockupProps {
  src: StaticImageData | string;
  title: string;
}

const MacMockup = ({ src, title }: MacMockupProps) => {
  return (
    <div className={styles.macBox}>
      <Image
        width={400}
        height={400}
        src={macMockup}
        alt="맥북 목업"
        className={styles.macMockup}
        priority
      />
      <div className={styles.macImageBox}>
        <Loading />
        <Image
          width={400}
          height={400}
          src={src}
          alt={title}
          className={styles.macImage}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default MacMockup;
