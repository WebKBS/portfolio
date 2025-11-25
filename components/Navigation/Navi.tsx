'use client';

import { useMenuToggle } from '@/store/commen-store';
import Link from 'next/link';
import { navigationData } from '@/constants/Navi-data';

const Navi = ({ className }: { className: string }) => {
  const { setToggleMenu } = useMenuToggle();

  const clickHandler = () => {
    setToggleMenu(false);
  };

  return (
    <ul className={className}>
      {navigationData.map((item, index) => (
        <li key={index}>
          <Link href={item.href} onClick={clickHandler}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navi;
