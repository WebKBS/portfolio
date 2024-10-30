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
];

const BestSection = () => {
  const positionIndex = (index: number) => {
    const positions = [
      "top-[100px]",
      "top-[140px]",
      "top-[180px]",
      "top-[220px]",
    ];
    return positions[index] || "";
  };

  return (
    <section className="mx-auto w-full max-w-[1920px] px-4 md:px-6">
      <h2 className="mb-6 py-20 text-center text-4xl font-extrabold uppercase tracking-wider">
        BEST WORKS
      </h2>
      <div className="px-8">
        <ul className="flex flex-col gap-[120px]">
          {bestWorks.map((work, index) => (
            <li
              key={work.id}
              className={cn(
                "sticky left-0 rounded-lg bg-background shadow-lg transition-all duration-500 hover:scale-105",
                positionIndex(index),
              )}
            >
              <div className="relative flex min-h-[80vh] overflow-hidden rounded-lg bg-white shadow-md">
                <div className="relative z-[2] flex w-full flex-col space-y-4 p-8 md:w-[50%]">
                  <h3 className="text-3xl font-semibold">{work.title}</h3>
                  <p className="">{work.description}</p>
                </div>
                <div className="absolute right-0 top-0 h-full w-full overflow-hidden bg-gray-800/50 transition duration-300 hover:bg-gray-800/30">
                  <Image
                    src={work.img}
                    alt={work.title}
                    className="absolute right-12 top-0 max-w-3xl -skew-x-6 object-cover opacity-90 transition-all duration-300 hover:scale-110 hover:opacity-100"
                  />
                  <p className="absolute bottom-0 right-0 h-full w-full bg-gray-800/50" />
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
