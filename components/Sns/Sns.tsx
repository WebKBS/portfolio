'use client';
import Image from 'next/image';
import Link from 'next/link';
import { sns } from './Sns-data';

const Sns = () => {
  return (
    <ul className="flex items-center gap-2">
      {sns.map((item, index) => (
        <li key={index} title={item.title}>
          <Link href={item.link}>
            <Image
              priority
              src={item.icon}
              alt={item.title}
              width={36}
              height={36}
              className="border rounded-md p-1 bg-gray-800 flex items-center"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Sns;
