import { aboutSkills } from "@/data/SkillsData";
import AboutSkillListItem from "./_components/AboutSkillListItem";
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
          <h2 className="mb-2 text-2xl font-bold">SKILLS</h2>
          <h3 className="mb-2">능숙하게 잘할 수 있어요.</h3>
          <ul className="flex flex-wrap gap-2">
            {aboutSkills.map((skill, index) => (
              <AboutSkillListItem
                key={index}
                image={skill.image}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </ul>
          <ul className="flex flex-wrap gap-2">
            {aboutSkills.map((skill, index) => (
              <AboutSkillListItem
                key={index}
                image={skill.image}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </ul>

          {/* <h2 className="flex items-center gap-2">
            <span className="text-3xl">🥲</span>
            현재 사이트 수정중입니다.
          </h2>
          <p className="">자세한 내용은 아래 노션을 참고해주세요.</p>
          <a
            href="https://lilac-hare-5d2.notion.site/194648517b8543ca938e4154faf64318?pvs=4"
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
          </a> */}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
