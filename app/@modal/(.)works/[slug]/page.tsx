"use client";

import { Button } from "@/components/ui/button";
import { works } from "@/works/worksData";
import { useRouter } from "next/navigation";
import { Modal } from "./modal";

const WorksModal = ({ params: { slug } }: { params: { slug: string } }) => {
  console.log(slug);

  const data = works.find((work) => work.slug === slug);

  const router = useRouter();

  return (
    <Modal>
      <div
        className="h-full w-full overflow-hidden rounded-lg"
        onClick={() => router.back()}
      ></div>
      <div className="absolute left-0 top-0 h-4/5 w-4/5 bg-gray-700">
        asdasd
        <Button onClick={() => router.refresh()}>바로가기</Button>
      </div>
    </Modal>
  );
};

export default WorksModal;
