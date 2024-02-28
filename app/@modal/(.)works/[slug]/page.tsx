"use client";
import Mockup from "@/components/Mockup/Mockup";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";

import { works } from "@/data/worksData";
import { useRouterModalToggle } from "@/store/modal-store";
import { throttle } from "lodash";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Modal } from "./modal";
import styles from "./page.module.css";

const WorksModal = ({ params: { slug } }: { params: { slug: string } }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [lightTheme, setLightTheme] = useState(styles.afterShadow);
  const { modalOpen, setRouterModalState } = useRouterModalToggle();
  const router = useRouter();
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === "light") {
      setLightTheme(styles.afterWhiteShadow);
    }
  }, [theme]);

  useEffect(() => {
    const currentScrollRef = scrollRef.current!;

    const handleScrollThrottled = throttle(() => {
      // console.log("스크롤 위치:", currentScrollRef.scrollTop);
      // console.log("boxRef:", boxRef.current?.clientHeight);
      if (currentScrollRef.scrollTop > boxRef.current?.clientHeight! / 10) {
        boxRef.current?.classList.add("opacity-0");
      } else {
        boxRef.current?.classList.remove("opacity-0");
      }
    }, 120); // 쓰로틀링 간격 설정

    currentScrollRef.addEventListener("scroll", handleScrollThrottled);

    return () => {
      currentScrollRef.removeEventListener("scroll", handleScrollThrottled);
    };
  }, []);

  // const opacityStyle = isOpacity ? "opacity-0" : "opacity-100";

  const data = works.find((work) => work.slug === slug);

  const closeHandler = () => {
    setRouterModalState(false);
    router.back();
  };

  return (
    <Modal>
      <div
        className={`absolute left-1/2 top-1/2 z-50 flex h-2/3 w-[90%] flex-col overflow-hidden rounded-xl border-2 bg-background lg:h-3/4 lg:max-w-7xl ${modalOpen ? styles.active : ""}`}
      >
        <div
          className={`h-full w-full overflow-y-auto ${lightTheme}`}
          ref={scrollRef}
        >
          <div className="py-6">
            <div
              ref={boxRef}
              className={`sticky left-6 top-6 px-6 transition-opacity duration-500`}
            >
              <h2 className="mb-2 text-xl font-semibold">{data?.title}</h2>
              <h3 className="mb-2">{data?.description}</h3>
              <div className="mb-2 flex gap-2 text-sm">
                <p>제작기간:</p>
                <p>{data?.date}</p>
              </div>
              <div className="mb-2 text-sm text-green-500">
                {data?.url === "empty" ? (
                  <span className="text-red-400">
                    아쉽게도 URL이 없습니다. 🥲
                  </span>
                ) : (
                  <a href={data?.url} target="_blank">
                    {data?.url}
                  </a>
                )}
              </div>
              <div className="mb-2">
                <ul className="flex flex-wrap gap-2">
                  {data?.tags.map((tech, index) => (
                    <li key={index}>
                      <Badge>{tech}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative z-10 w-full bg-background pt-4">
                {data?.body}
              </div>
            </div>
            <div className="relative z-10 bg-background px-6 py-6">
              <Mockup
                title={data!.title}
                image={data!.image}
                mobileImage={data!.mobileImage}
              />
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-xs gap-2 bg-background p-3 md:ml-auto md:mr-0">
          <Button className="flex-1" variant="outline" onClick={closeHandler}>
            닫기
          </Button>
          <a
            className={buttonVariants({
              variant: "secondary",
              className: "flex-1",
            })}
            href={`/works/${slug}`}
          >
            자세히 보기
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default WorksModal;
