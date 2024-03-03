import Image from "next/image";

const SkillItem = ({ skill }: { skill: { src: string; alt: string } }) => {
  return (
    <li className="px-8 md:px-12">
      <Image
        src={skill.src}
        width={200}
        height={50}
        alt={skill.alt}
        className="h-9 w-auto md:h-14"
        priority
      />
    </li>
  );
};

export default SkillItem;
