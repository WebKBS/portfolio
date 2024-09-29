"use client";

import Lottie from "lottie-react";
import NotFoundLottieJson from "@/lib/lottie/not-found.json";
import { buttonVariants } from "../ui/button";

export default function NotFoundLottie() {
  return (
    <div className="flex max-w-96 flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold">페이지를 찾을 수 없습니다. 🥲</h2>
      <Lottie animationData={NotFoundLottieJson} loop={true}></Lottie>
      <a href="/" className={buttonVariants({ variant: "default" })}>
        홈으로 되돌아가기
      </a>
    </div>
  );
}
