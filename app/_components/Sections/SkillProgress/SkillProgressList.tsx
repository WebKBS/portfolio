"use client";

import { useObserver } from "@/store/observer-store";
import SkillProgress from "./SkillProgress";

const SkillList = [
  { percentage: 92, color: "#E34F26", lang: "html" },
  { percentage: 89, color: "#1572B6", lang: "css" },
  { percentage: 82, color: "#F7DF1E", lang: "javascript" },
  { percentage: 76, color: "#3178C6", lang: "typescript" },
  { percentage: 84, color: "#61DAFB", lang: "react" },
  { percentage: 77, color: "#000000", lang: "next" },
];

const SkillProgressList = () => {
  const { html, css, javascript, typescript, react, next } = useObserver();

  function getPercentage(lang: string) {
    switch (lang) {
      case "html":
        return html ? SkillList[0].percentage : null;
      case "css":
        return css ? SkillList[1].percentage : null;
      case "javascript":
        return javascript ? SkillList[2].percentage : null;
      case "typescript":
        return typescript ? SkillList[3].percentage : null;
      case "react":
        return react ? SkillList[4].percentage : null;
      case "next":
        return next ? SkillList[5].percentage : null;
      default:
        return null;
    }
  }

  return (
    <ul
      className={`mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-8`}
    >
      {SkillList.map((skill) => (
        <SkillProgress
          key={skill.lang}
          color={skill.color}
          lang={skill.lang}
          percentage={getPercentage(skill.lang)}
        />
      ))}
    </ul>
  );
};

export default SkillProgressList;
