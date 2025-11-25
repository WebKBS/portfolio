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
    published: true,
    id: 'dpectrum' + index++,
    title: 'STATION by UHC 백오피스',
    description: 'UHC 글로벌 호텔 서비스 백오피스 개발',
    thumbnail: uhcImages.thumbnail,
    desktopImage: uhcImages.desktopImage,
    mobileImage: uhcImages.mobileImage,
    bannerImage: uhcImages.bannerImage,
    url: null,
    date: '2024.11 ~ 2024.12',
    tags: ['React', 'TypeScript', 'Zustand', 'SWR', 'Tailwind CSS', 'FullCalendar', 'FFmpeg'],
    slug: 'uhc-backoffice',
    body: 'STATION by UHC 안드로이드/iOS 숙박 앱의 관리자 백오피스 개발 프로젝트로, 숙박 업체 관리, 객실 예약 시스템, 쿠폰 관리, 통계 분석 등 다양한 기능을 포함하고 있습니다.',
    contribution: '백엔드(2명) 디자이너(1명) 프론트엔드(2명) *기여도 80%',
    detailContent: {
      previewImages: uhcPreviewImages,
      description:
        'STATION by UHC 숙박 앱의 백오피스 개발 프로젝트로, 최상위 관리자(Admin)와 입점형 숙박업체 사업자 권한을 분리하여 각 역할에 맞는 기능을 제공합니다. 숙박 업체 목록 및 상세 페이지 등록/관리, 실시간 예약 현황 확인, 쿠폰 발급 및 히스토리 관리, 결제 내역 및 사용자 데이터 통계 분석 등의 기능을 통해 관리자와 사업자들의 업무 효율성을 극대화했습니다. 특히 비개발자도 쉽게 사용할 수 있도록 직관적인 UI/UX 설계에 중점을 두었습니다.',
      insight:
        '이번 프로젝트에서는 권한 기반의 기능 접근 제어와 실시간 데이터 동기화가 핵심 과제였습니다. Zustand를 활용한 효율적인 상태 관리와 SWR을 통한 서버 데이터 캐싱으로 빠른 응답성을 구현했습니다. 특히 FFmpeg를 활용한 영상 업로드 시 자동 해상도 및 용량 조정 기능을 통해 서버 부하를 줄이고 앱 내 영상 재생 성능을 최적화했습니다. 또한 업체 정보 등록 시 실제 앱 노출 화면을 미리 확인할 수 있는 프리뷰 기능을 구현하여 사용자 경험을 크게 개선했습니다.',
      stacks: [
        'Vite',
        'React',
        'TypeScript',
        'Zustand',
        'SWR',
        'Tailwind CSS',
        'React Hook Form',
        'Axios',
        'Zod',
        'FullCalendar',
        'FFmpeg',
        'Chart.js',
      ],
      functions: [
        {
          function: '권한 기반 접근 제어 시스템',
          description:
            '최상위 관리자(Admin)와 입점형 숙박업체 사업자 권한을 분리하여, 각 권한에 따라 기능 접근을 제어하고 역할에 맞는 UI를 제공하였습니다.',
        },
        {
          function: '숙박 업체 등록 및 미리보기 기능',
          description:
            '숙박 업체 정보 등록 시 실제 앱에 노출될 화면을 미리 확인할 수 있는 프리뷰 기능을 구현하여, 등록 전 최종 확인이 가능하도록 하였습니다.',
        },
        {
          function: 'FullCalendar 기반 예약 관리 시스템',
          description:
            'FullCalendar 라이브러리를 활용하여 객실 등록 및 예약 현황을 캘린더 뷰로 직관적으로 확인하고 관리할 수 있는 시스템을 구축하였습니다.',
        },
        {
          function: 'FFmpeg를 활용한 동영상 최적화',
          description:
            '앱 내 쇼츠(Shorts) 영상 업로드 시 FFmpeg 라이브러리를 사용하여 해상도 및 용량을 자동으로 조정, 서버 부하를 줄이고 원활한 재생이 가능하도록 최적화하였습니다.',
        },
        {
          function: '쿠폰 관리 및 히스토리 추적',
          description:
            '관리자가 쿠폰을 등록하고 사용 내역을 확인할 수 있는 쿠폰 히스토리 관리 기능을 개발하여 프로모션 운영을 효율적으로 지원하였습니다.',
        },
        {
          function: 'Chart.js를 활용한 통계 대시보드',
          description:
            '결제 내역, 예약 현황, 사용자 통계 등을 Chart.js로 시각화하여 관리자가 데이터를 한눈에 파악하고 의사결정을 내릴 수 있도록 지원하였습니다.',
        },
      ],
    },
  },
];
