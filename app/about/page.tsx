import Image from "next/image";
import TopTitle from "./_components/TopTitle";

export const metadata = {
  title: "About",
};

const AboutPage = () => {
  return (
    <main className="flex-1">
      <TopTitle />
      <section className="py-12">
        <div className="flex flex-col items-center gap-4">
          <h2 className="flex items-center gap-2">
            <span className="text-3xl">🥲</span>
            현재 사이트 수정중입니다.
          </h2>
          <p className="">자세한 내용은 아래 노션을 참고해주세요.</p>
          <a
            href="https://lilac-hare-5d2.notion.site/194648517b8543ca938e4154faf64318?pvs=4"
            className="mt-4 flex items-center gap-2 font-bold text-blue-600 hover:underline"
            target="_blank"
          >
            <Image
              src="/icons/notion.svg"
              width={40}
              height={40}
              alt="notion 경력기술서"
            />
            경력기술서
          </a>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
