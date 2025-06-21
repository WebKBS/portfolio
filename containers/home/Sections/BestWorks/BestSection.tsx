import BestList from "@/containers/home/Sections/BestWorks/BestList";

const BestSection = () => {
  return (
    <section className="mx-auto w-full max-w-[1920px] px-5 md:px-6">
      <h2 className="mb-6 py-20 text-center text-4xl font-extrabold uppercase tracking-wider">
        BEST PROJECTS
      </h2>
      <div className="lg:px-8">
        <BestList />
      </div>
    </section>
  );
};

export default BestSection;
