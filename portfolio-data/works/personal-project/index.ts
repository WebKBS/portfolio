import {
  timelogImages,
  timelogPreviewImages,
} from '@/portfolio-data/image-data/personal-project/timelogImages';
import {
  recodelogImages,
  recodelogPreviewImages,
} from '@/portfolio-data/image-data/personal-project/recodelogImages';
import {
  portfolioImages,
  portfolioPreviewImages,
} from '@/portfolio-data/image-data/personal-project/portfolioImages';
import {
  deposImages,
  deposPreviewImages,
} from '@/portfolio-data/image-data/personal-project/deposImages';
import { IWorks } from '@/types/worksType';

let index = 0;

export const personalProject: IWorks[] = [
  {
    published: true,
    id: 'personal' + index++,
    title: '출퇴근 업무시간 계산기 TimeLog (MVP)',
    description: '원클릭으로 출퇴근 시간을 기록하고 업무시간을 계산해주는 웹앱',
    thumbnail: timelogImages.thumbnail,
    image: timelogImages.desktopImage,
    mobileImage: timelogImages.mobileImage,
    bannerImage: timelogImages.bannerImage,
    url: 'https://time-log-sooty.vercel.app/',
    date: '2024.06 ~ 운영중',
    tags: [
      '반응형',
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn Ui',
      'Zustand',
      'Prisma',
      'Supabase',
      'Chart.js',
    ],
    slug: 'timelog',
    body: '출퇴근 시간을 기록하고 업무시간을 계산해주는 웹앱입니다. Prisma를 사용하여 데이터베이스를 구축하였고, Supabase를 사용하여 인증 및 데이터베이스를 연동하였습니다. Chart.js를 사용하여 데이터를 시각화하였습니다.',
    contribution: '개인 프로젝트',
    detailContent: {
      previewImages: timelogPreviewImages,
      description: '출퇴근 시간을 기록하고 일간, 주간, 월간 업무시간을 계산해주는 웹앱입니다.',
      insight:
        '프론트엔드 개발자로서 개인용 근태 관리 시스템을 개발하면서 여러 가지 기술적 도전과 통찰을 얻었습니다. 특히 시간 데이터를 다루는 과정에서 UTC(협정 세계시)에 대한 개념을 깊이 이해하게 된 것이 큰 도움이 되었습니다. 이를 통해 서버에서 이루어지는 시간 개념과 클라이어언트에서 이루어지는 시간적 개념을 구분하여 다루는 방법을 배울 수 있었습니다. Next.js를 활용하여 서버 사이드 렌더링과 서버 액션을 구현하면서, 프론트엔드 개발자로서 백엔드 로직을 효과적으로 다루는 방법을 학습했습니다. Prisma와 Supabase의 조합으로 데이터베이스 관리와 인증 시스템을 구축하면서, 프론트엔드 개발자로서 풀스택 개발의 흐름을 이해하고 백엔드 기술에 대한 이해도를 높일 수 있었습니다. 이 프로젝트를 통해 프론트엔드 기술 스택의 심화 학습뿐만 아니라, 시간 데이터 처리와 같은 실제 서비스 개발에서 마주치는 구체적인 문제들을 해결하는 경험을 쌓을 수 있었습니다.',
      stacks: [
        '반응형',
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Shadcn Ui',
        'Zustand',
        'Prisma',
        'Supabase',
        'Chart.js',
      ],
      functions: [
        {
          function: 'Prisma',
          description: 'Prisma를 사용하여 데이터베이스를 구축하였습니다.',
        },
        {
          function: 'Supabase',
          description: 'Supabase를 사용하여 인증 및 데이터베이스를 연동하였습니다.',
        },
        {
          function: 'Chart.js',
          description: 'Chart.js를 사용하여 데이터를 시각화하였습니다.',
        },
      ],
    },
  },
  {
    published: true,
    id: 'personal' + index++,
    title: '개인 블로그 Recodelog',
    description:
      '직접 제작한 개인 블로그 웹사이트 입니다. 경험했던 기술과 트러블 슈팅을 기록하고 있습니다.',
    thumbnail: recodelogImages.thumbnail,
    image: recodelogImages.desktopImage,
    mobileImage: recodelogImages.mobileImage,
    bannerImage: recodelogImages.bannerImage,
    url: 'https://recodelog.com',
    date: '2024.03 ~ 운영중',
    tags: [
      '반응형',
      'Next.js',
      'React',
      'VeliteJS',
      'TypeScript',
      'Tailwind CSS',
      'Zustand',
      'Shadcn Ui',
    ],
    slug: 'recodelog',
    body: '개인 블로그를 제작하였습니다. Next.js를 사용하여 제작하였고, VeliteJS를 사용하여 MDX를 사용하여 포스트를 작성하였습니다. Tailwind CSS를 사용하여 디자인을 하였습니다. Zustand를 사용하여 상태를 관리하였고, Shadcn Ui를 사용하여 디자인을 하였습니다.',
    contribution: '100% 개인 프로젝트',
    detailContent: {
      previewImages: recodelogPreviewImages,
      description:
        '개인 블로그를 제작하였습니다. Next.js를 사용하여 제작하였고, VeliteJS를 사용하여 MDX를 사용하여 포스트를 작성하였습니다. Tailwind CSS를 사용하여 디자인을 하였습니다. Zustand를 사용하여 상태를 관리하였고, Shadcn Ui를 사용하여 디자인을 하였습니다.',
      insight:
        '개인 기록을 위해 개인 블로그를 직접 제작하였습니다. 원래 ContentLayer 라이브러리를 사용하여 개발하려했으나, 제가 블로그 개발을 시작할 당시 ContentLayer의 업데이트와 지원이 미흡한것을 발견하여 새로운 라이브러리를 찾게되었고, Velite js라는 라이브를 찾아 이번 블로그에 적용하게 되었습니다. Velite js를 사용하면서 MDX를 사용하여 포스트를 작성하였고, 이를 통해 블로그에 포스트를 작성하는데 있어서 편리함을 느꼈습니다. 이전 프로젝트에서 사용한 Shadcn Ui를 사용하여 빠르고 일관된 디자인을 하였고, Tailwind CSS를 사용하여 디자인을 하였습니다. 이번 프로젝트에서는 상태관리를 위해 Zustand를 사용하였습니다. 현재 운영중이며 차후 데이터 분석을 위해 http header를 사용하여 직접 데이터 수집을 개발하여 추가할 예정입니다.',
      stacks: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Zustand',
        'Shadcn Ui',
        '반응형',
        'VeliteJS',
      ],
      functions: [
        {
          function: 'VeliteJS',
          description: 'VeliteJS를 사용하여 MDX를 사용하여 포스트를 작성하였습니다.',
        },
        {
          function: 'Shadcn Ui',
          description: 'Shadcn Ui를 사용하여 디자인을 하였습니다.',
        },
      ],
    },
  },
  {
    published: true,
    id: 'personal' + index++,
    title: 'Portfolio',
    description: '개인 포트폴리오 웹사이트입니다.',
    thumbnail: portfolioImages.thumbnail,
    image: portfolioImages.desktopImage,
    mobileImage: portfolioImages.mobileImage,
    bannerImage: portfolioImages.bannerImage,
    url: 'https://portfolio-xi-ochre-45.vercel.app',
    date: '2024.02',
    tags: ['반응형', 'Next.js', 'React', 'TypeScript', 'Docker', 'Zustand', 'Zod', 'Shadcn Ui'],
    slug: 'portfolio',
    body: '취업을 위해 개인 포트폴리오를 제작하였습니다. Next.js를 사용하여 제작하였고, Tailwind CSS를 사용하여 디자인을 하였습니다. Zustand를 사용하여 상태를 관리하였고, Shadcn Ui를 사용하여 디자인을 하였습니다.',
    contribution: '100% 개인 프로젝트',
    detailContent: {
      previewImages: portfolioPreviewImages,
      description:
        '개인용 포트폴리오 사이트를 개발하였습니다. Next.js를 사용하여 제작하였고, Tailwind CSS를 사용하여 디자인을 하였습니다. Zustand를 사용하여 상태를 관리하였고, Shadcn Ui를 사용하여 디자인을 하였습니다. weather API를 사용하여 날씨 정보를 가져와서 보여주는 기능을 추가하였습니다. Lottie를 사용하여 애니메이션을 추가하였습니다. web api intersection observer를 사용하여 스크롤 이벤트를 추가하였습니다. 문의하기 기능을 만들었고 nodemailer를 사용하여 메일을 보낼 수 있도록 하였고, Zod 라이브러리를 사용하여 프론트엔드 및 백엔드에서 유효성 검사를 하였습니다. 그리고 Docker를 사용하여 개발 환경과 배포 환경을 따로 구축해보았습니다.',
      insight:
        '이전 프로젝트에서 Nodemailer를 사용하여 프로젝트를 진행한 경험이 있습니다만, 전 프로젝트에서 유효성 검사를 정규식 및 데이터 검증을 직접하였습니다. 이번에는 Zod 라이브러리를 사용하는 방법을 공부할겸 적용해 보았습니다. 이를 통해 프론트엔드 및 백엔드에서 유효성 검사를 진행하였고 직접 하드코딩하는 것보다 코드양을 줄이고 가독성을 높일 수 있었습니다. 메인 페이지 SKILLS에서는 Intersection Observer를 사용하여 스크롤 이벤트를 소소하게 추가해보았습니다. 이번에 사용한 Lottie 애니메이션은 파일이 꽤 커서 페이지 리로드시 웹사이트의 성능저하가 있었습니다. 이를 해결하기위해 Lottie 데이터를 Session Storage에 저장하여 페이지 리로드시 성능저하를 최소화 하였습니다. 포트폴리오를 제작하기 전 Docker를 학습하고 있었고 이번 포트폴리오에 Docker를 적용하여 보았습니다.',
      stacks: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Docker',
        'Zustand',
        'Zod',
        'CSS Module',
        'Shadcn Ui',
        '반응형',
        'Weather API',
        'Lottie',
        'Intersection Observer',
        'Web API',
        'Nodemailer',
      ],
      functions: [
        {
          function: 'Docker',
          description: 'Docker를 사용하여 개발 환경과 배포 환경을 따로 구축해보았습니다.',
        },
        {
          function: 'Weather API',
          description:
            'weather API를 사용하여 날씨 정보를 가져와서 보여주는 기능을 추가하였습니다.',
        },
        {
          function: 'Lottie',
          description:
            'Lottie를 사용하여 애니메이션을 추가해보고 session storage에 저장하여 성능저하를 최소화 하였습니다.',
        },
        {
          function: 'Intersection Observer',
          description: 'web api intersection observer를 사용하여 스크롤 이벤트를 추가하였습니다.',
        },
        {
          function: 'Nodemailer',
          description: 'nodemailer를 사용하여 메일을 보낼 수 있도록 하였습니다.',
        },
        {
          function: 'Zod',
          description:
            'Zod 라이브러리를 사용하여 프론트엔드 및 백엔드에서 유효성 검사를 하였습니다.',
        },
      ],
    },
  },
  {
    published: true,
    id: 'personal' + index++,
    title: '임대료 보증금 자동 상호전환 계산기',
    description: '개인 프로젝트로 제작한 임대료 보증금 상호전환 계산기입니다.',
    thumbnail: deposImages.thumbnail,
    image: deposImages.desktopImage,
    mobileImage: deposImages.mobileImage,
    bannerImage: deposImages.bannerImage,
    url: 'https://depos.kr',
    date: '2024-02 ~ 진행중',
    tags: ['반응형', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Shadcn Ui'],
    slug: 'depos',
    body: '개인 프로젝트로 SH 주택임대공사의 임대료 보증금 상호전환 계산기를 만들었습니다. 사용자가 기본 보증금과 월 임대료를 입력하면 계약금과 보증금 및 월 임대료의 퍼센테이지를 자동으로 계산해줍니다. Zustand를 사용하여 상태를 관리하고, SEO를 최적화하고 PWA를 적용하여 웹앱 형식으로 개발하였습니다.',
    contribution: '100% 개인 프로젝트',
    detailContent: {
      previewImages: deposPreviewImages,
      description:
        '개인 프로젝트로 SH 주택임대공사의 임대료 보증금 상호전환 계산기를 만들었습니다. 개인 프로젝트겸, 실효성이 있는 프로젝트를 하기위해 개발을 시작하였습니다. 프로젝트 배포까지 완료하고 공공임대주택 관련된 네이버 카페에 카페 회원들에게 공유하였습니다. 이후 반응이 좋았고, 더 많은 사람들이 사용할 수 있도록 개선하고 있습니다.',
      insight:
        '처음에는 아이디어가 떠오르자마자 그대로 개발을 시작했습니다. 결과적으로 하나의 페이지로 만들어졌는데, 이러한 방식으로 진행하다 보니 컴포넌트를 분리하지 않고 막무가내식으로 코드가 작성되었습니다. 배포 후에는 사람들로부터 좋은 반응을 받았고, 그에 따라 성능 개선과 추가적인 기능을 위해 노력하기로 했습니다. 그러나 입력값이 변경될 때 전체 폼이 리렌더링되는 문제가 발생하여 성능이 좋지 않았습니다. 이를 해결하기 위해 컴포넌트를 분리하고 Zustand를 사용하여 상태를 관리하고, 이를 통해 리렌더링과 성능을 최적화하기 위한 리팩토링을 진행하였습니다.',
      stacks: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Zustand',
        'Shadcn Ui',
        'PWA',
        '반응형',
      ],
      functions: [
        {
          function: 'SEO',
          description: '검색엔진 최적화를 위한 meta 태그를 적용하였습니다.',
        },
        {
          function: 'PWA',
          description: '웹앱 형식으로 개발하여 오프라인에서도 사용할 수 있도록 하였습니다.',
        },
        {
          function: 'Google Search Console',
          description: '구글 검색 콘솔을 사용하여 SEO를 최적화하였습니다.',
        },
        {
          function: 'Google Analytics',
          description: '구글 애널리틱스를 사용하여 사용자 행동을 분석하였습니다.',
        },
        {
          function: 'DNS',
          description: 'hosting.kr에서 도메인을 구매하고 연결하였습니다.',
        },
        {
          function: 'Vercel 배포',
          description: 'Vercel을 사용하여 배포하였습니다.',
        },
        {
          function: '다크모드 라이트모드',
          description: '다크모드와 라이트모드를 적용하였습니다.',
        },
        {
          function: 'Zustand',
          description: '상태관리를 위해 Zustand를 사용하였습니다.',
        },
        {
          function: 'Shadcn Ui',
          description: '디자인을 위해 Shadcn Ui를 사용하였습니다.',
        },
      ],
    },
  },
];
