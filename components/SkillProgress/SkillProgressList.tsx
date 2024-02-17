import SkillProgress from "./SkillProgress";

const SkillList = [
  { percentage: 92, color: "#E34F26", lang: "html" },
  { percentage: 89, color: "#1572B6", lang: "css" },
  { percentage: 82, color: "#F7DF1E", lang: "javascript" },
  { percentage: 76, color: "#3178C6", lang: "typescript" },
  { percentage: 84, color: "#61DAFB", lang: "react" },
  { percentage: 77, color: "#000000", lang: "next.js" },
];

const SkillProgressList = () => {
  return (
    <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-8">
      {SkillList.map((skill, index) => (
        <SkillProgress key={index} {...skill} />
      ))}
    </div>
  );
};

export default SkillProgressList;
