import { PreviewImageType, worksImageType } from '@/types/worksType';
import thumbnailImage from '@/public/images/works/personal-project/depos/thumbnail.png';
import desktopImage from '@/public/images/works/personal-project/depos/desktop.png';
import mobileImage from '@/public/images/works/personal-project/depos/mobile.png';
import bannerImage from '@/public/images/works/personal-project/depos/banner.png';

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
