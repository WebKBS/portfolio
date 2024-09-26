import { aboutGoodSkills, usableButIncomplete } from "@/data/SkillsData";
import Image from "next/image";
import AboutSkillList from "./_components/AboutSkillList";
import TopTitle from "./_components/TopTitle";

export const metadata = {
  title: "About",
};

const AboutPage = () => {
  return (
    <main className="flex-1">
      <TopTitle />
      <section className="bg-background py-12">
        <div className="mx-auto max-w-screen-lg px-6">
          <AboutSkillList
            title="능숙하게 잘 다룰 수 있어요."
            skills={aboutGoodSkills}
          />
          <AboutSkillList
            title="부족하지만 사용할 수 있어요."
            skills={usableButIncomplete}
          />
          <h2 className="flex items-center gap-2">
            더 자세한 내용은 Notion에서 확인할 수 있습니다.
          </h2>
          <a
            href="https://lilac-hare-5d2.notion.site/Frontend-Developer-88d852a748b24fb1b838d284adfecfe1"
            className="mt-4 flex items-center gap-2 font-bold text-blue-600 hover:underline"
            target="_blank"
          >
            <Image
              src="/icons/notion.svg"
              width={40}
              height={40}
              alt="notion 경력기술서"
            />
            경력기술서
          </a>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
