import { works } from "@/works/worksData";

import Link from "next/link";
import Works from "./Works";

const WorksList = () => {
  const filterData = works.slice(0, 4);
  console.log(filterData);

  return (
    <>
      <h2 className="mb-12 text-center text-3xl font-bold">Works</h2>
      <Link href="/works" className="">
        More +
      </Link>
      <ul className="flex justify-center gap-4">
        <Works filterData={filterData} />
      </ul>
    </>
  );
};

export default WorksList;
