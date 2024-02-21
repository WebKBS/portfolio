"use client";
import Mockup from "@/components/Mockup/Mockup";
import { Button, buttonVariants } from "@/components/ui/button";
import { works } from "@/works/worksData";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Modal } from "./modal";
import styles from "./page.module.css";

const WorksModal = ({ params: { slug } }: { params: { slug: string } }) => {
  const [lightTheme, setLightTheme] = useState(styles.afterShadow);
  const router = useRouter();
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === "light") {
      setLightTheme(styles.afterWhiteShadow);
    }
  }, [theme]);

  const data = works.find((work) => work.slug === slug);
  // console.log(data);

  return (
    <Modal>
      <div className="absolute left-1/2 top-1/2 z-50 flex h-4/5 w-[90%] -translate-x-1/2  -translate-y-1/2 flex-col rounded-xl border-2 bg-background">
        <div className={"h-full w-full overflow-y-auto " + lightTheme}>
          <div className="p-6">
            <h2 className="mb-2 text-xl font-semibold">{data?.title}</h2>
            <h3 className="mb-2">{data?.description}</h3>
            <div className="flex gap-2 text-sm">
              <p>제작기간:</p>
              <p>{data?.date}</p>
            </div>
            <div className="py-6">
              <Mockup
                title={data!.title}
                image={data!.image}
                mobileImage={data!.mobileImage}
              />
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-xs gap-2 bg-background p-3 md:ml-auto md:mr-0">
          <Button
            className="flex-1"
            variant="outline"
            onClick={() => router.back()}
          >
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
