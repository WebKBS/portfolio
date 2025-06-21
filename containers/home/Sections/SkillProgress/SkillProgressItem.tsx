"use client";

import useObserverAction from "@/hooks/useObserverAction";
import { useEffect, useState } from "react";
import SkillSvg from "./SkillSvg";

interface SkillProgressItemProps {
  percentage: number | null;
  lang: string;
  color: string;
}

const SkillProgressItem = ({
  percentage,
  lang,
  color,
}: SkillProgressItemProps) => {
  const ref = useObserverAction(lang);
  const [count, setCount] = useState(0);
  const radius = 70;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage!) / 100;

  useEffect(() => {
    if (percentage !== null && percentage !== undefined) {
      const step = Math.floor(percentage / 20);
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount + step >= percentage) {
            clearInterval(interval);
            return Math.floor(percentage);
          }
          return Math.floor(prevCount + step);
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [percentage]);

  return (
    <li
      ref={ref}
      className="relative flex h-[160px] w-[160px] items-center justify-center"
    >
      <div className="gap- absolute flex flex-col items-center gap-1">
        <p className="text-center text-sm font-semibold uppercase">{lang}</p>
        <span className="text-2xl font-bold">{count}%</span>
      </div>
      <SkillSvg
        radius={radius}
        color={color}
        dashArray={dashArray}
        dashOffset={dashOffset}
      />
    </li>
  );
};

export default SkillProgressItem;
