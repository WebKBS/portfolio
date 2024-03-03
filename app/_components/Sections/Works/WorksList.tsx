import { works } from "@/data/worksData";

import Link from "next/link";
import WorkItem from "./WorkItem";

const WorksList = () => {
  const filterData = works.slice(0, 4);

  return (
    <>
      <h2 className="mb-6 text-center text-3xl font-bold">WORKS</h2>
      <div className="overflow-x-auto">
        <div className="mx-auto mb-3 flex justify-end text-sm lg:max-w-full">
          <Link href="/works" className="flex items-center gap-1">
            More{" "}
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white">
              {works.length}
            </span>{" "}
            +
          </Link>
        </div>
        <ul className="flex flex-col  gap-5 pb-4 sm:grid sm:grid-cols-2 sm:grid-rows-[repeat(auto-fill,minmax(0,1fr))] lg:grid-cols-3 xl:grid-cols-4">
          {filterData.map((work) => (
            <WorkItem key={work.id} work={work} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default WorksList;
