'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { sns } from './Sns-data';

const Sns = () => {
  const { theme } = useTheme();

  return (
    <ul className="flex items-center gap-2">
      {sns.map((item, index) => (
        <li key={index} title={item.title}>
          <Link href={item.link}>
            <Image
              priority
              src={theme === 'dark' ? item.icon : item.iconBlack}
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
