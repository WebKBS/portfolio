import Works from "@/app/_components/Sections/Works/Works";
import WorksBanner from "@/components/Banner/WorksBanner";
import { works } from "@/data/worksData";
import PageTitle from "./_components/PageTitle";

export const metadata = {
  title: "Works",
};

const WroksPage = () => {
  return (
    <main className="flex-1">
      <WorksBanner image="/banner/works-banner.png" title="WORKS" />
      <section className="relative z-[1] mx-auto max-w-screen-lg  pb-20 pt-8 lg:max-w-screen-2xl lg:px-6">
        <PageTitle title="WORKS" />
        <ul className="flex flex-wrap gap-4 px-5 sm:grid sm:grid-cols-2 sm:grid-rows-[repeat(auto-fill,minmax(0,1fr))] lg:grid-cols-3 lg:px-0 xl:grid-cols-4">
          <Works filterData={works} />
        </ul>
      </section>
    </main>
  );
};

export default WroksPage;
