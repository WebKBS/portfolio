import { PreviewImageType, worksImageType } from "@/types/worksType";
import thumbnailImage from "@/public/images/works/k2gbs/thumbnail.png";
import desktopImage from "@/public/images/works/k2gbs/desktop.png";
import mobileImage from "@/public/images/works/k2gbs/mobile.png";
import bannerImage from "@/public/images/works/k2gbs/banner.png";
import previewDesktopSlide1 from "@/public/images/works/k2gbs/slide/desktopSlide1.png";
import previewMobileSlide1 from "@/public/images/works/k2gbs/slide/mobileSlide1.png";
import previewDesktopSlide2 from "@/public/images/works/k2gbs/slide/desktopSlide2.png";
import previewMobileSlide2 from "@/public/images/works/k2gbs/slide/mobileSlide2.png";
import previewDesktopSlide3 from "@/public/images/works/k2gbs/slide/desktopSlide3.png";
import previewMobileSlide3 from "@/public/images/works/k2gbs/slide/mobileSlide3.png";
import previewDesktopSlide4 from "@/public/images/works/k2gbs/slide/desktopSlide4.png";
import previewMobileSlide4 from "@/public/images/works/k2gbs/slide/mobileSlide4.png";
import previewDesktopSlide5 from "@/public/images/works/k2gbs/slide/desktopSlide5.png";
import previewMobileSlide5 from "@/public/images/works/k2gbs/slide/mobileSlide5.png";

export const k2gbsImages: worksImageType = {
  thumbnail: thumbnailImage,
  desktopImage: desktopImage,
  mobileImage: mobileImage,
  bannerImage: bannerImage,
};

export const k2gbsPreviewImages: PreviewImageType[] = [
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
  {
    desktopImage: previewDesktopSlide4,
    mobileImage: previewMobileSlide4,
  },
  {
    desktopImage: previewDesktopSlide5,
    mobileImage: previewMobileSlide5,
  },
];
