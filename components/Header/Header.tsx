import Link from "next/link";
import Navi from "../Navigation/Navi";
import SideMenuButton from "../SideMenu/SideMenuButton";
import Sns from "../Sns/Sns";
import ThemeToggle from "../Theme/ThemeToggle";

const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-[300] flex h-14 items-center border-b px-5 py-2 backdrop-blur-xl">
      <div className="flex w-full items-center justify-between">
        <SideMenuButton className="md:hidden" />
        <h1 className="text-xl font-bold">
          <Link href="/">PORTFOLIO</Link>
        </h1>
        <Navi className="ml-auto mr-8 hidden font-semibold md:flex md:items-center md:gap-6" />
        <div className="flex items-center gap-4">
          <Sns className="hidden md:flex md:items-center md:gap-2" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
