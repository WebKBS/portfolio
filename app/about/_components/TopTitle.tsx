import myImage from "@/public/images/me.jpg";
import { East_Sea_Dokdo } from "next/font/google";
import Image from "next/image";
import styles from "./TopTitle.module.css";

const font = East_Sea_Dokdo({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const TopTitle = () => {
  return (
    <div
      className={`sticky left-0 top-14 -z-10 mx-auto h-[400px] w-auto max-w-[1920px] opacity-0 sm:w-full md:h-[740px] ${styles.fadeIn}`}
    >
      <Image
        priority
        src={myImage}
        width={1920}
        height={1920}
        alt="강범수"
        className="h-full w-auto object-cover sm:w-full"
        sizes="100vw"
        placeholder="blur"
      />
      <div className={styles.coverShadow}></div>
      <div className="absolute left-0 top-0 mx-auto flex h-[400px] w-full max-w-screen-sm items-center px-6 md:left-1/2 md:h-[740px] md:max-w-screen-lg md:-translate-x-1/2">
        <div>
          <h2 className={`text-4xl text-gray-50 md:text-6xl ${font.className}`}>
            <span className={`block md:mb-2 ${styles.titleIn}`}>
              아무것도 하지 않으면
            </span>
            <span className={`block ${styles.titleIn2}`}>
              아무것도 일어나지 않는다.
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TopTitle;
