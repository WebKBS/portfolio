import { skillImages } from '@/portfolio-data/aboutSkillsData';
import SkillItem from './SkillItem';
import styles from './SkillsList.module.css';

const Skills = () => {
  return (
    <div className='flex h-[80px] w-[10000px] items-center md:h-[120px]'>
      <ul className={`flex items-center ${styles.slide}`}>
        {skillImages.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </ul>
      <ul className={`flex items-center ${styles.slide}`}>
        {skillImages.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </ul>
    </div>
  );
};

export default Skills;
