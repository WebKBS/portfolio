import { useEffect, useRef, useState } from "react";

const useStickyObserver = (threshold: number = 0.4) => {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.findIndex((el) => el === entry.target);
          if (index !== -1) {
            if (entry.isIntersecting) {
              setVisibleIndex(index);
            } else if (visibleIndex === index) {
              setVisibleIndex(null);
            }
          }
        });
      },
      { threshold },
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [visibleIndex, threshold]);

  return { itemRefs, visibleIndex };
};

export default useStickyObserver;
