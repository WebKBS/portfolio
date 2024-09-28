import { StaticImageData } from "next/image";
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
import {recodelogImages} from "@/data/works/imageData/recodelogImages";

let index = 0;

export interface IWorks {
  id: number;
  title: string;
  description: string;
  thumbnail: StaticImageData | string;
  image: StaticImageData | string;
  mobileImage: StaticImageData | string;
  bannerImage: StaticImageData | string;
  url: string;
  date: string;
  tags: string[];
  slug: string;
  body: string;
  contribution: string;
  detailContent: {
    previewImages: {
      desktopImage: StaticImageData | string;
      mobileImage: StaticImageData | string;
    }[];
    description: string;
    insight: string;
    stacks: string[];
    functions: {
      function: string;
      description: string;
    }[];
  };
}

export const works: IWorks[] = [
  {
    id: index++,
    title: "개인 블로그 Recodelog",
    description: "직접 제작한 개인 블로그 웹사이트 입니다. 경험했던 기술과 트러블 슈팅을 기록하고 있습니다.",
    thumbnail: recodelogImages.thumbnail,
    image: recodelogImages.desktopImage,
    mobileImage: recodelogImages.mobileImage,
    bannerImage: recodelogImages.bannerImage,
    url: "https://recodelog.com",
    date: "2024.03 ~ 현재",
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
      previewImages: [],
      description:
        "개인 블로그를 제작하였습니다. Next.js를 사용하여 제작하였고, VeliteJS를 사용하여 MDX를 사용하여 포스트를 작성하였습니다. Tailwind CSS를 사용하여 디자인을 하였습니다. Zustand를 사용하여 상태를 관리하였고, Shadcn Ui를 사용하여 디자인을 하였습니다.",
      insight:
        "개인 블로그를 제작하면서 VeliteJS를 사용하여 MDX를 사용하여 포스트를 작성하였습니다. 이전에는 MDX를 사용해본적이 없었기 때문에 VeliteJS를 사용하여 MDX를 사용하는 방법을 공부하였습니다. VeliteJS를 사용하면서 MDX를 사용하는 방법을 알게 되었고, 이를 통해 블로그에 포스트를 작성할 수 있게 되었습니다. 이전에는 Tailwind CSS를 사용해본적이 없었기 때문에 Tailwind CSS를 사용하여 디자인을 하였습니다. Tailwind CSS를 사용하면서 디자인을 쉽게 할 수 있었고, 디자인을 위한 시간을 줄일 수 있었습니다. 이전에는 Zustand를 사용해본적이 없었기 때문에 Zustand를 사용하여 상태를 관리하였습니다. Zustand를 사용하면서 상태를 관리하는 방법을 알게 되었고, 이를 통해 상태를 관리할 수 있게 되었습니다. 이전에는 Shadcn Ui를 사용해본적이 없었기 때문에 Shadcn Ui를 사용하여 디자인을 하였습니다. Shadcn Ui를 사용하면서 디자인을 쉽게 할 수 있었고, 디자인을 위한 시간을 줄일 수 있었습니다.",
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
    }


  },
  {
    id: index++,
    title: "Portfolio",
    description: "개인 포트폴리오 웹사이트입니다.",
    thumbnail: portfolioImages.thumbnail,
    image: portfolioImages.desktopImage,
    mobileImage: portfolioImages.mobileImage,
    bannerImage: portfolioImages.bannerImage,
    url: "https://portfolio-webkbs.vercel.app",
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
