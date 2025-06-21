import MainSection from "@/containers/home/Sections/Main/MainSection";
import SkillProgressSection from "@/containers/home/Sections/SkillProgress/SkillProgressSection";
import SkillsSection from "@/containers/home/Sections/Skills/SkillsSection";
import WorksSection from "@/containers/home/Sections/Works/WorksSection";
import Weather from "@/components/Weather/Weather";
import Contact from "@/containers/home/Sections/Contact/Contact";
import VerticalTitle from "@/components/Text/VerticalTitle";
import BestSection from "@/containers/home/Sections/BestWorks/BestSection";

export default function Home() {
  return (
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
  );
}
