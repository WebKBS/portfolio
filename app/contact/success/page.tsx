import { buttonVariants } from "@/components/ui/button";

const SuccessPage = () => {
  return (
    <div className="flex max-w-96 flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold">
        문의를 성공적으로 전송하였습니다.
      </h2>
      <a href="/" className={buttonVariants({ variant: "default" })}>
        홈으로 되돌아가기
      </a>
    </div>
  );
};

export default SuccessPage;
