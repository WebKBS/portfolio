"use client";

import { useMenuToggle } from "@/store/commen-store";
import Navi from "../Navigation/Navi";
import Sns from "../Sns/Sns";
import SideMenuButton from "./SideMenuButton";

const SideMenu = () => {
  const { menuOpen, setToggleMenu } = useMenuToggle();

  const sideMenuActive = menuOpen ? "translate-x-0" : "-translate-x-full";

  return (
    <aside
      className={`fixed left-0 top-0 z-50 ${sideMenuActive} flex h-full w-full transform transition-transform duration-300 ease-in-out`}
    >
      <div
        className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-30 transition-opacity duration-300 ease-in-out"
        onClick={setToggleMenu}
      />
      <div className="absolute left-0 top-0 h-full w-full max-w-80 overflow-y-auto bg-gray-100 px-8 py-20 dark:bg-gray-800">
        <SideMenuButton className="absolute left-4 top-4" />
        <Navi className="flex w-full flex-col gap-4 text-xl font-semibold" />
        <div>
          <Sns className="mt-8 flex justify-center gap-4" />
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
