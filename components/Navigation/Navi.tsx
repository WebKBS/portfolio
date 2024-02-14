import { navigationData } from './Navi-data';

const Navi = () => {
  return (
    <ul className="hidden md:flex md:items-center md:gap-6">
      {navigationData.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
};

export default Navi;
