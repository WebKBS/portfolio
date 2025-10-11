"use client";
import Image from "next/image";
import { SkillCategory, SkillItem } from "@/data/aboutSkillsData";

interface CategorizedSkillsProps {
  categories: SkillCategory[];
}

const getLevelColor = (level?: string) => {
  switch (level) {
    case "expert":
      return "bg-emerald-500";
    case "intermediate":
      return "bg-blue-500";
    case "beginner":
      return "bg-amber-500";
    default:
      return "bg-gray-500";
  }
};

const getLevelText = (level?: string) => {
  switch (level) {
    case "expert":
      return "숙련";
    case "intermediate":
      return "중급";
    case "beginner":
      return "입문";
    default:
      return "";
  }
};

const SkillCard = ({ skill }: { skill: SkillItem }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-600">
      {/* Level badge in top-right corner */}
      {skill.level && (
        <span
          className={`absolute right-2 top-2 rounded-full px-2 py-0.5 text-xs font-medium text-white ${getLevelColor(skill.level)}`}
        >
          {getLevelText(skill.level)}
        </span>
      )}

      <div className="flex flex-col items-center gap-3">
        <div className="relative h-16 w-16 transition-transform duration-300 group-hover:scale-110">
          <Image
            src={skill.image}
            alt={skill.title}
            fill
            className="object-contain"
          />
        </div>
        <div className="text-center">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            {skill.title}
          </h3>
        </div>
      </div>

      {/* Hover overlay with description */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600/95 to-purple-600/95 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-center text-xs leading-relaxed text-white">
          {skill.description}
        </p>
      </div>
    </div>
  );
};

const CategorizedSkills = ({ categories }: CategorizedSkillsProps) => {
  return (
    <div className="space-y-12">
      {categories.map((category, index) => (
        <div key={index} className="animate-fadeIn">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {category.category}
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-500"></div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {category.skills.map((skill, skillIndex) => (
              <SkillCard key={skillIndex} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorizedSkills;
