"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { bestProjectList } from "@/data/bestProjectList";

const BestItem = () => {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.findIndex((el) => el === entry.target);
          if (index !== -1) {
            if (entry.isIntersecting) {
              setVisibleIndex(index); // 뷰포트에 들어오면 애니메이션 적용
            } else if (visibleIndex === index) {
              setVisibleIndex(null); // 뷰포트를 나가면 애니메이션 해제
            }
          }
        });
      },
      { threshold: 0.4 }, // 뷰포트에 40% 이상 보일 때 트리거
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [visibleIndex]);

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
          <div className="relative flex min-h-[80vh] overflow-hidden rounded-xl bg-zinc-800">
            <div className="relative z-[2] flex w-full flex-col space-y-4 p-8 md:w-[50%]">
              <h3 className="text-3xl font-semibold">{work.title}</h3>
              <p className="">{work.description}</p>
            </div>
            <div className="absolute right-0 top-0 h-full w-full overflow-hidden transition duration-300">
              <Image
                src={work.image}
                alt={work.title}
                className={cn(
                  "absolute right-12 top-0 max-w-3xl -skew-x-6 object-cover transition-all duration-300 hover:scale-[1.02]",

                  visibleIndex !== index ? "opacity-10" : "",
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
