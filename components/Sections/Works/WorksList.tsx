import { works } from "@/data/worksData";

import Link from "next/link";
import Works from "./Works";

const WorksList = () => {
  const filterData = works.slice(0, 4);

  return (
    <>
      <h2 className="mb-6 text-center text-3xl font-bold">WORKS</h2>
      <div className="overflow-x-auto ">
        <div className="mx-auto mb-3 flex max-w-[320px] justify-end sm:max-w-screen-sm lg:max-w-full">
          <Link href="/works">More +</Link>
        </div>
        <ul className="flex flex-col items-center justify-center gap-5 pb-4 sm:flex-row sm:flex-wrap lg:flex-nowrap lg:justify-between">
          <Works filterData={filterData} />
        </ul>
      </div>
    </>
  );
};

export default WorksList;
