"use client";
import { useEffect, useState } from "react";

const SkillProgress = ({
  percentage,
  color,
}: {
  percentage: number;
  color: string;
}) => {
  const [num, setNum] = useState(0);

  const radius = 60;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * num) / 100;

  useEffect(() => {
    setNum(percentage);
  }, [percentage]);

  return (
    <svg width="150" height="150" viewBox="0 0 150 150">
      <circle
        cx="75"
        cy="75"
        r={radius}
        fill="none"
        stroke="#e6e6e6"
        strokeWidth="15"
      />
      <circle
        cx="75"
        cy="75"
        r={radius}
        strokeLinecap="round"
        fill="none"
        stroke={color}
        strokeWidth="10"
        strokeDasharray={dashArray}
        strokeDashoffset={dashOffset}
        transform="rotate(-90 75 75)"
        style={{ transition: "stroke-dashoffset 3s" }}
      />
    </svg>
  );
};

export default SkillProgress;
