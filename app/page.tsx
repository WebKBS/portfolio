import MainSection from "@/components/Sections/Main/MainSection";
import SkillProgressSection from "@/components/Sections/SkillProgress/SkillProgressSection";
import SkillsSection from "@/components/Sections/Skills/SkillsSection";
import WorksSection from "@/components/Sections/Works/WorksSection";
import Weather from "@/components/Weather/Weather";

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
        <MainSection />
        <SkillsSection />
        <SkillProgressSection />
        <WorksSection />
      </main>
    </>
  );
}
