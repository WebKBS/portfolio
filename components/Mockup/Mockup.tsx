import iphoneMockup from "@/public/mockup/iphone.png";
import macMockup from "@/public/mockup/mac.png";
import Image from "next/image";
import styles from "./Mockup.module.css";

const Mockup = ({
  title,
  image,
  macDuration,
}: {
  title: string;
  image: string;
  macDuration?: string;
}) => {
  return (
    <div className={styles.mockupContent}>
      <div className={styles.macBox}>
        <Image width={400} height={400} src={macMockup} alt="맥북 목업" />
        <div className={styles.macImageBox}>
          <Image
            width={400}
            height={400}
            src={image}
            alt={title}
            className={styles.macImage}
            style={{ animationDuration: macDuration }}
          />
        </div>
      </div>
      <div>
        <Image width={400} height={400} src={iphoneMockup} alt="아이폰 목업" />
      </div>
    </div>
  );
};

export default Mockup;
