interface SkillSvgProps {
  radius: number;
  color: string;
  dashArray: number;
  dashOffset: number;
}

const SkillSvg = ({ radius, color, dashArray, dashOffset }: SkillSvgProps) => {
  return (
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
  );
};

export default SkillSvg;
