"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { bestProjectList } from "@/data/bestProjectList";
import useStickyObserver from "@/hooks/useStickyObserver";
import Link from "next/link";
import { shimmer, toBase64 } from "@/utils/imageSkeleton";
import ResponsiveImage from "@/components/ResponsiveImage";
import { Button } from "@/components/ui/button";
import { MdOpenInNew } from "react-icons/md";

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
              : `scale-95 opacity-10`,
          )}
        >
          <div className="relative flex min-h-[80vh] overflow-hidden rounded-xl border bg-background/70 shadow-lg backdrop-blur-sm dark:bg-background/70">
            <div className="relative z-[2] flex w-full flex-col gap-4 whitespace-pre-line break-keep p-5 md:p-8 lg:w-[50%]">
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-bold md:text-3xl">{work.title}</h3>
                <p className="text-xs text-muted-foreground">{work.period}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Button asChild size="sm">
                  <a href={work.url} target="_blank" rel="noopener noreferrer" aria-label={`${work.title} 사이트 방문`}>
                    사이트 방문 <MdOpenInNew className="ml-1 inline-block" />
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <Link href={work.detailUrl} aria-label={`${work.title} 자세히 보기`}>
                    자세히 보기
                  </Link>
                </Button>
              </div>
              <p className="leading-7 text-sm md:text-base text-foreground/90">{work.description}</p>
              <ul className="mb-2 flex flex-wrap gap-2">
                {work.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center rounded-md border bg-background/80 p-1.5 shadow-sm ring-1 ring-black/5 dark:ring-white/10"
                    title="기술 스택"
                  >
                    <Image src={skill} alt="skill" height={24} width={24} className="h-6 w-6" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute right-0 top-0 h-full w-full overflow-hidden">
              <ResponsiveImage
                desktop={work.desktopImage}
                mobile={work.mobileImage}
                alt={work.title}
                className={cn(
                  "absolute right-6 top-0 max-w-3xl -skew-x-6 rounded-lg object-cover transition-transform duration-500",
                  visibleIndex !== index ? "opacity-10" : "hover:scale-[1.02]",
                )}
                placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(100, 100))}`}
                loading={"lazy"}
              />
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default BestItem;
