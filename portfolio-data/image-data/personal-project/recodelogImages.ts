import { PreviewImageType, worksImageType } from '@/types/worksType';
import thumbnailImage from '@/public/images/works/personal-project/recodelog/thumbnail.png';
import desktopImage from '@/public/images/works/personal-project/recodelog/desktop.png';
import mobileImage from '@/public/images/works/personal-project/recodelog/mobile.png';
import bannerImage from '@/public/images/works/personal-project/recodelog/banner.png';

import previewDesktopSlide1 from '@/public/images/works/personal-project/recodelog/slide/desktopSlide1.png';
import previewMobileSlide1 from '@/public/images/works/personal-project/recodelog/slide/mobileSlide1.png';
import previewDesktopSlide2 from '@/public/images/works/personal-project/recodelog/slide/desktopSlide2.png';
import previewMobileSlide2 from '@/public/images/works/personal-project/recodelog/slide/mobileSlide2.png';
import previewDesktopSlide3 from '@/public/images/works/personal-project/recodelog/slide/desktopSlide3.png';
import previewMobileSlide3 from '@/public/images/works/personal-project/recodelog/slide/mobileSlide3.png';

export const recodelogImages: worksImageType = {
  thumbnail: thumbnailImage,
  desktopImage: desktopImage,
  mobileImage: mobileImage,
  bannerImage: bannerImage,
};

export const recodelogPreviewImages: PreviewImageType[] = [
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
