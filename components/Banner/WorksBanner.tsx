import Image from "next/image";
import styles from "./WorksBanner.module.css";

const WorksBanner = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className="sticky left-0 top-14 -z-10 h-[400px] w-screen overflow-hidden">
      <Image
        priority
        src={image}
        alt="Works Banner"
        width={1920}
        height={400}
        sizes="100vw"
        className="absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 object-cover"
      />
      <div
        className={`absolute left-0 top-0 h-full w-full ${styles.linearGradient}`}
      ></div>
      <div className="relative z-[1] mx-auto h-full max-w-screen-lg px-5 py-6 lg:max-w-screen-2xl lg:px-4 xl:px-6">
        <div className="flex h-full w-full items-end">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WorksBanner;
