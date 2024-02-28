import LottieComp from "@/components/Lottie/Lottie";
import QrCode from "@/components/QrCode/QrCode";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MainSection = () => {
  return (
    <section className="relative mx-auto max-w-screen-md px-5 py-24 sm:max-w-xl sm:py-60 lg:max-w-screen-lg lg:px-8">
      <div className="gap-6 sm:flex sm:justify-center">
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
      </div>
      <div className="absolute bottom-6 left-0 break-keep px-5 text-center text-xs dark:text-yellow-300 sm:text-left lg:px-8">
        본 사이트는 포트폴리오 용도로 제작되었으며, 어떠한 상업적 목적으로
        사용되지 않습니다.
      </div>
    </section>
  );
};

export default MainSection;
