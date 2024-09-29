"use client";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

const LottieComp = () => {
  const [animationData, setAnimationData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const styles = "mx-auto w-64 sm:mx-0 sm:ml-auto sm:mr-0 md:w-96";

  useEffect(() => {
    const fetchAnimationData = async () => {
      try {
        // 로티 데이터 가져옴
        const cachedAnimationData = sessionStorage.getItem("animationData");

        // 로티 데이터가 캐시에 있으면 가져옴
        if (cachedAnimationData) {
          setAnimationData(JSON.parse(cachedAnimationData));
          setIsLoading(false);
        } else {
          // 캐시에 없으면 가져와서 캐시에 저장
          const response = await import("@/lib/lottie/animation.json");
          const animationData = response.default;
          setAnimationData(animationData);
          sessionStorage.setItem(
            "animationData",
            JSON.stringify(animationData),
          );
          setIsLoading(false);
        }
      } catch (error) {
        console.error("로티 데이터 가져오기 실패:", error);
      }
    };

    fetchAnimationData();
  }, []);

  if (isLoading)
    return <Skeleton className={`${styles} h-64 rounded-full md:h-96`} />;

  return (
    <>
      <Lottie className={styles} animationData={animationData} loop={true} />
    </>
  );
};

export default LottieComp;
