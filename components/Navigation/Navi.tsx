import { navigationData } from './Navi-data';

const Navi = () => {
  return (
    <ul className="flex items-center gap-6">
      {navigationData.map((item, idx) => (
        <li key={idx}>{item.name}</li>
      ))}
    </ul>
  );
};

export default Navi;
