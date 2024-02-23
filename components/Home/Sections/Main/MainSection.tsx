import LottieComp from "@/components/Lottie/Lottie";
import QrCode from "@/components/QrCode/QrCode";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MainSection = () => {
  return (
    <section className="mx-auto max-w-screen-md gap-6 px-5 py-24 sm:flex sm:max-w-xl sm:justify-center sm:py-60 lg:max-w-screen-lg lg:px-8">
      <div className="flex flex-col justify-between gap-12">
        <div>
          <h2 className="mb-4 text-center text-3xl font-bold leading-normal sm:text-left md:text-5xl md:leading-snug">
            BEOM-SU KANG
            <br />
            <span>PORTFOLIO</span>
          </h2>
          <div className="mb-8 flex justify-center gap-2 sm:mb-0 sm:justify-normal">
            <Link href="/about">
              <Button className="text-xs" variant={"secondary"} size="sm">
                제가 궁금한가요?
              </Button>
            </Link>
            <Link href="/works">
              <Button className="text-xs " variant={"secondary"} size="sm">
                작업 목록
              </Button>
            </Link>
          </div>
        </div>
        <QrCode url="/" />
      </div>
      <LottieComp />
    </section>
  );
};

export default MainSection;
