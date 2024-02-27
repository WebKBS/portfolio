import Works from "@/components/Home/Sections/Works/Works";
import { works } from "@/data/worksData";

// export const metadata = {
//   title: "Works",
// };

const WroksPage = () => {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-screen-lg px-5 py-20 lg:max-w-screen-2xl lg:px-4 xl:px-6">
        <h2 className="mb-6 text-center text-3xl font-bold">WORKS</h2>
        <ul className="flex flex-wrap gap-4 sm:grid sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4">
          <Works filterData={works} />
        </ul>
      </div>
    </main>
  );
};

export default WroksPage;
