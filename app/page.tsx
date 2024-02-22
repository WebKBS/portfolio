import LottieComp from "@/components/Lottie/Lottie";
import QrCode from "@/components/QrCode/QrCode";
import SkillProgressList from "@/components/Sections/SkillProgress/SkillProgressList";
import Skills from "@/components/Sections/Skills/Skills";
import WorksList from "@/components/Sections/Works/WorksList";
import Weather from "@/components/Weather/Weather";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <main className="relative flex-1">
        <Weather />
        <p
          className="absolute left-0 top-5 -z-10 -scale-100 text-[100px] font-extrabold leading-none text-gray-400 opacity-20 sm:text-[120px] md:text-[140px]"
          style={{
            writingMode: "vertical-rl",
            filter: "drop-shadow(-4px 3px 0px rgba(255, 255, 255, 1 ))",
          }}
        >
          PORTFOLIO
        </p>
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
        <section className="mx-auto max-w-[1920px] overflow-hidden bg-gray-200 dark:bg-gray-600">
          <Skills />
        </section>
        <section className="px-5 pb-20 pt-40 lg:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">SKILLS</h2>
          <SkillProgressList />
        </section>
        <section className="mx-auto max-w-[1400px] px-5 py-20 lg:px-6">
          <WorksList />
        </section>
      </main>
    </>
  );
}
