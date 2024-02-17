"use client";
import { useEffect, useState } from "react";

const SkillProgress = ({
  percentage,
  lang,
  color,
}: {
  percentage: number;
  lang: string;
  color: string;
}) => {
  const [num, setNum] = useState(0);

  const radius = 70;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * num) / 100;

  useEffect(() => {
    setNum(percentage);
  }, [percentage]);

  return (
    <div className="relative flex h-[160px] w-[160px] items-center justify-center">
      <div className="gap- absolute flex flex-col items-center gap-1">
        <p className="text-center text-sm font-semibold uppercase">{lang}</p>
        <span className="text-2xl font-bold">{num}%</span>
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
          style={{ transition: "all 3s" }}
        />
      </svg>
    </div>
  );
};

export default SkillProgress;
