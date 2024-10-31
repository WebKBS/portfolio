"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { bestProjectList } from "@/data/bestProjectList";
import useStickyObserver from "@/hooks/useStickyObserver";
import Link from "next/link";

const BestItem = () => {
  const { itemRefs, visibleIndex } = useStickyObserver(0.4);

  return (
    <>
      {bestProjectList.map((work, index) => (
        <li
          key={work.id}
          ref={(el: never) => (itemRefs.current[index] = el)}
          className={cn(
            "sticky left-0 top-[100px] rounded-xl transition-all duration-700",
            visibleIndex === index
              ? `z-[1] scale-100 opacity-100`
              : `scale-95 opacity-10`, //top-[${100 + index * 40}px]
            ``,
          )}
        >
          <div className="relative flex min-h-[80vh] overflow-hidden rounded-xl bg-zinc-100 shadow-lg dark:bg-zinc-800">
            <div className="relative z-[2] flex w-full flex-col space-y-4 whitespace-pre-line break-keep p-8 md:w-[50%]">
              <h3 className="text-3xl font-semibold">{work.title}</h3>
              <Link href={work.url} className="text-lg text-blue-500 underline">
                {work.url}
              </Link>
              <p className="">{work.description}</p>
              <ul className="mb-4 inline-flex flex-wrap items-center space-x-2">
                {work.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 rounded-md bg-white p-1 shadow-md dark:bg-white"
                  >
                    <Image src={skill} alt="skill" height={32} />
                  </li>
                ))}
              </ul>
              <div className="">
                <a
                  href={work.detailUrl}
                  className="inline-block rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600"
                >
                  자세히 보기
                </a>
              </div>
            </div>
            <div className="absolute right-0 top-0 h-full w-full overflow-hidden transition duration-300">
              <Image
                src={work.image}
                alt={work.title}
                className={cn(
                  "absolute right-12 top-0 max-w-3xl -skew-x-6 object-cover transition-all duration-300",
                  visibleIndex !== index ? "opacity-10" : "hover:scale-[1.02]",
                )}
              />
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default BestItem;
