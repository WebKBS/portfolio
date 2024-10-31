import BestList from "@/app/_components/Sections/BestWorks/BestList";

const BestSection = () => {
  return (
    <section className="mx-auto w-full max-w-[1920px] px-4 md:px-6">
      <h2 className="mb-6 py-20 text-center text-4xl font-extrabold uppercase tracking-wider">
        BEST PROJECTS
      </h2>
      <div className="px-8">
        <BestList />
      </div>
    </section>
  );
};

export default BestSection;
