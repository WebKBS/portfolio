import AboutSkillListItem from "./AboutSkillListItem";

interface AboutSkillListProps {
  title: string;
  skills: {
    image: string;
    title: string;
    description: string;
  }[];
}

const AboutSkillList = ({ title, skills }: AboutSkillListProps) => {
  return (
    <div className="mb-12">
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <ul className="xs:grid-cols-2 grid grid-rows-[repeat(auto-fill,minmax(0,1fr))] gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skills.map((skill, index) => (
          <AboutSkillListItem
            key={index}
            image={skill.image}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default AboutSkillList;
