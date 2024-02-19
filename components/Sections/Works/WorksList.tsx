import { works } from "@/works/worksData";

import Link from "next/link";
import Works from "./Works";

const WorksList = () => {
  const filterData = works.slice(0, 4);

  return (
    <>
      <h2 className="mb-12 text-center text-3xl font-bold">WORKS</h2>
      <div className="relative">
        <Link href="/works" className="absolute right-0 top-[-34px]">
          More +
        </Link>
        <ul className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <Works filterData={filterData} />
        </ul>
      </div>
    </>
  );
};

export default WorksList;
