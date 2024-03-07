"use client";
import Image from "next/image";

interface AboutSkillListItemProps {
  image: string;
  title: string;
  description: string;
}

const AboutSkillListItem = ({
  image,
  title,
  description,
}: AboutSkillListItemProps) => {
  return (
    <li className="group relative min-h-40 max-w-sm overflow-hidden rounded-md border-2 shadow-md  dark:bg-gray-600">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <Image
          src={image}
          width={60}
          height={60}
          alt={title}
          className="h-14 w-auto"
        />
        <div className="text-sm font-semibold dark:text-white">{title}</div>
      </div>
      <div className="absolute left-0 top-0 z-10 h-full w-full translate-x-full overflow-y-auto bg-background p-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <p className="text-sm">{description}</p>
      </div>
    </li>
  );
};

export default AboutSkillListItem;
