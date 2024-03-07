"use client";
import Image from "next/image";

interface AboutSkillListItemProps {
  image: string;
  title: string;
  description: string[];
}

const AboutSkillListItem = ({
  image,
  title,
  description,
}: AboutSkillListItemProps) => {
  return (
    <li className="group relative">
      <div className="inline-flex cursor-pointer items-center gap-2 rounded-md border-2 bg-background p-2 shadow-md">
        <div className="relative h-12 w-12 rounded-full bg-gray-200 p-1">
          <Image
            src={image}
            // src={"/skills/html.png"}
            width={40}
            height={40}
            alt={title}
            className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full object-cover"
          />
        </div>
        <div className="text-sm font-semibold dark:text-white">{title}</div>
      </div>
      <div className="invisible absolute left-0 top-16 z-10 w-full min-w-56 max-w-sm rounded-md border-2 bg-background p-2 opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100">
        <ul className="text-sm">
          {description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
          {/* <li>웹표준에 맞게 시멘틱 태그를 사용할 수 있어요.</li>
          <li>폼을 잘 만들수 있어요.</li>
          <li>테이블을 잘 만들수 있어요.</li> */}
        </ul>
      </div>
    </li>
  );
};

export default AboutSkillListItem;
