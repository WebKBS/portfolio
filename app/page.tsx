import MainSection from "@/app/_components/Sections/Main/MainSection";
import SkillProgressSection from "@/app/_components/Sections/SkillProgress/SkillProgressSection";
import SkillsSection from "@/app/_components/Sections/Skills/SkillsSection";
import WorksSection from "@/app/_components/Sections/Works/WorksSection";
import Weather from "@/components/Weather/Weather";
import Contact from "./_components/Sections/Contact/Contact";
import VerticalTitle from "./_components/Text/VerticalTitle";
import BestSection from "@/app/_components/Sections/BestWorks/BestSection";

export default async function Home() {
  return (
    <>
      <main className="relative flex-1">
        <Weather />
        <VerticalTitle />
        <MainSection />
        <SkillsSection />
        <SkillProgressSection />
        <BestSection />
        <WorksSection />
        <Contact />
      </main>
    </>
  );
}
