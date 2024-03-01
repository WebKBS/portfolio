import { StaticImageData } from "next/image";

export interface IWorks {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  image: StaticImageData | string;
  mobileImage: StaticImageData | string;
  bannerImage: StaticImageData | string;
  url: string;
  date: string;
  tags: string[];
  slug: string;
  body: string;
  detailContent: {
    previewImages: {
      mobileImage: StaticImageData | string;
      image: StaticImageData | string;
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

export const works = [
  {
    id: 1,
    title: "임대료 보증금 자동 상호전환 계산기",
    description: "개인 프로젝트로 제작한 임대료 보증금 상호전환 계산기입니다.",
    thumbnail: "/works/depos/thumbnail.png",
    image: "/works/depos/main.png",
    mobileImage: "/works/depos/mobile.png",
    bannerImage: "/works/depos/banner.png",
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
    detailContent: {
      previewImages: [
        {
          image: "/works/depos/main.png",
          mobileImage: "/works/depos/mobile.png",
        },
      ],
      description:
        "개인 프로젝트로 SH 주택임대공사의 임대료 보증금 상호전환 계산기를 만들었습니다. 개인 프로젝트겸, 실효성이 있는 프로젝트를 하기위해 개발을 시작하였습니다. 프로젝트 배포까지 완료하고 공공임대주택 관련된 네이버 카페에 카페 회원들에게 공유하였습니다. 이후 반응이 좋았고, 더 많은 사람들이 사용할 수 있도록 개선하고 있습니다.",
      insight:
        "처음에는 아이디어가 떠오르자마자 그대로 개발을 시작했습니다. 결과적으로 하나의 페이지로 만들어졌는데, 이러한 방식으로 진행하다 보니 컴포넌트를 분리하지 않고 막무가내식으로 코드가 작성되었습니다. 배포 후에는 사람들로부터 좋은 반응을 받았고, 그에 따라 성능 개선과 추가적인 기능을 위해 노력하기로 했습니다. 그러나 입력값이 변경될 때 전체 폼이 리렌더링되는 문제가 발생하여 성능이 좋지 않았습니다. 이를 해결하기 위해 컴포넌트를 분리하고 Zustand를 사용하여 상태를 관리하고, 이를 통해 리렌더링과 성능을 최적화하였습니다.",
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
    id: 2,
    title: "Eurasia-Consulting 홈페이지",
    description:
      "워드프레스를 사용하여 제작된 홈페이지를 Next.js로 리뉴얼하였습니다.",
    thumbnail: "/works/eurasia/thumbnail.png",
    image: "/works/eurasia/main.png",
    mobileImage: "/works/eurasia/mobile.png",
    bannerImage: "/works/eurasia/banner.png",
    url: "https://eurasia-consulting.vercel.app/",
    date: "2023.10 ~ 2023.11",
    tags: ["반응형", "Next.js", "React", "TypeScript", "Tailwind CSS", "RSS"],
    slug: "eurasia",
    body: "워드프레스 기반 제작된 웹을 Next.js를 사용하여 전체 리뉴얼을 하였습니다. 헤럴드코리아 뉴스 RSS를 사용하여 최신 뉴스를 보여주는 기능을 추가하였습니다. 또한 nodemailer 라이브러리를 사용하여 beget 서버에서 메일을 보낼 수 있도록 문의하기 기능을 구현하였습니다.",
    detailContent: {
      previewImages: [
        {
          image: "/works/eurasia/main.png",
          mobileImage: "/works/eurasia/mobile.png",
        },
        {
          image: "/works/eurasia/slide/mainSlide1.png",
          mobileImage: "/works/eurasia/slide/mobileSlide1.png",
        },
        {
          image: "/works/eurasia/slide/mainSlide2.png",
          mobileImage: "/works/eurasia/slide/mobileSlide2.png",
        },
        {
          image: "/works/eurasia/slide/mainSlide3.png",
          mobileImage: "/works/eurasia/slide/mobileSlide3.png",
        },
        {
          image: "/works/eurasia/slide/mainSlide4.png",
          mobileImage: "/works/eurasia/slide/mobileSlide4.png",
        },
      ],
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
    id: 3,
    title: "k2gbs 홈페이지",
    description:
      "Next.js 리뉴얼 및 next-intl을 사용한 다국어 지원 홈페이지입니다.",
    thumbnail: "/works/k2gbs/thumbnail.png",
    image: "/works/k2gbs/main.png",
    mobileImage: "/works/k2gbs/mobile.png",
    bannerImage: "/works/k2gbs/banner.png",
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
    slug: "depos2",
    body: "기존에 제작된 홈페이지를 Next.js로 리뉴얼하였습니다. next-intl 라이브러리를 사용하여 다국어 지원을 하였습니다.",
    detailContent: {
      previewImages: [
        {
          image: "/works/k2gbs/main.png",
          mobileImage: "/works/k2gbs/mobile.png",
        },
        {
          image: "/works/k2gbs/slide/mainSlide1.png",
          mobileImage: "/works/k2gbs/slide/mobileSlide1.png",
        },
        {
          image: "/works/k2gbs/slide/mainSlide2.png",
          mobileImage: "/works/k2gbs/slide/mobileSlide2.png",
        },
        {
          image: "/works/k2gbs/slide/mainSlide3.png",
          mobileImage: "/works/k2gbs/slide/mobileSlide3.png",
        },
        {
          image: "/works/k2gbs/slide/mainSlide4.png",
          mobileImage: "/works/k2gbs/slide/mobileSlide4.png",
        },
        {
          image: "/works/k2gbs/slide/mainSlide5.png",
          mobileImage: "/works/k2gbs/slide/mobileSlide5.png",
        },
      ],
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
];
