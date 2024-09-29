"use client";
import sendLottie from "@/lib/lottie/send.json";
import Lottie from "lottie-react";

const SendLottie = () => {
  return (
    <Lottie
      className="w-full max-w-xs"
      animationData={sendLottie}
      loop={true}
    />
  );
};

export default SendLottie;
