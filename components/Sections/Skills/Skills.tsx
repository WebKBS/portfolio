import Image from "next/image";
import styles from "./Skills.module.css";
import { skillImages } from "./SkillsData";

const Skills = () => {
  return (
    <div className="flex h-[80px] w-[10000px] items-center md:h-[120px]">
      <ul className={`flex items-center ${styles.slide}`}>
        {skillImages.map((skill, index) => (
          <li key={index} className="px-8 md:px-12">
            <Image
              src={skill.src}
              width={200}
              height={50}
              alt={skill.alt}
              className="h-9 w-auto md:h-14"
            />
          </li>
        ))}
      </ul>
      <ul className={`flex items-center ${styles.slide}`}>
        {skillImages.map((skill, index) => (
          <li key={index} className="px-8 md:px-12">
            <Image
              src={skill.src}
              width={200}
              height={50}
              alt={skill.alt}
              className="h-9 w-auto md:h-14"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;