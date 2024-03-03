import MainSection from "@/app/_components/Sections/Main/MainSection";
import SkillProgressSection from "@/app/_components/Sections/SkillProgress/SkillProgressSection";
import SkillsSection from "@/app/_components/Sections/Skills/SkillsSection";
import WorksSection from "@/app/_components/Sections/Works/WorksSection";
import Weather from "@/components/Weather/Weather";
import VerticalTitle from "./_components/Text/VerticalTitle";

export default async function Home() {
  return (
    <>
      <main className="relative flex-1">
        <Weather />
        <VerticalTitle />
        <MainSection />
        <SkillsSection />
        <SkillProgressSection />
        <WorksSection />
      </main>
    </>
  );
}
