import Image from "next/image";
import styles from "./Skills.module.css";

const skillImages = [
  {
    src: "/skills/js.png",
    alt: "JavaScript",
  },
  {
    src: "/skills/ts.png",
    alt: "TypeScript",
  },
  {
    src: "/skills/react.png",
    alt: "React",
  },
  {
    src: "/skills/next-js.png",
    alt: "Next.js",
  },
  {
    src: "/skills/tailwindcss.png",
    alt: "Tailwind CSS",
  },
  {
    src: "/skills/sass.png",
    alt: "Sass",
  },
  {
    src: "/skills/git.png",
    alt: "Git",
  },
  {
    src: "/skills/aspnet-core.png",
    alt: "ASP.NET Core",
  },
  {
    src: "/skills/aws.png",
    alt: "AWS",
  },
  {
    src: "/skills/css.png",
    alt: "CSS",
  },
  {
    src: "/skills/html.png",
    alt: "HTML",
  },
];

const Skills = () => {
  return (
    <div className="flex h-[120px] w-[5000px] items-center ">
      <ul className={`flex items-center ${styles.slide}`}>
        {skillImages.map((skill, index) => (
          <li key={index} className="px-12">
            <Image
              src={skill.src}
              width={200}
              height={50}
              alt={skill.alt}
              className="h-14 w-auto"
            />
          </li>
        ))}
      </ul>
      <ul className={`flex items-center ${styles.slide}`}>
        {skillImages.map((skill, index) => (
          <li key={index} className="px-12">
            <Image
              src={skill.src}
              width={200}
              height={50}
              alt={skill.alt}
              className="h-14 w-auto"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
