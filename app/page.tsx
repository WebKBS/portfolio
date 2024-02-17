import LottieComp from "@/components/Lottie/Lottie";
import QrCode from "@/components/QrCode/QrCode";
import SkillProgress from "@/components/SkillProgress/SkillProgress";
import Skills from "@/components/Skills/Skills";
import Weather from "@/components/Weather/Weather";

export default async function Home() {
  return (
    <>
      <main className="flex-1">
        <Weather />
        <section className="mx-auto max-w-screen-lg gap-6 px-5 py-16 sm:flex sm:py-32 lg:px-6">
          <div className="flex flex-col justify-between gap-12">
            <h2 className="mb-4 text-center text-3xl font-bold leading-normal sm:text-left md:text-5xl md:leading-snug">
              BEOM-SU KANG
              <br />
              PORTFOLIO
            </h2>
            <QrCode url="/" />
          </div>
          <LottieComp />
        </section>
        <section className="mx-auto max-w-[1920px] overflow-hidden bg-gray-200 dark:bg-gray-600">
          <Skills />
        </section>
        <section>
          <SkillProgress percentage={75} color="#4eb5f1" />
        </section>
      </main>
    </>
  );
}
