import { works } from "@/data/worksData";

import Link from "next/link";
import Works from "./Works";

const WorksList = () => {
  const filterData = works.slice(0, 4);

  return (
    <>
      <h2 className="mb-6 text-center text-3xl font-bold">WORKS</h2>
      <div className="overflow-x-auto ">
        <div className="mx-auto mb-3 flex justify-end text-sm lg:max-w-full">
          <Link href="/works" className="flex items-center gap-1">
            More{" "}
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500">
              {works.length}
            </span>{" "}
            +
          </Link>
        </div>
        <ul className="flex flex-col  gap-5 pb-4 sm:grid sm:grid-cols-2 sm:grid-rows-[repeat(auto-fill,minmax(0,1fr))] lg:grid-cols-3 xl:grid-cols-4">
          <Works filterData={filterData} />
        </ul>
      </div>
    </>
  );
};

export default WorksList;