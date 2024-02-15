import Link from 'next/link';
import { navigationData } from './Navi-data';

const Navi = ({ className }: { className: string }) => {
  return (
    <ul className={className}>
      {navigationData.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navi;
