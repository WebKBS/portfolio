import { Badge } from '@/components/ui/badge';
import { SkillsBackground } from '@/portfolio-data/aboutSkillsData';

const StackItem = ({ stack }: { stack: string }) => {
  return (
    <li>
      <Badge
        style={{
          background: SkillsBackground(stack)[0],
          color: SkillsBackground(stack)[1],
        }}
        className='border-white'
      >
        {stack}
      </Badge>
    </li>
  );
};

export default StackItem;
