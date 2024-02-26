import WorksBanner from "@/components/Banner/WorksBanner";
import { works } from "@/data/worksData";
import { notFound } from "next/navigation";

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
      <WorksBanner image={data.image} />
      <div className="h-[3000px] bg-background"></div>
    </main>
  );
};

export default WorksDetailPage;
