import { worksImageType } from "@/types/worksType";
import thumbnailImage from "@/public/images/works/timelog/thumbnail.png";
import desktopImage from "@/public/images/works/timelog/desktop.png";
import mobileImage from "@/public/images/works/timelog/mobile.png";
import bannerImage from "@/public/images/works/timelog/banner.png";

import previewDesktopSlide1 from "@/public/images/works/timelog/slide/desktopSlide1.png";
import previewMobileSlide1 from "@/public/images/works/timelog/slide/mobileSlide1.png";

export const timelogImages: worksImageType = {
  thumbnail: thumbnailImage,
  desktopImage: desktopImage,
  mobileImage: mobileImage,
  bannerImage: bannerImage,
};

export const timelogPreviewImages = [
  {
    desktopImage: desktopImage,
    mobileImage: mobileImage,
  },
  {
    desktopImage: previewDesktopSlide1,
    mobileImage: previewMobileSlide1,
  },
];
