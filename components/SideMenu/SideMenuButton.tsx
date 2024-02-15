'use client';

import { useMenuToggle } from '@/store/commen-store';
import { IoClose, IoMenu } from 'react-icons/io5';
import { Button } from '../ui/button';

const SideMenuButton = ({ className }: { className: string }) => {
  const { menuOpen, toggleMenu } = useMenuToggle();

  return (
    <Button
      size="sm"
      variant="outline"
      className={className}
      onClick={toggleMenu}
    >
      {menuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
    </Button>
  );
};

export default SideMenuButton;
