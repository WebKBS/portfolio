'use client';

import { skillList } from '@/portfolio-data/aboutSkillsData';
import { useObserver } from '@/store/observer-store';
import SkillProgressItem from './SkillProgressItem';

const SkillProgressList = () => {
  const { html, css, javascript, typescript, react, next } = useObserver();

  function getPercentage(lang: string) {
    switch (lang) {
      case 'html':
        return html ? skillList[0].percentage : null;
      case 'css':
        return css ? skillList[1].percentage : null;
      case 'javascript':
        return javascript ? skillList[2].percentage : null;
      case 'typescript':
        return typescript ? skillList[3].percentage : null;
      case 'react':
        return react ? skillList[4].percentage : null;
      case 'next':
        return next ? skillList[5].percentage : null;
      default:
        return null;
    }
  }

  return (
    <ul className={`mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-8`}>
      {skillList.map((skill) => (
        <SkillProgressItem
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
