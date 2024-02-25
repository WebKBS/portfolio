import SendLottie from "@/components/Lottie/SendLottie";
import { buttonVariants } from "@/components/ui/button";

export const metadata = {
  title: "전송 완료",
};

const SuccessPage = () => {
  return (
    <main className="mx-auto flex h-full max-w-sm flex-1 flex-col items-center justify-center gap-6 px-6">
      <h2 className="text-xl font-semibold">성공적으로 전송하였습니다.</h2>
      <SendLottie />
      <a href="/" className={buttonVariants({ variant: "default" })}>
        홈으로 되돌아가기
      </a>
    </main>
  );
};

export default SuccessPage;
