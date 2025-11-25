import { PreviewImageType, worksImageType } from '@/types/worksType';
import thumbnailImage from '@/public/images/works/dpectrum/uhc/thumbnail.png';
import desktopImage from '@/public/images/works/dpectrum/uhc/desktop.png';
import bannerImage from '@/public/images/works/dpectrum/uhc/banner.png';

import previewDesktopSlide1 from '@/public/images/works/dpectrum/uhc/slide/desktopSlide1.png';
import previewDesktopSlide2 from '@/public/images/works/dpectrum/uhc/slide/desktopSlide2.png';

export const uhcImages: worksImageType = {
  thumbnail: thumbnailImage,
  desktopImage: desktopImage,
  mobileImage: null,
  bannerImage: bannerImage,
};

export const uhcPreviewImages: PreviewImageType[] = [
  {
    desktopImage: previewDesktopSlide1,
    mobileImage: null,
  },
  {
    desktopImage: previewDesktopSlide2,
    mobileImage: null,
  },
];
