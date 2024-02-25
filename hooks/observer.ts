import { useObserver } from "@/store/observer-store";
import { useEffect, useRef } from "react";

const useObserverAction = (targetName: string) => {
  const targetRef = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            useObserver.setState({ [targetName]: true });
          }, 500);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, [targetName]);

  return targetRef;
};

export default useObserverAction;
