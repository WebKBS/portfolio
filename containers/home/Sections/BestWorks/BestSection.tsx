import BestList from "@/containers/home/Sections/BestWorks/BestList";

const BestSection = () => {
  return (
    <section className="mx-auto w-full max-w-[1920px] px-5 md:px-6">
      <div className="mx-auto max-w-4xl py-16 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Best Projects</h2>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          개인적으로 만족도가 높고 임팩트 있었던 작업들을 선별해 소개합니다.
        </p>
      </div>
      <div className="lg:px-8">
        <BestList />
      </div>
    </section>
  );
};

export default BestSection;
