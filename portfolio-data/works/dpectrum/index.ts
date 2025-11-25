import { IWorks } from '@/types/worksType';
import { uhcImages, uhcPreviewImages } from '@/portfolio-data/image-data/dpectrum/uhcImages';

let index = 0;

export const dpectrumWorks: IWorks[] = [
  // {
  //   published: false,
  //   id: 'dpectrum' + index++,
  //   title: 'GOLDIE 사업자 입찰 플랫폼',
  //   description: '사업자 입찰 플랫폼 웹앱 개발',
  //   thumbnail: '',
  //   desktopImage: null,
  //   mobileImage: null,
  //   bannerImage: '',
  //   url: null,
  //   date: '2025.10 ~ 2026.02',
  //   tags: ['Next.js', 'TypeScript', 'Zustand', 'Tanstack Query', 'Tailwind CSS'],
  //   slug: 'goldie-bid',
  //   body: '사업자 입찰 플랫폼 웹앱 개발 프로젝트로, 사업자들이 다양한 입찰 금 판매 기회를 탐색하고 참여할 수 있는 기능을 제공합니다.',
  //   contribution: '백엔드(1명) 디자이너(1명) 프론트엔드(1명)',
  //   detailContent: {
  //     previewImages: [
  //       {
  //         desktopImage: '',
  //         mobileImage: '',
  //       },
  //     ],
  //     description: '',
  //     insight: '',
  //     stacks: ['', '', ''],
  //     functions: [
  //       {
  //         function: '',
  //         description: '',
  //       },
  //     ],
  //   },
  // },
  // {
  //   published: false,
  //   id: 'dpectrum' + index++,
  //   title: 'GOLDIE 금매입 서비스 플랫폼',
  //   description: '금매입 플랫폼 서비스 웹앱 개발',
  //   thumbnail: '',
  //   desktopImage: '',
  //   mobileImage: null,
  //   bannerImage: '',
  //   url: null,
  //   date: '2025.04 ~ 2025.10',
  //   tags: ['Next.js', 'TypeScript', 'Zustand', 'Tanstack Query', 'Tailwind CSS'],
  //   slug: 'goldie',
  //   body: '금매입 플랫폼 서비스 웹앱 개발 프로젝트로, 사용자들이 금을 매입하고 판매할 수 있는 기능을 제공합니다. 비대면으로 금매입 신청, 실시간 시세 확인, 안전한 거래 등을 지원합니다.',
  //   contribution: '백엔드(1명) 디자이너(1명) 프론트엔드(1명)',
  //   detailContent: {
  //     previewImages: [
  //       {
  //         desktopImage: '',
  //         mobileImage: '',
  //       },
  //     ],
  //     description: '',
  //     insight: '',
  //     stacks: ['', '', ''],
  //     functions: [
  //       {
  //         function: '',
  //         description: '',
  //       },
  //     ],
  //   },
  // },
  // {
  //   published: false,
  //   id: 'dpectrum' + index++,
  //   title: 'BREAK 트레이딩 카드 거래 플랫폼',
  //   description: '트레이딩 카드 거래 플랫폼 웹앱 개발',
  //   thumbnail: '',
  //   desktopImage: '',
  //   mobileImage: null,
  //   bannerImage: '',
  //   url: null,
  //   date: '2025.01 ~ 2025.04',
  //   tags: ['Next.js', 'TypeScript', 'Zustand', 'SWR', 'Tailwind CSS'],
  //   slug: 'break',
  //   body: '트레이딩 카드 거래 플랫폼 웹앱 개발 프로젝트로, 사용자들이 트레이딩 카드를 사고팔고 교환할 수 있는 기능을 제공합니다.',
  //   contribution: '백엔드(2명) 디자이너(1명) 프론트엔드(2명) *기여도 70%',
  //   detailContent: {
  //     previewImages: [
  //       {
  //         desktopImage: '',
  //         mobileImage: '',
  //       },
  //     ],
  //     description: '',
  //     insight: '',
  //     stacks: ['', '', ''],
  //     functions: [
  //       {
  //         function: '',
  //         description: '',
  //       },
  //     ],
  //   },
  // },
  {
    published: false,
    id: 'dpectrum' + index++,
    title: 'UHC 백오피스',
    description: 'UHC 글로벌 호텔 서비스 백오피스 개발',
    thumbnail: uhcImages.thumbnail,
    desktopImage: uhcImages.desktopImage,
    mobileImage: uhcImages.mobileImage,
    bannerImage: uhcImages.bannerImage,
    url: null,
    date: '2024.11 ~ 2025.01',
    tags: ['React', 'TypeScript', 'Zustand', 'SWR', 'Tailwind CSS'],
    slug: 'uhc-backoffice',
    body: 'UHC 글로벌 호텔 서비스의 백오피스 개발 프로젝트로, 호텔 예약 관리, 고객 관리, 쿠폰 관리 등 다양한 기능을 포함하고 있습니다.',
    contribution: '백엔드(2명) 디자이너(1명) 프론트엔드(2명) *기여도 80%',
    detailContent: {
      previewImages: uhcPreviewImages,
      description: '',
      insight: '',
      stacks: ['', '', ''],
      functions: [
        {
          function: '',
          description: '',
        },
      ],
    },
  },
];
