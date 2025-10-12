import { PreviewImageType, worksImageType } from "@/types/worksType";
import thumbnailImage from "@/public/images/works/dpangz/thumbnail.png";
import desktopImage from "@/public/images/works/dpangz/desktop.png";
import mobileImage from "@/public/images/works/dpangz/mobile.png";
import bannerImage from "@/public/images/works/dpangz/banner.png";
import previewDesktopSlide1 from "@/public/images/works/dpangz/slide/desktopSlide1.png";
import previewMobileSlide1 from "@/public/images/works/dpangz/slide/mobileSlide1.png";
import previewDesktopSlide2 from "@/public/images/works/dpangz/slide/desktopSlide2.png";
import previewMobileSlide2 from "@/public/images/works/dpangz/slide/mobileSlide2.png";
import previewDesktopSlide3 from "@/public/images/works/dpangz/slide/desktopSlide3.png";
import previewMobileSlide3 from "@/public/images/works/dpangz/slide/mobileSlide3.png";

export const dpangzImages: worksImageType = {
  thumbnail: thumbnailImage,
  desktopImage: desktopImage,
  mobileImage: mobileImage,
  bannerImage: bannerImage,
};

export const dpangzPreviewImages: PreviewImageType[] = [
  {
    desktopImage: desktopImage,
    mobileImage: mobileImage,
  },
  {
    desktopImage: previewDesktopSlide1,
    mobileImage: previewMobileSlide1,
  },
  {
    desktopImage: previewDesktopSlide2,
    mobileImage: previewMobileSlide2,
  },
  {
    desktopImage: previewDesktopSlide3,
    mobileImage: previewMobileSlide3,
  },
];
