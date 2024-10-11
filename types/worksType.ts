import { StaticImageData } from "next/image";

export interface worksImageType {
  thumbnail: StaticImageData | string;
  desktopImage: StaticImageData | string;
  mobileImage: StaticImageData | string;
  bannerImage: StaticImageData | string;
}

export interface PreviewImageType {
  desktopImage: StaticImageData | string;
  mobileImage: StaticImageData | string;
}

export interface IWorks {
  published: boolean;
  id: number;
  title: string;
  description: string;
  thumbnail: StaticImageData | string;
  image: StaticImageData | string;
  mobileImage: StaticImageData | string;
  bannerImage: StaticImageData | string;
  url: string;
  date: string;
  tags: string[];
  slug: string;
  body: string;
  contribution: string;
  detailContent: {
    previewImages: {
      desktopImage: StaticImageData | string;
      mobileImage: StaticImageData | string;
    }[];
    description: string;
    insight: string;
    stacks: string[];
    functions: {
      function: string;
      description: string;
    }[];
  };
}
