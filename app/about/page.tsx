import myImage from "@/public/images/me.jpg";
import { East_Sea_Dokdo } from "next/font/google";
import Image from "next/image";
import styles from "./page.module.css";

const font = East_Sea_Dokdo({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "About",
};

const AboutPage = () => {
  return (
    <main>
      <div
        className={`absolute left-0 top-14 -z-10 mx-auto h-[400px] w-auto max-w-[1920px] brightness-50 sm:w-full md:h-[600px] ${styles.fadeIn}`}
      >
        <Image
          src={myImage}
          width={1920}
          height={1920}
          alt="강범수"
          className="h-full w-auto object-cover sm:w-full"
        />
      </div>
      <section className="mx-auto flex h-[400px] max-w-screen-sm items-center px-6 md:h-[600px] md:max-w-screen-md">
        <div>
          <h2 className={`text-4xl md:text-6xl ${font.className}`}>
            <p className={`md:mb-2 ${styles.titleIn}`}>아무것도 하지 않으면</p>
            <p className={styles.titleIn2}>아무것도 일어나지 않는다.</p>
          </h2>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
