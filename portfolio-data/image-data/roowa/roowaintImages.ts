import thumbnailImage from '@/public/images/works/roowa/roowaint/thumbnail.png';
import desktopImage from '@/public/images/works/roowa/roowaint/desktop.png';
import mobileImage from '@/public/images/works/roowa/roowaint/mobile.png';
import bannerImage from '@/public/images/works/roowa/roowaint/banner.png';

import previewDesktopSlide1 from '@/public/images/works/roowa/roowaint/slide/desktopSlide1.png';
import previewMobileSlide1 from '@/public/images/works/roowa/roowaint/slide/mobileSlide1.png';
import previewDesktopSlide2 from '@/public/images/works/roowa/roowaint/slide/desktopSlide2.png';
import previewMobileSlide2 from '@/public/images/works/roowa/roowaint/slide/mobileSlide2.png';
import previewDesktopSlide3 from '@/public/images/works/roowa/roowaint/slide/desktopSlide3.png';
import previewMobileSlide3 from '@/public/images/works/roowa/roowaint/slide/mobileSlide3.png';
import previewDesktopSlide4 from '@/public/images/works/roowa/roowaint/slide/desktopSlide4.png';
import previewMobileSlide4 from '@/public/images/works/roowa/roowaint/slide/mobileSlide4.png';
import { PreviewImageType, worksImageType } from '@/types/worksType';

export const roowaintImages: worksImageType = {
  thumbnail: thumbnailImage,
  desktopImage: desktopImage,
  mobileImage: mobileImage,
  bannerImage: bannerImage,
};

export const roowaintPreviewImages: PreviewImageType[] = [
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
