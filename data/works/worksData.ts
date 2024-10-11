import {
  portfolioImages,
  portfolioPreviewImages,
} from "@/data/works/imageData/portfolioImages";
import { deposImages } from "@/data/works/imageData/deposImages";
import {
  eurasiaImages,
  eurasiaPreviewImages,
} from "@/data/works/imageData/eurasiaImages";
import {
  k2gbsImages,
  k2gbsPreviewImages,
} from "@/data/works/imageData/k2gbsImages";
import {
  dpangzImages,
  dpangzPreviewImages,
} from "@/data/works/imageData/dpangzImages";
import {
  recodelogImages,
  recodelogPreviewImages,
} from "@/data/works/imageData/recodelogImages";
import {
  roowaImages,
  roowaPreviewImages,
} from "@/data/works/imageData/roowaImages";
import {
  timelogImages,
  timelogPreviewImages,
} from "@/data/works/imageData/timelogImages";
import { roowaintImages } from "@/data/works/imageData/roowaintImages";
import { IWorks } from "@/types/worksType";
import {
  namhaeImages,
  namhaePreviewImages,
} from "@/data/works/imageData/namhaeImages";

let index = 0;

export const works: IWorks[] = [
  {
    published: true,
    id: index++,
    title: "남해독일마을 리뉴얼",
    description: "남해문화관광재단 주최 남해독일마을 홍보 웹사이트 개발",
    thumbnail: namhaeImages.thumbnail,
    image: namhaeImages.desktopImage,
    mobileImage: namhaeImages.mobileImage,
    bannerImage: namhaeImages.bannerImage,
    url: "https://german-village.kr/",
    date: "2024.05 ~ 2024.08",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand"],
    slug: "namhae-german-village",
    body: "기존 카페24 기반 웹사이트를 Next.js로 리뉴얼하고, 사이트 성능 및 SEO 최적화 및 콘텐츠 관리 시스템을 구축하였습니다.",
    contribution: "백엔드(2명) 디자이너(2명) 프론트엔드(1명)",
    detailContent: {
      previewImages: namhaePreviewImages,
      description:
        "기존 카페24 기반의 이미지 형식 웹사이트를 Next.js를 활용하여 지역 축제, 호텔, 펜션 홍보와 파독근로자들의 스토리텔링을 담은 브랜드 홈페이지로 리뉴얼하였으며, 관리자 시스템과의 데이터 연동, revalidate 및 ISR을 통한 전략적 캐싱, PC 버전의 상호작용 가능한 지역 지도 개발, 그리고 반응형 이미지와 Skeleton UI 적용을 통해 다량의 이미지로 구성된 홍보 사이트의 성능과 사용자 경험을 최적화하였습니다.",
      insight:
        "카페24 기반 이미지 웹사이트를 Next.js로 리뉴얼하여 지역 축제, 호텔, 펜션 홍보 및 파독근로자 스토리텔링을 포함한 브랜드 홈페이지로 전환하는 과정에서 관리자 데이터 연동, ISR을 활용한 전략적 캐싱, PC 버전 지역 지도 개발, 반응형 이미지와 Skeleton UI 적용을 통해 성능과 사용자 경험을 최적화했으며, 특히 대부분의 콘텐츠가 공유 가능한 특성을 고려하여 클라이언트 상태 관리 대신 URL의 search params를 활용한 상태 관리 방식을 채택함으로써 페이지 공유성을 높이고 SEO를 개선했고, 이 과정에서 Next.js의 고급 기능 활용, 효율적인 데이터 구조 설계, 웹 성능 최적화, 그리고 레거시 시스템과의 호환성 유지에 대한 기술적 역량을 향상시키는 경험이었습니다.",
      stacks: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "Google Analytics",
        "Google Search Console",
      ],
      functions: [
        {
          function: "Next.js Server Action",
          description:
            "Next.js Server Action을 사용하여 서버에서 데이터를 가져오는 기능을 추가하였습니다.",
        },
        {
          function: "React",
          description: "React를 사용하여 제작하였습니다.",
        },
        {
          function: "TypeScript",
          description: "TypeScript를 사용하여 제작하였습니다.",
        },
        {
          function: "Tailwind CSS",
          description: "Tailwind CSS를 사용하여 디자인을 하였습니다.",
        },
        {
          function: "Zustand",
          description: "Zustand를 사용하여 상태를 관리하였습니다.",
        },
        {
          function: "Google Analytics",
          description:
            "Google Analytics를 사용하여 사용자 데이터를 수집하였습니다.",
        },
        {
          function: "Google Search Console",
          description:
            "Google Search Console을 사용하여 SEO 최적화를 하였습니다.",
        },
      ],
    },
  },
  {
    published: true,
    id: index++,
    title: "Roowa I&T 웹사이트 리뉴얼",
    description:
      "Notion 데이테이스를 만들고 Notion API를 사용하여 데이터를 가져와서 보여주는 기업 웹사이트입니다.",
    thumbnail: roowaintImages.thumbnail,
    image: roowaintImages.desktopImage,
    mobileImage: roowaintImages.mobileImage,
    bannerImage: roowaintImages.bannerImage,
    url: "https://roowaint.kr",
    date: "2024.08 ~ 약 3주",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Zustand",
      "Notion API",
      "NodeMailer",
      "카카오 맵 API",
    ],
    slug: "roowaint",
    body: "기존 웹사이트를 리뉴얼하고 Notion 데이터 베이스를 활용하여 제작한 기업 웹사이트입니다.",
    contribution: "프론트엔드 100%, 디자이너 1명",
    detailContent: {
      previewImages: roowaPreviewImages,
      description:
        "기존 웹사이트를 리뉴얼하고 Notion 데이터 베이스를 활용하여 제작한 기업 웹사이트입니다.",
      insight:
        "Notion API를 사용하여 콘텐츠 관리 시스템을 구축함으로써, 클라이언트가 쉽게 웹사이트 내용을 업데이트할 수 있게 되었습니다. 이는 유지보수 비용 절감과 실시간 정보 업데이트를 가능하게 했습니다. 또한 기존 roowa.kr에서 재사용 가능한 Notion Api 컴포넌트 및 로직을 분리하여 roowaint.kr에 적용하였습니다. 이를 통해 코드의 재사용성을 높이고 유지보수성을 향상시켰습니다.",
      stacks: [
        "Next.js",
        "React",
        "TypeScript",
        "Zustand",
        "Notion API",
        "NodeMailer",
        "카카오 맵 API",
      ],
      functions: [
        {
          function: "Next.js",
          description: "Next.js를 사용하여 제작하였습니다.",
        },
        {
          function: "React",
          description: "React를 사용하여 제작하였습니다.",
        },
        {
          function: "TypeScript",
          description: "TypeScript를 사용하여 제작하였습니다.",
        },
        {
          function: "Zustand",
          description: "Zustand를 사용하여 상태를 관리하였습니다.",
        },
        {
          function: "Notion API",
          description:
            "Notion 데이터베이스를 구축하고 Notion API를 사용하여 데이터를 가져와서 보여주는 기능을 추가하였습니다.",
        },
        {
          function: "NodeMailer",
          description:
            "NodeMailer와 server action을 사용하여 메일을 보낼 수 있도록 하였습니다.",
        },
        {
          function: "카카오 맵 API",
          description:
            "카카오 맵 API를 사용하여 지도를 보여주는 기능을 추가하였습니다.",
        },
      ],
    },
  },
  {
    published: true,
    id: index++,
    title: "출퇴근 업무시간 계산기 TimeLog (MVP)",
    description: "원클릭으로 출퇴근 시간을 기록하고 업무시간을 계산해주는 웹앱",
    thumbnail: timelogImages.thumbnail,
    image: timelogImages.desktopImage,
    mobileImage: timelogImages.mobileImage,
    bannerImage: timelogImages.bannerImage,
    url: "https://time-log-sooty.vercel.app/",
    date: "2024.06 ~ 운영중",
    tags: [
      "반응형",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn Ui",
      "Zustand",
      "Prisma",
      "Supabase",
      "Chart.js",
    ],
    slug: "timelog",
    body: "출퇴근 시간을 기록하고 업무시간을 계산해주는 웹앱입니다. Prisma를 사용하여 데이터베이스를 구축하였고, Supabase를 사용하여 인증 및 데이터베이스를 연동하였습니다. Chart.js를 사용하여 데이터를 시각화하였습니다.",
    contribution: "개인 프로젝트",
    detailContent: {
      previewImages: timelogPreviewImages,
      description:
        "출퇴근 시간을 기록하고 일간, 주간, 월간 업무시간을 계산해주는 웹앱입니다.",
      insight:
        "프론트엔드 개발자로서 개인용 근태 관리 시스템을 개발하면서 여러 가지 기술적 도전과 통찰을 얻었습니다. 특히 시간 데이터를 다루는 과정에서 UTC(협정 세계시)에 대한 개념을 깊이 이해하게 된 것이 큰 도움이 되었습니다. 이를 통해 서버에서 이루어지는 시간 개념과 클라이어언트에서 이루어지는 시간적 개념을 구분하여 다루는 방법을 배울 수 있었습니다. Next.js를 활용하여 서버 사이드 렌더링과 서버 액션을 구현하면서, 프론트엔드 개발자로서 백엔드 로직을 효과적으로 다루는 방법을 학습했습니다. Prisma와 Supabase의 조합으로 데이터베이스 관리와 인증 시스템을 구축하면서, 프론트엔드 개발자로서 풀스택 개발의 흐름을 이해하고 백엔드 기술에 대한 이해도를 높일 수 있었습니다. 이 프로젝트를 통해 프론트엔드 기술 스택의 심화 학습뿐만 아니라, 시간 데이터 처리와 같은 실제 서비스 개발에서 마주치는 구체적인 문제들을 해결하는 경험을 쌓을 수 있었습니다.",
      stacks: [
        "반응형",
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn Ui",
        "Zustand",
        "Prisma",
        "Supabase",
        "Chart.js",
      ],
      functions: [
        {
          function: "Prisma",
          description: "Prisma를 사용하여 데이터베이스를 구축하였습니다.",
        },
        {
          function: "Supabase",
          description:
            "Supabase를 사용하여 인증 및 데이터베이스를 연동하였습니다.",
        },
        {
          function: "Chart.js",
          description: "Chart.js를 사용하여 데이터를 시각화하였습니다.",
        },
      ],
    },
  },
  {
    published: true,
    id: index++,
    title: "roowa 기업 웹사이트 리뉴얼",
    description:
      "기존 웹사이트를 리뉴얼하고 Notion 데이터 베이스를 활용하여 제작한 기업 웹사이트입니다.",
    thumbnail: roowaImages.thumbnail,
    image: roowaImages.desktopImage,
    mobileImage: roowaImages.mobileImage,
    bannerImage: roowaImages.bannerImage,
    url: "https://roowa.kr",
    date: "2024.04 ~ 약 3주",
    tags: [
      "반응형",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Notion API",
      "Zustand",
      "Nodemailer",
    ],
    slug: "roowa",
    body: "기존 웹사이트를 리뉴얼하고 Notion 데이터 베이스를 활용하여 제작한 기업 웹사이트입니다. Next.js를 사용하여 제작하였고, Tailwind CSS를 사용하여 디자인을 하였습니다. Notion API를 사용하여 데이터를 가져와서 보여주는 기능을 추가하였습니다. Server Action을 사용하여 Nodemailer를 사용하여 메일을 보낼 수 있도록 하였습니다. Zustand를 사용하여 상태를 관리하였습니다.",
    contribution: "프론트엔드 100%, 디자이너 1명",
    detailContent: {
      previewImages: roowaPreviewImages,
      description:
        "roowa 기업의 웹사이트를 현대적이고 효율적인 디자인으로 리뉴얼하였습니다. Notion 데이터베이스와 연동하여 콘텐츠 관리를 용이하게 하였습니다.",
      insight:
        "Notion API를 활용하여 콘텐츠 관리 시스템을 구축함으로써, 클라이언트가 쉽게 웹사이트 내용을 업데이트할 수 있게 되었습니다. 이는 유지보수 비용 절감과 실시간 정보 업데이트를 가능하게 했습니다.",
      stacks: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Notion API",
        "Zustand",
        "Nodemailer",
        "반응형",
      ],
      functions: [
        {
          function: "Notion API 연동",
          description:
            "Notion 데이터베이스와 연동하여 웹사이트 콘텐츠를 동적으로 관리하고 표시합니다.",
        },
        {
          function: "반응형 디자인",
          description:
            "다양한 디바이스에서 최적화된 사용자 경험을 제공하는 반응형 레이아웃을 구현하였습니다.",
        },
        {
          function: "이메일 문의 기능",
          description:
            "Server Action과 Nodemailer를 사용하여 사용자가 웹사이트에서 직접 문의 메일을 보낼 수 있는 기능을 구현하였습니다.",
        },
      ],
    },
  },
  {
    published: true,
    id: index++,
    title: "개인 블로그 Recodelog",
    description:
      "직접 제작한 개인 블로그 웹사이트 입니다. 경험했던 기술과 트러블 슈팅을 기록하고 있습니다.",
    thumbnail: recodelogImages.thumbnail,
    image: recodelogImages.desktopImage,
    mobileImage: recodelogImages.mobileImage,
    bannerImage: recodelogImages.bannerImage,
    url: "https://recodelog.com",
    date: "2024.03 ~ 운영중",
    tags: [
      "반응형",
      "Next.js",
      "React",
      "VeliteJS",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Shadcn Ui",
    ],
    slug: "recodelog",
    body: "개인 블로그를 제작하였습니다. Next.js를 사용하여 제작하였고, VeliteJS를 사용하여 MDX를 사용하여 포스트를 작성하였습니다. Tailwind CSS를 사용하여 디자인을 하였습니다. Zustand를 사용하여 상태를 관리하였고, Shadcn Ui를 사용하여 디자인을 하였습니다.",
    contribution: "100% 개인 프로젝트",
    detailContent: {
      previewImages: recodelogPreviewImages,
      description:
        "개인 블로그를 제작하였습니다. Next.js를 사용하여 제작하였고, VeliteJS를 사용하여 MDX를 사용하여 포스트를 작성하였습니다. Tailwind CSS를 사용하여 디자인을 하였습니다. Zustand를 사용하여 상태를 관리하였고, Shadcn Ui를 사용하여 디자인을 하였습니다.",
      insight:
        "개인 기록을 위해 개인 블로그를 직접 제작하였습니다. 원래 ContentLayer 라이브러리를 사용하여 개발하려했으나, 제가 블로그 개발을 시작할 당시 ContentLayer의 업데이트와 지원이 미흡한것을 발견하여 새로운 라이브러리를 찾게되었고, Velite js라는 라이브를 찾아 이번 블로그에 적용하게 되었습니다. Velite js를 사용하면서 MDX를 사용하여 포스트를 작성하였고, 이를 통해 블로그에 포스트를 작성하는데 있어서 편리함을 느꼈습니다. 이전 프로젝트에서 사용한 Shadcn Ui를 사용하여 빠르고 일관된 디자인을 하였고, Tailwind CSS를 사용하여 디자인을 하였습니다. 이번 프로젝트에서는 상태관리를 위해 Zustand를 사용하였습니다. 현재 운영중이며 차후 데이터 분석을 위해 http header를 사용하여 직접 데이터 수집을 개발하여 추가할 예정입니다.",
      stacks: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "Shadcn Ui",
        "반응형",
        "VeliteJS",
      ],
      functions: [
        {
          function: "VeliteJS",
          description:
            "VeliteJS를 사용하여 MDX를 사용하여 포스트를 작성하였습니다.",
        },
        {
          function: "Tailwind CSS",
          description: "Tailwind CSS를 사용하여 디자인을 하였습니다.",
        },
        {
          function: "Zustand",
          description: "Zustand를 사용하여 상태를 관리하였습니다.",
        },
        {
          function: "Shadcn Ui",
          description: "Shadcn Ui를 사용하여 디자인을 하였습니다.",
        },
      ],
    },
  },
  {
    published: true,
    id: index++,
    title: "Portfolio",
    description: "개인 포트폴리오 웹사이트입니다.",
    thumbnail: portfolioImages.thumbnail,
    image: portfolioImages.desktopImage,
    mobileImage: portfolioImages.mobileImage,
    bannerImage: portfolioImages.bannerImage,
    url: "https://portfolio-webkbs-projects.vercel.app/",
    date: "2024.02",
    tags: [
      "반응형",
      "Next.js",
      "React",
      "TypeScript",
      "Docker",
      "Zustand",
      "Zod",
      "Shadcn Ui",
    ],
    slug: "portfolio",
    body: "취업을 위해 개인 포트폴리오를 제작하였습니다. Next.js를 사용하여 제작하였고, Tailwind CSS를 사용하여 디자인을 하였습니다. Zustand를 사용하여 상태를 관리하였고, Shadcn Ui를 사용하여 디자인을 하였습니다.",
    contribution: "100% 개인 프로젝트",
    detailContent: {
      previewImages: portfolioPreviewImages,
      description:
        "개인용 포트폴리오 사이트를 개발하였습니다. Next.js를 사용하여 제작하였고, Tailwind CSS를 사용하여 디자인을 하였습니다. Zustand를 사용하여 상태를 관리하였고, Shadcn Ui를 사용하여 디자인을 하였습니다. weather API를 사용하여 날씨 정보를 가져와서 보여주는 기능을 추가하였습니다. Lottie를 사용하여 애니메이션을 추가하였습니다. web api intersection observer를 사용하여 스크롤 이벤트를 추가하였습니다. 문의하기 기능을 만들었고 nodemailer를 사용하여 메일을 보낼 수 있도록 하였고, Zod 라이브러리를 사용하여 프론트엔드 및 백엔드에서 유효성 검사를 하였습니다. 그리고 Docker를 사용하여 개발 환경과 배포 환경을 따로 구축해보았습니다.",
      insight:
        "이전 프로젝트에서 Nodemailer를 사용하여 프로젝트를 진행한 경험이 있습니다만, 전 프로젝트에서 유효성 검사를 정규식 및 데이터 검증을 직접하였습니다. 이번에는 Zod 라이브러리를 사용하는 방법을 공부할겸 적용해 보았습니다. 이를 통해 프론트엔드 및 백엔드에서 유효성 검사를 진행하였고 직접 하드코딩하는 것보다 코드양을 줄이고 가독성을 높일 수 있었습니다. 메인 페이지 SKILLS에서는 Intersection Observer를 사용하여 스크롤 이벤트를 소소하게 추가해보았습니다. 이번에 사용한 Lottie 애니메이션은 파일이 꽤 커서 페이지 리로드시 웹사이트의 성능저하가 있었습니다. 이를 해결하기위해 Lottie 데이터를 Session Storage에 저장하여 페이지 리로드시 성능저하를 최소화 하였습니다. 포트폴리오를 제작하기 전 Docker를 학습하고 있었고 이번 포트폴리오에 Docker를 적용하여 보았습니다.",
      stacks: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Docker",
        "Zustand",
        "Zod",
        "CSS Module",
        "Shadcn Ui",
        "반응형",
        "Weather API",
        "Lottie",
        "Intersection Observer",
        "Web API",
        "Nodemailer",
      ],
      functions: [
        {
          function: "Docker",
          description:
            "Docker를 사용하여 개발 환경과 배포 환경을 따로 구축해보았습니다.",
        },
        {
          function: "Weather API",
          description:
            "weather API를 사용하여 날씨 정보를 가져와서 보여주는 기능을 추가하였습니다.",
        },
        {
          function: "Lottie",
          description:
            "Lottie를 사용하여 애니메이션을 추가해보고 session storage에 저장하여 성능저하를 최소화 하였습니다.",
        },
        {
          function: "Intersection Observer",
          description:
            "web api intersection observer를 사용하여 스크롤 이벤트를 추가하였습니다.",
        },
        {
          function: "Nodemailer",
          description:
            "nodemailer를 사용하여 메일을 보낼 수 있도록 하였습니다.",
        },
        {
          function: "Zod",
          description:
            "Zod 라이브러리를 사용하여 프론트엔드 및 백엔드에서 유효성 검사를 하였습니다.",
        },
      ],
    },
  },
  {
    published: true,
    id: index++,
    title: "임대료 보증금 자동 상호전환 계산기",
    description: "개인 프로젝트로 제작한 임대료 보증금 상호전환 계산기입니다.",
    thumbnail: deposImages.thumbnail,
    image: deposImages.desktopImage,
    mobileImage: deposImages.mobileImage,
    bannerImage: deposImages.bannerImage,
    url: "https://depos.kr",
    date: "2024-02 ~ 진행중",
    tags: [
      "반응형",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Shadcn Ui",
    ],
    slug: "depos",
    body: "개인 프로젝트로 SH 주택임대공사의 임대료 보증금 상호전환 계산기를 만들었습니다. 사용자가 기본 보증금과 월 임대료를 입력하면 계약금과 보증금 및 월 임대료의 퍼센테이지를 자동으로 계산해줍니다. Zustand를 사용하여 상태를 관리하고, SEO를 최적화하고 PWA를 적용하여 웹앱 형식으로 개발하였습니다.",
    contribution: "100% 개인 프로젝트",
    detailContent: {
      previewImages: [
        {
          desktopImage: deposImages.desktopImage,
          mobileImage: deposImages.mobileImage,
        },
      ],
      description:
        "개인 프로젝트로 SH 주택임대공사의 임대료 보증금 상호전환 계산기를 만들었습니다. 개인 프로젝트겸, 실효성이 있는 프로젝트를 하기위해 개발을 시작하였습니다. 프로젝트 배포까지 완료하고 공공임대주택 관련된 네이버 카페에 카페 회원들에게 공유하였습니다. 이후 반응이 좋았고, 더 많은 사람들이 사용할 수 있도록 개선하고 있습니다.",
      insight:
        "처음에는 아이디어가 떠오르자마자 그대로 개발을 시작했습니다. 결과적으로 하나의 페이지로 만들어졌는데, 이러한 방식으로 진행하다 보니 컴포넌트를 분리하지 않고 막무가내식으로 코드가 작성되었습니다. 배포 후에는 사람들로부터 좋은 반응을 받았고, 그에 따라 성능 개선과 추가적인 기능을 위해 노력하기로 했습니다. 그러나 입력값이 변경될 때 전체 폼이 리렌더링되는 문제가 발생하여 성능이 좋지 않았습니다. 이를 해결하기 위해 컴포넌트를 분리하고 Zustand를 사용하여 상태를 관리하고, 이를 통해 리렌더링과 성능을 최적화하기 위한 리팩토링을 진행하였습니다.",
      stacks: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "Shadcn Ui",
        "PWA",
        "반응형",
      ],
      functions: [
        {
          function: "SEO",
          description: "검색엔진 최적화를 위한 meta 태그를 적용하였습니다.",
        },
        {
          function: "PWA",
          description:
            "웹앱 형식으로 개발하여 오프라인에서도 사용할 수 있도록 하였습니다.",
        },
        {
          function: "Google Search Console",
          description: "구글 검색 콘솔을 사용하여 SEO를 최적화하였습니다.",
        },
        {
          function: "Google Analytics",
          description:
            "구글 애널리틱스를 사용하여 사용자 행동을 분석하였습니다.",
        },
        {
          function: "DNS",
          description: "hosting.kr에서 도메인을 구매하고 연결하였습니다.",
        },
        {
          function: "Vercel 배포",
          description: "Vercel을 사용하여 배포하였습니다.",
        },
        {
          function: "다크모드 라이트모드",
          description: "다크모드와 라이트모드를 적용하였습니다.",
        },
        {
          function: "Zustand",
          description: "상태관리를 위해 Zustand를 사용하였습니다.",
        },
        {
          function: "Shadcn Ui",
          description: "디자인을 위해 Shadcn Ui를 사용하였습니다.",
        },
      ],
    },
  },
  {
    published: true,
    id: index++,
    title: "Eurasia-Consulting 홈페이지",
    description:
      "워드프레스를 사용하여 제작된 홈페이지를 Next.js로 리뉴얼하였습니다.",
    thumbnail: eurasiaImages.thumbnail,
    image: eurasiaImages.desktopImage,
    mobileImage: eurasiaImages.mobileImage,
    bannerImage: eurasiaImages.bannerImage,
    url: "https://eurasia-consulting.vercel.app/",
    date: "2023.10 ~ 2023.11",
    tags: ["반응형", "Next.js", "React", "TypeScript", "Tailwind CSS", "RSS"],
    slug: "eurasia",
    body: "워드프레스 기반 제작된 웹을 Next.js를 사용하여 전체 리뉴얼을 하였습니다. 헤럴드코리아 뉴스 RSS를 사용하여 최신 뉴스를 보여주는 기능을 추가하였습니다. 또한 nodemailer 라이브러리를 사용하여 beget 서버에서 메일을 보낼 수 있도록 문의하기 기능을 구현하였습니다.",
    contribution: "100% 회사내 단독 진행",
    detailContent: {
      previewImages: eurasiaPreviewImages,
      description:
        "워드프레스로 제작된 기존 웹사이트를 Next.js 프레임워크로 전체 리뉴얼하여 웹사이트를 제작하였습니다. 헤럴드 코리아 뉴스 RSS를 사용하여 최신 뉴스를 보여주는 기능을 추가하였습니다. 또한 nodemailer 라이브러리를 사용하여 beget 서버에서 메일 보내기, 또는 파일을 첨부하여 보낼 수 있도록 문의하기 기능을 구현하였습니다. 파일을 보낼시 next.js 서버에서 파일 사이즈 및 타입 등 유효성을 검증하는 기능등을 구현하였습니다.",
      insight:
        "회사 업무상의 이유로 혼자서 디자인, 개발 모두 진행하였습니다. 디자인을 직접 하면서 진행하기엔 무리가 있었고, 이를 해결하기 위해 Daisy Ui를 사용하였습니다. Daisy Ui를 사용하면서 디자인을 쉽게 할 수 있었고, 디자인을 위한 시간을 줄일 수 있었습니다. RSS를 가져다 사용하는것에 대해 RSS를 제공해주는 회사의 저작권을 확인해야한다는 것을 알게 되었습니다. nodemailer를 사용하여 전송시 파일을 첨부할 때 프론트엔드에서 바이너리 데이터 변환 후 서버에 전송시 서버에서는 Buffer form 및 byteLength로 파일 타입과 사이즈를 검증하는 방법을 알게 되었습니다.",
      stacks: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Daisy Ui",
        "RSS",
        "Nodemailer",
        "반응형",
      ],
      functions: [
        {
          function: "RSS",
          description:
            "헤럴드 코리아 뉴스 RSS를 사용하여 최신 뉴스를 보여주는 기능을 추가하였습니다.",
        },
        {
          function: "Nodemailer",
          description:
            "nodemailer 라이브러리를 사용하여 beget 서버에서 메일을 보낼 수 있도록 문의하기 기능을 구현하였습니다.",
        },
        {
          function: "Daisy Ui",
          description: "디자인을 위해 Daisy Ui를 사용하였습니다.",
        },
        {
          function: "Vercel 배포",
          description: "Vercel을 사용하여 배포하였습니다.",
        },
      ],
    },
  },
  {
    published: true,
    id: index++,
    title: "k2gbs 홈페이지",
    description:
      "Next.js 리뉴얼 및 next-intl을 사용한 다국어 지원 홈페이지입니다.",
    thumbnail: k2gbsImages.thumbnail,
    image: k2gbsImages.desktopImage,
    mobileImage: k2gbsImages.mobileImage,
    bannerImage: k2gbsImages.bannerImage,
    url: "empty",
    date: "2023.09 ~ 2023.10",
    tags: [
      "반응형",
      "다국어 번역",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    slug: "k2gbs",
    body: "기존에 제작된 홈페이지를 Next.js로 리뉴얼하였습니다. next-intl 라이브러리를 사용하여 다국어 지원을 하였습니다.",
    contribution: "100% 회사내 단독 진행",
    detailContent: {
      previewImages: k2gbsPreviewImages,
      description:
        "워드프레스 기반으로 제작된 웹사이트를 next js로 전체 리뉴얼하여 웹사이트를 제작하였습니다. 다국어 지원을 위해 next-intl 라이브러리를 사용하였습니다. 처음으로 다국어 지원 개발을 해 보았습니다. 이를 배우기위해 공식문서와 해외 유튜브 강의를 참고하고 단 기간 내 적용하여 개발을 하였습니다.",
      insight:
        "처음으로 다국어 지원 개발을 해 보았습니다. 처음 시도해 보는 것이었지만, 공식문서와 구글 검색 및 유튜브 영상을 통해 빠르게 next-intl 라이브러리 사용법을 습득하였고 이를 잘 적용해 웹사이트에 다국어 지원을 적용하였습니다. 아쉬웠던 점은 개발 도중 다른 프로젝트를 진행하게 되어 배포까지 완성하지 못하였습니다. 이후 배포까지 완성하고 싶었으나, 회사의 경영상 어려움으로 인해 퇴사하게 되어 끝내 마무리는 하지 못하였습니다. 하지만 next-intl 라이브러리 사용법을 익히고 다국어 지원을 적용해 본 것은 좋은 경험이었습니다.",
      stacks: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "다국어 번역",
        "반응형",
        "Daisy Ui",
      ],
      functions: [
        {
          function: "next-intl",
          description:
            "next-intl 라이브러리를 사용하여 다국어 지원을 하였습니다.",
        },
        {
          function: "Daisy Ui",
          description: "디자인을 위해 Daisy Ui를 사용하였습니다.",
        },
      ],
    },
  },
  {
    published: true,
    id: index++,
    title: "Dpangz - Leagure of Clonoid",
    description: "웹 HTML5 게임 프로젝트로 제작한 리그 오브 클로노이드 입니다.",
    thumbnail: dpangzImages.thumbnail,
    image: dpangzImages.desktopImage,
    mobileImage: dpangzImages.mobileImage,
    bannerImage: dpangzImages.bannerImage,
    url: "https://dpangz.com/",
    date: "2023.06 ~ 2023.08",
    tags: ["반응형", "HTML5게임", "asp.net core", "TypeScript"],
    slug: "dpangz",
    body: "asp.net core (MVC)로 HTML5 웹 기반 게임으로 제작한 리그 오브 클로노이드 입니다. 주요 업무로 dpangz 전체 홈페이지 ui를 제작하였고, canvas 내부 게임 ui를 제작하였습니다. 게임 내 상점, 채팅, 채팅 이모티콘, 거래 시스템 등 ui를 제작하였습니다.",
    contribution: "전체 30% (UI 100%) - 디자이너(2), 백엔드(2), 프론트엔드(1)",
    detailContent: {
      previewImages: dpangzPreviewImages,
      description:
        "웹에서 Play할 수 있는 HTML5 기반 게임을 제작하였습니다. 전체 웹사이트 ui를 제작하고, Game페이지에서는 Canvas로 게임을 제작하였습니다. Canvas 내부의 인게임은 게임 개발자가 개발 하였으며, 게임 내 상점, 채팅, 거래 시스템 등 버튼을 클릭하여 제어 할수 있는 부분은 제가 담당하여 개발하였습니다. 메인 홈페이지에 Chart.js를 사용하여 데이터를 시각화 하였고, sheets.js를 사용하여 엑셀 파일을 읽어와서 데이터를 시각화 하였습니다.",
      insight:
        "이전 HTML5 게임 Digtoc 게임을 제작해본 경험이 있었기 때문에 이번 프로젝트는 더 쉽게 제작할 수 있었습니다. sheet.js와 chart.js를 혼합하여 데이터 시각화를 해보았고, 구조회된 가이드를 제공하고 기획에서 excel 파일을 받아 변경 사항이 있더라도 즉시 chart.js에 반영할 수 있어서 업무 효율성을 높일 수 있었습니다.",
      stacks: [
        "Asp.net core",
        "html",
        "css",
        "sass",
        "JavaScript",
        "TypeScript",
        "반응형",
        "chart.js",
        "sheets.js",
        "Lottie",
        "PWA",
      ],
      functions: [
        {
          function: "chart.js",
          description: "Chart.js를 사용하여 데이터를 시각화 하였습니다.",
        },
        {
          function: "sheets.js",
          description:
            "sheets.js를 사용하여 엑셀 파일을 읽어와서 chart.js와 함께 데이터를 시각화 하였습니다.",
        },
        {
          function: "Lottie",
          description: "Lottie를 사용하여 애니메이션을 적용하였습니다.",
        },
        {
          function: "PWA",
          description: "PWA를 적용하여 웹앱 형식으로 개발하였습니다.",
        },
      ],
    },
  },
];
