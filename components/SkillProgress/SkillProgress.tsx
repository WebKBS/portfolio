"use client";

import { useEffect, useState } from "react";

interface SkillProgressProps {
  percentage: number | null;
  lang: string;
  color: string;
}

const SkillProgress = ({ percentage, lang, color }: SkillProgressProps) => {
  const [count, setCount] = useState(0);
  const radius = 70;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage!) / 100;

  useEffect(() => {
    if (percentage !== null && percentage !== undefined) {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount >= percentage) {
            clearInterval(interval);
            return percentage;
          }

          const step = (percentage - prevCount) / 10;
          return Math.floor(prevCount + step);
        });
      }, 70);

      return () => clearInterval(interval);
    }
  }, [percentage]);

  return (
    <div className="relative flex h-[160px] w-[160px] items-center justify-center">
      <div className="gap- absolute flex flex-col items-center gap-1">
        <p className="text-center text-sm font-semibold uppercase">{lang}</p>
        <span className="text-2xl font-bold">{count}%</span>
      </div>
      <svg width="160" height="160" viewBox="0 0 160 160">
        <circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke="#e6e6e6"
          strokeWidth="16"
        />
        <circle
          cx="80"
          cy="80"
          r={radius}
          strokeLinecap="round"
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          transform="rotate(-90 80 80)"
          style={{ transition: "all 4s" }}
        />
      </svg>
    </div>
  );
};

export default SkillProgress;
