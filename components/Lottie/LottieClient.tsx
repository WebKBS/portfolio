"use client";
import dynamic from "next/dynamic";

const LottieComp = dynamic(() => import("@/components/Lottie/Lottie"), {
  ssr: false,
});

const LottieClient = () => {
  return <LottieComp />;
};

export default LottieClient;
