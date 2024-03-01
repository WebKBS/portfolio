"use client";

import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import { IWorks } from "@/data/worksData";
import { useRouterModalToggle } from "@/store/modal-store";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../../../../components/ui/badge";

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
          className="w-full rounded-xl border bg-white px-3 py-4 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 sm:w-full"
        >
          <Link
            href={`/works/${work.slug}`}
            scroll={false}
            onClick={clickHandler}
            className="flex h-full flex-col gap-2"
          >
            <div className="relative mb-2 h-40 w-full overflow-hidden">
              <LoadingSpinner />
              <Image
                src={work.thumbnail}
                alt={work.title}
                width={300}
                height={300}
                className="absolute left-0 top-0 h-auto w-full object-cover"
              />
            </div>
            <div className="flex flex-col">
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
            </div>
            <div className="mt-auto flex justify-between">
              <time className="text-sm" dateTime={work.date}>
                {work.date}
              </time>
              <Badge variant={"default"}>Preview</Badge>
            </div>
          </Link>
        </li>
      ))}
    </>
  );
};

export default Works;
