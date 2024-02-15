'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { sns } from './Sns-data';

const Sns = ({ className }: { className: string }) => {
  const { theme } = useTheme();
  const [icon, setIcon] = useState(sns);

  useEffect(() => {
    if (theme === 'dark') {
      setIcon(
        sns.map((item) => {
          return {
            ...item,
            icon: item.icon,
          };
        })
      );
    } else {
      setIcon(
        sns.map((item) => {
          return {
            ...item,
            icon: item.iconBlack,
          };
        })
      );
    }
  }, [theme]);

  return (
    <ul className={className}>
      {sns.map((item, index) => (
        <li key={index} title={item.title}>
          <Link href={item.link} target="_blank">
            <Image
              src={icon[index].icon}
              alt={item.title}
              width={36}
              height={36}
              className="rounded-md p-1 flex items-center dark:bg-gray-800 bg-gray-100"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Sns;
