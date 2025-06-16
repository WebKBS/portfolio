"use client";

import dynamic from "next/dynamic";

const NotFoundLottie = dynamic(() => import("./NotFoundLottie"), {
  ssr: false,
});

const NotFoundLottieClient = () => {
  return <NotFoundLottie />;
};

export default NotFoundLottieClient;
