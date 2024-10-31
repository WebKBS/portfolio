"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { bestProjectList } from "@/data/bestProjectList";
import useStickyObserver from "@/hooks/useStickyObserver";

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
            <div className="relative z-[2] flex w-full flex-col space-y-4 p-8 md:w-[50%]">
              <h3 className="text-3xl font-semibold">{work.title}</h3>
              <p className="">{work.description}</p>
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
