"use client";
import dynamic from "next/dynamic";

const SendLottie = dynamic(() => import("@/components/Lottie/SendLottie"), {
  ssr: false,
});
const SendLottieClient = () => {
  return <SendLottie />;
};

export default SendLottieClient;
