import { StaticImageData } from 'next/image';

export interface worksImageType {
  thumbnail: StaticImageData | string;
  desktopImage: StaticImageData | string | null;
  mobileImage: StaticImageData | string | null;
  bannerImage: StaticImageData | string;
}

export interface PreviewImageType {
  desktopImage: StaticImageData | string | null;
  mobileImage: StaticImageData | string | null;
}

export interface IWorks {
  /** 게시 여부 */
  published: boolean;
  /** 고유 아이디 */
  id: string | number;
  /** 프로젝트명 */
  title: string;
  /** 간단한 설명 */
  description: string;
  /** 썸네일 이미지 */
  thumbnail: StaticImageData | string;
  /** 데스크탑 이미지 */
  desktopImage: StaticImageData | string | null;
  /** 모바일 이미지 */
  mobileImage: StaticImageData | string | null;
  /** 배너 이미지 */
  bannerImage: StaticImageData | string;
  /** 프로젝트 URL */
  url: string | null;
  /** 작업 기간 */
  date: string;
  /** 사용 기술 스택 */
  tags: string[];
  /** URL 슬러그 */
  slug: string;
  /** 상세 내용 본문 */
  body: string;
  /** 기여도 및 역할 */
  contribution: string;
  /** 상세 내용 */
  detailContent: {
    /** 미리보기 이미지들 */
    previewImages: PreviewImageType[];
    /** 상세 설명 */
    description: string;
    /** 프로젝트 후기 */
    insight: string;
    /** 사용 기술 스택 상세 */
    stacks: string[];
    /** 주요 기능 설명 */
    functions: {
      /* 기능명 */
      function: string;
      /* 기능 설명 */
      description: string;
    }[];
  };
}
