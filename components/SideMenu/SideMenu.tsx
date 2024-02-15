'use client';

import { useMenuToggle } from '@/store/commen-store';
import Navi from '../Navigation/Navi';
import Sns from '../Sns/Sns';
import SideMenuButton from './SideMenuButton';

const SideMenu = () => {
  const { menuOpen, toggleMenu } = useMenuToggle();

  const sideMenuActive = menuOpen ? 'translate-x-0' : '-translate-x-full';

  return (
    <aside
      className={`fixed top-0 left-0 z-50 ${sideMenuActive} transition-transform duration-300 ease-in-out transform flex w-full h-full`}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 transition-opacity duration-300 ease-in-out"
        onClick={toggleMenu}
      />
      <div className="absolute top-0 left-0 max-w-80 dark:bg-gray-800 w-full h-full bg-gray-100 py-20 px-8 overflow-y-auto">
        <SideMenuButton className="absolute top-4 left-4" />
        <Navi className="flex flex-col gap-4 text-xl w-full font-semibold" />
        <div>
          <Sns className="flex gap-4 justify-center mt-8" />
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
