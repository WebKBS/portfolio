import { Modal } from "./modal";
import WorksContainer from "@/app/@modal/(.)works/[slug]/_components/WorksContainer";

interface WorksModalProps {
  params: Promise<{ slug: string }>;
}

const WorksModal = async ({ params }: WorksModalProps) => {
  const { slug } = await params;
  return (
    <Modal>
      <WorksContainer slug={slug} />
    </Modal>
  );
};

export default WorksModal;
