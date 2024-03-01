import WorksBanner from "@/components/Banner/WorksBanner";
import { Badge } from "@/components/ui/badge";
import { SkillsBackground } from "@/data/SkillsData";
import { works } from "@/data/worksData";
import { notFound } from "next/navigation";
import ContentTitle from "../_components/ContentTitle";
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
      <section className="z-[1] mx-auto h-full max-w-screen-lg lg:max-w-screen-2xl lg:px-6">
        <PageTitle title={data.title} isPreview={true} />
        <div className="mx-auto h-[3000px] max-w-screen-md px-5 py-4 lg:py-20">
          <ContentTitle title="프로젝트 소개">
            <div>{data.body}</div>
          </ContentTitle>
          <ContentTitle title="사용 기술">
            <ul className="flex flex-wrap items-center gap-2">
              {data.detailContent.stacks.map((stack, index) => (
                <li key={index}>
                  <Badge
                    style={{
                      background: SkillsBackground(stack)[0],
                      color: SkillsBackground(stack)[1],
                    }}
                    className="border-white"
                  >
                    {stack}
                  </Badge>
                </li>
              ))}
            </ul>
          </ContentTitle>
          <ContentTitle title="사용 기능">
            <ul className="flex flex-wrap items-center gap-2">
              {data.detailContent.functions.map((func, index) => (
                <li key={index}>{func}</li>
              ))}
            </ul>
          </ContentTitle>
          <ContentTitle title="배포">
            <a
              href={data.url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600"
            >
              {data.url}
            </a>
          </ContentTitle>
        </div>
      </section>

      <Preview previewImageData={data.detailContent.previewImages} />
    </main>
  );
};

export default WorksDetailPage;
