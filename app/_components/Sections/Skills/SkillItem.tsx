import Image, { StaticImageData } from "next/image";

const SkillItem = ({
  skill,
}: {
  skill: { src: StaticImageData | string; alt: string };
}) => {
  return (
    <li className="px-8 md:px-12">
      <Image
        src={skill.src}
        alt={skill.alt}
        className="h-9 w-auto md:h-14"
        priority
      />
    </li>
  );
};

export default SkillItem;
