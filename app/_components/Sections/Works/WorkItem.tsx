"use client";

import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import { useRouterModalToggle } from "@/store/modal-store";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { IWorks } from "@/types/worksType";
import { shimmer, toBase64 } from "@/utils/imageSkeleton";

const WorkItem = ({ work }: { work: IWorks }) => {
  const { setRouterModalState } = useRouterModalToggle();

  const clickHandler = () => {
    setRouterModalState(true);
  };

  return (
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
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(100, 100))}`}
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
          <p className="text-sm">{work.date}</p>
          <Badge variant={"default"}>Preview</Badge>
        </div>
      </Link>
    </li>
  );
};

export default WorkItem;
