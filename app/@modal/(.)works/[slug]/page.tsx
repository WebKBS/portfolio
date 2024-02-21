import Mockup from "@/components/Mockup/Mockup";
import { Button } from "@/components/ui/button";
import { works } from "@/works/worksData";
import { Modal } from "./modal";
import styles from "./page.module.css";

const WorksModal = ({ params: { slug } }: { params: { slug: string } }) => {
  const data = works.find((work) => work.slug === slug);
  // console.log(data);

  return (
    <Modal>
      <div
        className={
          "absolute left-1/2 top-1/2 z-50 h-4/5 w-[90%] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl border-2 bg-background " +
          styles.afterShadow
        }
      >
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
          <div className="sticky bottom-0 right-0">
            <Button>닫기</Button>
            <a className={""} href={`/works/${slug}`}>
              Detail
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default WorksModal;
