import WorksBanner from "@/components/Banner/WorksBanner";
import { works } from "@/data/worksData";
import { notFound } from "next/navigation";
import PageTitle from "../_components/PageTitle";
import Preview from "../_components/Preview";

const WorksDetailPage = ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const data = works.find((work) => work.slug === slug);

  if (!data) {
    return notFound();
  }

  return (
    <main className="flex-1">
      <WorksBanner image={data.image} title={data.title} isPreview={true} />
      <section className="z-[1] mx-auto h-full max-w-screen-lg px-5 lg:max-w-screen-2xl lg:px-4 xl:px-6">
        <PageTitle title={data.title} isPreview={true} />
        <div className="h-[3000px]">
          {/* <MacMockup src={data.image} title="" />
          <IphoneMockup src={data.image} title="" /> */}
        </div>
      </section>

      <Preview />
    </main>
  );
};

export default WorksDetailPage;
