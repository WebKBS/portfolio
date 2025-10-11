import { categorizedSkills } from "@/data/aboutSkillsData";
import Image from "next/image";
import CategorizedSkills from "../../containers/about/CategorizedSkills";
import TopTitle from "../../containers/about/TopTitle";

export const metadata = {
  title: "About",
};

const AboutPage = () => {
  return (
    <main className="flex-1">
      <TopTitle />
      <section className="bg-background py-12">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-gray-100">
              기술 스택
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              카드에 마우스를 올리면 상세 설명을 확인할 수 있습니다.
            </p>
          </div>

          <CategorizedSkills categories={categorizedSkills} />

          <div className="mt-16 rounded-xl border border-gray-200 bg-gradient-to-br from-blue-50 to-purple-50 p-8 dark:border-gray-700 dark:from-gray-800 dark:to-gray-900">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
              더 자세한 내용은 Notion에서 확인할 수 있습니다.
            </h2>
            <a
              href="https://lilac-hare-5d2.notion.site/Frontend-Developer-88d852a748b24fb1b838d284adfecfe1"
              className="inline-flex items-center gap-3 rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 dark:bg-gray-800 dark:text-gray-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/notion.svg"
                width={32}
                height={32}
                alt="notion 경력기술서"
              />
              <span>경력기술서 보기</span>
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
