import Navi from '../Navigation/Navi';
import SideMenuButton from '../SideMenu/SideMenuButton';
import Sns from '../Sns/Sns';
import ThemeToggle from '../Theme/ThemeToggle';

const Header = () => {
  return (
    <header className="border-b px-5 py-2 h-14 flex items-center sticky top-0 left-0 z-10 backdrop-blur-xl">
      <div className="flex w-full items-center justify-between">
        <SideMenuButton className="md:hidden" />
        <h1 className="font-bold text-xl">PORTFOLIO</h1>
        <Navi className="hidden md:flex md:items-center md:gap-6 mr-8 ml-auto font-semibold" />
        <div className="flex items-center gap-4">
          <Sns className="hidden md:flex md:items-center md:gap-2" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
