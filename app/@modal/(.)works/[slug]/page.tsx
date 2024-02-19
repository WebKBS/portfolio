"use client";

import { Button } from "@/components/ui/button";
import { useRouterModalToggle } from "@/store/modal-store";
import { works } from "@/works/worksData";
import { useRouter } from "next/navigation";
import { Modal } from "./modal";

const WorksModal = ({ params: { slug } }: { params: { slug: string } }) => {
  // console.log(slug);
  const router = useRouter();
  const { setRouterModalState } = useRouterModalToggle();

  const data = works.find((work) => work.slug === slug);

  function goToWorks() {
    setRouterModalState(false);
    router.push(`/works/${slug}`);
  }

  return (
    <Modal>
      <div className="absolute left-0 top-0 z-50 h-4/5 w-4/5 bg-gray-200 dark:bg-gray-700">
        asdasd
        <Button onClick={goToWorks}>바로가기</Button>
        <a href={`/works/${slug}`}>완전바로가기</a>
      </div>
    </Modal>
  );
};

export default WorksModal;
