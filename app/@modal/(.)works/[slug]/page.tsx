"use client";
import Mockup from "@/components/Mockup/Mockup";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";

import { works } from "@/data/worksData";
import { useRouterModalToggle } from "@/store/modal-store";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Modal } from "./modal";
import styles from "./page.module.css";

const WorksModal = ({ params: { slug } }: { params: { slug: string } }) => {
  const [lightTheme, setLightTheme] = useState(styles.afterShadow);
  const { modalOpen, setRouterModalState } = useRouterModalToggle();
  const router = useRouter();
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === "light") {
      setLightTheme(styles.afterWhiteShadow);
    }
  }, [theme]);

  const data = works.find((work) => work.slug === slug);

  const closeHandler = () => {
    setRouterModalState(false);
    router.back();
  };

  return (
    <Modal>
      <div
        className={`absolute left-1/2 top-1/2 z-50 flex h-2/3 w-[90%] flex-col overflow-hidden rounded-xl border-2 bg-background lg:max-w-7xl ${modalOpen ? styles.active : ""}`}
      >
        <div className={"h-full w-full overflow-y-auto " + lightTheme}>
          <div className="p-6">
            <div className="sticky left-6 top-6">
              <h2 className="mb-2 text-xl font-semibold">{data?.title}</h2>
              <h3 className="mb-2">{data?.description}</h3>
              <div className="mb-2 flex gap-2 text-sm">
                <p>제작기간:</p>
                <p>{data?.date}</p>
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
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                mollitia laudantium est. Sint ipsum eum accusantium, sit illo
                earum. Tenetur quas molestiae fuga architecto sint molestias
                quia quidem ipsa non?
              </div>
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
