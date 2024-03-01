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
      <WorksBanner image={data.image} title={data.title} height="h-auto" />
      <section className="z-[1] mx-auto h-full max-w-screen-lg lg:max-w-screen-2xl lg:px-6">
        <PageTitle title={data.title} isPreview={true} />
        <div className="mx-auto max-w-screen-md px-5 py-4 lg:py-20">
          <ContentTitle title="프로젝트 소개">
            <div>{data.detailContent.description}</div>
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
            <ul>
              {data.detailContent.functions.map((func, index) => (
                <li key={index} className="mb-3">
                  <h4 className="mb-1 pl-3 text-lg font-semibold text-blue-500">
                    {func.function}
                  </h4>
                  <p className="relative pl-6">
                    <span className="absolute left-2 top-0">-</span>
                    {func.description}
                  </p>
                </li>
              ))}
            </ul>
          </ContentTitle>
          <ContentTitle title="프로젝트 후기">
            <div>{data.detailContent.insight}</div>
          </ContentTitle>

          <ContentTitle title="배포">
            {data.url === "empty" ? (
              <span className="text-red-300">배포된 사이트가 없습니다.</span>
            ) : (
              <a
                href={data.url}
                target="_blank"
                rel="noreferrer"
                className="text-green-500"
              >
                {data.url}
              </a>
            )}
          </ContentTitle>
        </div>
      </section>

      <Preview previewImageData={data.detailContent.previewImages} />
    </main>
  );
};

export default WorksDetailPage;
