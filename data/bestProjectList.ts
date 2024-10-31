import { namhaeImages } from "@/data/works/imageData/namhaeImages";
import { StaticImageData } from "next/image";

export interface BestProject {
  id: number;
  title: string;
  image: StaticImageData;
  description: string;
}

export const bestProjectList: BestProject[] = [
  {
    id: 0,
    title: "Project 1",
    image: namhaeImages.desktopImage,
    description: "Project 1 description",
  },
  {
    id: 1,
    title: "Project 2",
    image: namhaeImages.desktopImage,
    description:
      "Project 2 description Project 2 description Project 2 description Project 2 description Project 2 description Project 2 description",
  },
  {
    id: 2,
    title: "Project 3",
    image: namhaeImages.desktopImage,
    description:
      "Project 3 description Project 3 description Project 3 description Project 3 description Project 3 description Project 3 description",
  },
  {
    id: 3,
    title: "Project 4",
    image: namhaeImages.desktopImage,
    description:
      "Project 4 description Project 4 description Project 4 description Project 4 description Project 4 description Project 4 description",
  },
] as const;
