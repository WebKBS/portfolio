import { IWorks } from "@/works/worksData";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../../ui/badge";

const Works = ({ filterData }: { filterData: IWorks[] }) => {
  return (
    <>
      {filterData.map((work: IWorks) => (
        <li
          key={work.id}
          className="max-w-60 flex-1 rounded-xl border bg-white px-3 py-4 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
        >
          <Link href={`/works/${work.slug}`} scroll={false}>
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
                <p className="mb-4 line-clamp-2 text-sm">{work.description}</p>
              </div>
              <div className="flex justify-between">
                <time className="text-sm" dateTime={work.date}>
                  {work.date}
                </time>
                <Badge variant={"default"}>Detail</Badge>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </>
  );
};

export default Works;
