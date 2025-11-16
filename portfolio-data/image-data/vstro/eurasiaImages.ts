import { PreviewImageType, worksImageType } from "@/types/worksType";
import thumbnailImage from "@/public/images/works/eurasia/thumbnail.png";
import desktopImage from "@/public/images/works/eurasia/desktop.png";
import mobileImage from "@/public/images/works/eurasia/mobile.png";
import bannerImage from "@/public/images/works/eurasia/banner.png";
import previewDesktopSlide1 from "@/public/images/works/eurasia/slide/desktopSlide1.png";
import previewMobileSlide1 from "@/public/images/works/eurasia/slide/mobileSlide1.png";
import previewDesktopSlide2 from "@/public/images/works/eurasia/slide/desktopSlide2.png";
import previewMobileSlide2 from "@/public/images/works/eurasia/slide/mobileSlide2.png";
import previewDesktopSlide3 from "@/public/images/works/eurasia/slide/desktopSlide3.png";
import previewMobileSlide3 from "@/public/images/works/eurasia/slide/mobileSlide3.png";
import previewDesktopSlide4 from "@/public/images/works/eurasia/slide/desktopSlide4.png";
import previewMobileSlide4 from "@/public/images/works/eurasia/slide/mobileSlide4.png";

export const eurasiaImages: worksImageType = {
  thumbnail: thumbnailImage,
  desktopImage: desktopImage,
  mobileImage: mobileImage,
  bannerImage: bannerImage,
};

export const eurasiaPreviewImages: PreviewImageType[] = [
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
];
