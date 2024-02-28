import TopTitle from "./_components/TopTitle";

export const metadata = {
  title: "About",
};

const AboutPage = () => {
  return (
    <main>
      <TopTitle />
      <div className="h-[3000px] bg-background"></div>
    </main>
  );
};

export default AboutPage;
