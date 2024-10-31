import BestItem from "@/app/_components/Sections/BestWorks/BestItem";
import { namhaeImages } from "@/data/works/imageData/namhaeImages";

const bestWorks = [
  {
    id: 1,
    title: "Project 1",
    img: namhaeImages.desktopImage,
    description: "Project 1 description",
  },
  {
    id: 2,
    title: "Project 2",
    img: namhaeImages.desktopImage,
    description:
      "Project 2 description Project 2 description Project 2 description Project 2 description Project 2 description Project 2 description",
  },
  {
    id: 3,
    title: "Project 3",
    img: namhaeImages.desktopImage,
    description:
      "Project 3 description Project 3 description Project 3 description Project 3 description Project 3 description Project 3 description",
  },
  {
    id: 4,
    title: "Project 4",
    img: namhaeImages.desktopImage,
    description:
      "Project 4 description Project 4 description Project 4 description Project 4 description Project 4 description Project 4 description",
  },
];
const BestList = () => {
  return (
    <ul className="flex flex-col gap-[120px]">
      {bestWorks.map((work, index) => (
        <BestItem work={work} key={work.id} index={index} />
      ))}
    </ul>
  );
};

export default BestList;
