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
