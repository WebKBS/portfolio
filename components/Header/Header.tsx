import Navi from '../Navigation/Navi';
import Sns from '../Sns/Sns';

const Header = () => {
  return (
    <header className="border-b px-5 py-2 h-14 flex items-center">
      <div className="flex w-full items-center justify-between">
        <Navi />
        <Sns />
      </div>
    </header>
  );
};

export default Header;
