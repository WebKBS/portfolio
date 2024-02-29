import { throttle } from "lodash";
import { useEffect, useRef } from "react";

const useScrollHandler = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const topBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScrollThrottled = throttle(() => {
      console.log("scrollRef:", scrollRef.current?.clientHeight);
      if (scrollRef.current && topBoxRef.current) {
        if (scrollRef.current.scrollTop > topBoxRef.current.clientHeight / 4) {
          topBoxRef.current.classList.add("opacity-0");
        } else {
          topBoxRef.current.classList.remove("opacity-0");
        }
      }
    }, 120);

    const scrollElement = scrollRef.current;

    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScrollThrottled);

      return () => {
        scrollElement.removeEventListener("scroll", handleScrollThrottled);
      };
    }
  }, []);

  return { scrollRef, topBoxRef };
};

export default useScrollHandler;
