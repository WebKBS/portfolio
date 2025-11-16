import { PreviewImageType, worksImageType } from "@/types/worksType";
import thumbnailImage from "@/public/images/works/depos/thumbnail.png";
import desktopImage from "@/public/images/works/depos/desktop.png";
import mobileImage from "@/public/images/works/depos/mobile.png";
import bannerImage from "@/public/images/works/depos/banner.png";

export const deposImages: worksImageType = {
  thumbnail: thumbnailImage,
  desktopImage: desktopImage,
  mobileImage: mobileImage,
  bannerImage: bannerImage,
};

export const deposPreviewImages: PreviewImageType[] = [
  {
    desktopImage: desktopImage,
    mobileImage: mobileImage,
  },
];
