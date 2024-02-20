"use client";

import { works } from "@/works/worksData";
import { Modal } from "./modal";

const WorksModal = ({ params: { slug } }: { params: { slug: string } }) => {
  const data = works.find((work) => work.slug === slug);

  return (
    <Modal>
      <div className="absolute left-1/2 top-1/2 z-50 h-4/5 w-4/5 -translate-x-1/2 -translate-y-1/2  rounded-xl border-2 bg-background px-4 py-6">
        <h2 className="mb-4 text-xl">{data?.title}</h2>

        {/* <a href={`/works/${slug}`}>완전바로가기</a> */}
      </div>
    </Modal>
  );
};

export default WorksModal;
