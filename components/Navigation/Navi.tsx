"use client";

import { useMenuToggle } from "@/store/commen-store";
import Link from "next/link";
import { navigationData } from "./Navi-data";

const Navi = ({ className }: { className: string }) => {
  const { menuOpen, setToggleMenu } = useMenuToggle();

  const clickHandler = () => {
    setToggleMenu(!menuOpen);
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
