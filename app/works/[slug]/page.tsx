import WorksBanner from "@/components/Banner/WorksBanner";
import { works } from "@/data/works/worksData";
import { notFound } from "next/navigation";
import ContentTitle from "../_components/ContentTitle";
import FunctionItem from "../_components/FunctionItem";
import PageTitle from "../_components/PageTitle";
import Preview from "../_components/Preview";
import StackItem from "../_components/StackItem";
import GalleryButton from "@/components/Buttons/GalleryButton";

const WorksDetailPage = ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const data = works.find((work) => work.slug === slug);

  if (!data) {
    return notFound();
  }
  // console.log(data);

  return (
    <main className="flex-1">
      <WorksBanner
        image={data.bannerImage}
        title={data.title}
        // height="h-auto"
      />
      <section className="z-[1] mx-auto h-full max-w-screen-lg lg:max-w-screen-2xl lg:px-6">
        <PageTitle title={data.title} />
        <div className="mx-auto max-w-screen-md px-5 py-4 lg:py-20">
          <div className="mb-12">
          <div className={"flex justify-between gap-4 items-center mb-4"}>
            <ContentTitle className="mb-0" title="프로젝트 소개" />
            <GalleryButton/>
          </div>
            <div>{data.detailContent.description}</div>
          </div>
          <div className="mb-12">
            <ContentTitle title="프로젝트 기여도" />
            <div>{data.contribution}</div>
          </div>
          <div className="mb-12">
            <ContentTitle title="사용 기술" />
            <ul className="flex flex-wrap items-center gap-2">
              {data.detailContent.stacks.map((stack, index) => (
                <StackItem key={index} stack={stack} />
              ))}
            </ul>
          </div>
          <div className="mb-12">
            <ContentTitle title="사용 기능" />
            <ul>
              {data.detailContent.functions.map((functionData, index) => (
                <FunctionItem key={index} functionData={functionData} />
              ))}
            </ul>
          </div>
          <div className="mb-12">
            <ContentTitle title="프로젝트 후기" />
            <div>{data.detailContent.insight}</div>
          </div>
          <div className="mb-12">
            <ContentTitle title="배포" />
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
          </div>
        </div>
      </section>

      <Preview previewImageData={data.detailContent.previewImages} />
    </main>
  );
};

export default WorksDetailPage;
