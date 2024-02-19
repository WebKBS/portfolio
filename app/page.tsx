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
      <main className="flex-1">
        <Weather />
        <section className="mx-auto max-w-screen-lg gap-6 px-5 py-24 sm:flex sm:py-48 lg:px-6">
          <div className="flex flex-col justify-between gap-12">
            <div>
              <h2 className="mb-4 text-center text-3xl font-bold leading-normal sm:text-left md:text-5xl md:leading-snug">
                BEOM-SU KANG
                <br />
                PORTFOLIO
              </h2>
              <div className="mb-8 flex justify-center gap-2 sm:mb-0 sm:justify-normal">
                <Link href="/about">
                  <Button
                    className="bg-gray-800 text-xs text-gray-100"
                    size="sm"
                  >
                    제가 궁금한가요?
                  </Button>
                </Link>
                <Link href="/works">
                  <Button
                    className="bg-gray-800 text-xs text-gray-100"
                    size="sm"
                  >
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
        <section className="mx-auto max-w-screen-lg px-5 py-20 lg:px-6">
          <WorksList />
        </section>
      </main>
    </>
  );
}
