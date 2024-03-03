import { Button, buttonVariants } from "@/components/ui/button";
import { useRouterModalToggle } from "@/store/modal-store";
import { useRouter } from "next/navigation";

const ButtonAction = ({ slug }: { slug: string }) => {
  const router = useRouter();
  const { setRouterModalState } = useRouterModalToggle();

  const closeHandler = () => {
    setRouterModalState(false);
    router.back();
  };

  return (
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
  );
};

export default ButtonAction;
