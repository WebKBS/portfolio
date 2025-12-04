import { worksImageType } from '@/types/worksType';
import thumbnailImage from '@/public/images/works/personal-project/timelog/thumbnail.png';
import desktopImage from '@/public/images/works/personal-project/timelog/desktop.png';
import mobileImage from '@/public/images/works/personal-project/timelog/mobile.png';
import bannerImage from '@/public/images/works/personal-project/timelog/banner.png';

import previewDesktopSlide1 from '@/public/images/works/personal-project/timelog/slide/desktopSlide1.png';
import previewMobileSlide1 from '@/public/images/works/personal-project/timelog/slide/mobileSlide1.png';

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
