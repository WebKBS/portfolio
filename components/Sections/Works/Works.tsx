"use client";

import { IWorks } from "@/data/worksData";
import { useRouterModalToggle } from "@/store/modal-store";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../../ui/badge";

const Works = ({ filterData }: { filterData: IWorks[] }) => {
  const { setRouterModalState } = useRouterModalToggle();

  const clickHandler = () => {
    setRouterModalState(true);
  };

  return (
    <>
      {filterData.map((work: IWorks) => (
        <li
          key={work.id}
          className="w-full max-w-80 flex-1 rounded-xl border bg-white px-3 py-4 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 sm:min-w-80"
        >
          <Link
            href={`/works/${work.slug}`}
            scroll={false}
            onClick={clickHandler}
          >
            <div className="relative mb-2 h-40 w-full overflow-hidden ">
              <Image
                src={work.image}
                alt={work.thumbnail}
                width={300}
                height={300}
                className="absolute left-0 top-0 h-auto w-full object-cover"
              />
            </div>
            <div className="mx-2 mt-4 flex flex-col">
              <div className="flex flex-col gap-2">
                <h3 className="line-clamp-1 font-semibold">{work.title}</h3>
                <p className="mb-4 line-clamp-2 break-keep text-sm">
                  {work.description}
                </p>
              </div>
              <div className="mb-3 flex flex-wrap gap-1">
                {work.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={"outline"}
                    className="bg-gray-100 dark:bg-gray-900"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex justify-between">
                <time className="text-sm" dateTime={work.date}>
                  {work.date}
                </time>
                <Badge variant={"default"}>Preview</Badge>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </>
  );
};

export default Works;
