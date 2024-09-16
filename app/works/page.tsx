import WorksBanner from "@/components/Banner/WorksBanner";
import { works } from "@/data/works/worksData";
import WorkItem from "../_components/Sections/Works/WorkItem";
import PageTitle from "./_components/PageTitle";
import worksBannerImage from "@/public/images/banner/works-banner.png";

export const metadata = {
  title: "Works",
};

const WroksPage = () => {
  return (
    <main className="flex-1">
      <WorksBanner image={worksBannerImage} title="WORKS" />
      <section className="relative z-[1] mx-auto max-w-screen-lg  pb-20 pt-8 lg:max-w-screen-2xl lg:px-6">
        <PageTitle title="WORKS" />
        <ul className="flex flex-wrap gap-4 px-5 sm:grid sm:grid-cols-2 sm:grid-rows-[repeat(auto-fill,minmax(0,1fr))] lg:grid-cols-3 lg:px-0 xl:grid-cols-4">
          {works.map((work) => (
            <WorkItem key={work.id} work={work} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default WroksPage;
