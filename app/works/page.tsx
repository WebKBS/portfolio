import WorksBanner from "@/components/Banner/WorksBanner";
import { works } from "@/data/works/worksData";
import WorkItem from "../_components/Sections/Works/WorkItem";
import PageTitle from "./_components/PageTitle";
import worksBannerImage from "@/public/images/banner/works-banner.png";
import { IWorks } from "@/types/worksType";

export const metadata = {
  title: "Works",
};

const WorksPage = () => {
  let filteredWorks: IWorks[] = [];

  if (process.env.NODE_ENV === "production") {
    filteredWorks = works.filter((work) => work.published);
  }

  if (process.env.NODE_ENV === "development") {
    filteredWorks = works;
  }

  return (
    <main className="flex-1">
      <WorksBanner image={worksBannerImage} title="WORKS" />
      <section className="relative z-[1] mx-auto max-w-screen-lg  pb-20 pt-8 lg:max-w-screen-2xl lg:px-6">
        <PageTitle title="WORKS" />
        <ul className="flex flex-wrap gap-4 px-5 sm:grid sm:grid-cols-2 sm:grid-rows-[repeat(auto-fill,minmax(0,1fr))] lg:grid-cols-3 lg:px-0 xl:grid-cols-4">
          {filteredWorks.map((work) => (
            <WorkItem key={work.id} work={work} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default WorksPage;
