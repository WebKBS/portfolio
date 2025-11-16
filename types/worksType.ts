import { StaticImageData } from 'next/image';

export interface worksImageType {
  thumbnail: StaticImageData | string;
  desktopImage: StaticImageData | string | null;
  mobileImage: StaticImageData | string | null;
  bannerImage: StaticImageData | string;
}

export interface PreviewImageType {
  desktopImage: StaticImageData | string | null;
  mobileImage: StaticImageData | string | null;
}

export interface IWorks {
  published: boolean;
  id: string | number;
  title: string;
  description: string;
  thumbnail: StaticImageData | string;
  desktopImage: StaticImageData | string | null;
  mobileImage: StaticImageData | string | null;
  bannerImage: StaticImageData | string;
  url: string | null;
  date: string;
  tags: string[];
  slug: string;
  body: string;
  contribution: string;
  detailContent: {
    previewImages: PreviewImageType[];
    description: string;
    insight: string;
    stacks: string[];
    functions: {
      function: string;
      description: string;
    }[];
  };
}
