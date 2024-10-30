import { cn } from "@/lib/utils";
import { namhaeImages } from "@/data/works/imageData/namhaeImages";
import Image from "next/image";

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
  {
    id: 5,
    title: "Project 5",
    img: namhaeImages.desktopImage,
    description:
      "Project 5 description Project 5 description Project 5 description Project 5 description Project 5 description Project 5 description",
  },
  {
    id: 6,
    title: "Project 6",
    img: namhaeImages.desktopImage,
    description:
      "Project 6 description Project 6 description Project 6 description Project 6 description Project 6 description Project 6 description",
  },
];

const BestSection = () => {
  const positionIndex = (index: number) => {
    switch (index) {
      case 0:
        return "top-[120px]";
      case 1:
        return "top-[150px]";
      case 2:
        return "top-[180px]";
      case 3:
        return "top-[210px]";
      case 4:
        return "top-[240px]";
      case 5:
        return "top-[270px]";
      default:
        return "";
    }
  };

  return (
    <section className="mx-auto w-full max-w-[1920px] px-4 md:px-6">
      <h2 className="mb-6 py-20 text-center text-3xl font-bold uppercase">
        BEST WORKS
      </h2>
      <div>
        <ul className="flex flex-col gap-[160px]">
          {bestWorks.map((work, index) => (
            <li
              key={work.id}
              className={cn(
                "sticky left-0 bg-background",
                positionIndex(index),
              )}
            >
              <div className="relative flex min-h-screen overflow-hidden">
                <div className="w-full md:w-[50%]">
                  <h3 className="text-2xl font-bold">{work.title}</h3>
                  <p className="text-sm">{work.description}</p>
                </div>
                <div className="absolute right-0 top-0 z-[-1] h-[calc(100%-200px)] w-full -skew-x-6 overflow-hidden">
                  <Image
                    src={work.img}
                    alt={work.title}
                    className="absolute right-12 top-0 max-w-3xl object-cover"
                  />
                  <p className="absolute bottom-0 right-0 h-full w-full bg-background/70" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BestSection;
