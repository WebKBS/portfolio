"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

const LottieComp = () => {
  const [animationData, setAnimationData] = useState<any>();

  const styles = "mx-auto w-64 sm:mx-0 sm:ml-auto sm:mr-0 md:w-96";

  useEffect(() => {
    import("../../lottie/animation.json")
      .then((res) => {
        setAnimationData(res.default);
      })
      .catch((err) => {
        console.error(err);
        console.log("로티 데이터 가져오기 실패");
      });
  }, []);

  if (!animationData)
    return <Skeleton className={`${styles} h-64 rounded-full md:h-96`} />;

  return (
    <>
      <Lottie className={styles} animationData={animationData} loop={true} />
    </>
  );
};

export default LottieComp;
