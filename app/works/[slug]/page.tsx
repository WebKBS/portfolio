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

  console.log(data);

  return (
    <main className="flex-1">
      <WorksBanner image={data.image} title={data.title} />
      <section className="z-[1] mx-auto h-full max-w-screen-lg lg:max-w-screen-2xl lg:px-4">
        <PageTitle title={data.title} isPreview={true} />
        <div className="h-[3000px]"></div>
      </section>

      <Preview previewImageData={data.detailContent.previewImages} />
    </main>
  );
};

export default WorksDetailPage;
