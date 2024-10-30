"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { namhaeImages } from "@/data/works/imageData/namhaeImages";
import Image from "next/image";

const bestWorks = [
  {
    id: 1,
    title: "Project 1",
    img: namhaeImages.desktopImage,
    description: "Project 1 description",
  },
  {
    id: 2,
    title: "Project 2",
    img: namhaeImages.desktopImage,
    description:
      "Project 2 description Project 2 description Project 2 description Project 2 description Project 2 description Project 2 description",
  },
  {
    id: 3,
    title: "Project 3",
    img: namhaeImages.desktopImage,
    description:
      "Project 3 description Project 3 description Project 3 description Project 3 description Project 3 description Project 3 description",
  },
  {
    id: 4,
    title: "Project 4",
    img: namhaeImages.desktopImage,
    description:
      "Project 4 description Project 4 description Project 4 description Project 4 description Project 4 description Project 4 description",
  },
];
const BestSection = () => {
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
    <section className="mx-auto w-full max-w-[1920px] px-4 md:px-6">
      <h2 className="mb-6 py-20 text-center text-4xl font-extrabold uppercase tracking-wider">
        BEST WORKS
      </h2>
      <div className="px-8">
        <ul className="flex flex-col gap-[120px]">
          {bestWorks.map((work, index) => (
            <li
              key={work.id}
              ref={(el: never) => (itemRefs.current[index] = el)}
              className={cn(
                "sticky left-0 top-[100px] rounded-xl transition-all duration-700",
                visibleIndex === index
                  ? `top-[100px] z-[1] scale-100 opacity-100`
                  : `scale-95 opacity-10 top-[${100 + index * 40}px]`,
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
                    src={work.img}
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
        </ul>
      </div>
    </section>
  );
};

export default BestSection;
