import {
  namhaeImages,
  namhaePreviewImages,
} from "@/data/imageData/namhaeImages";
import { roowaintImages } from "@/data/imageData/roowaintImages";
import { roowaImages, roowaPreviewImages } from "@/data/imageData/roowaImages";
import { IWorks } from "@/types/worksType";

let index = 0;

export const roowaWorks: IWorks[] = [
  {
    published: true,
    id: "roowa" + index++,
    title: "남해독일마을 리뉴얼",
    description: "남해문화관광재단 주최 남해독일마을 홍보 웹사이트 개발",
    thumbnail: namhaeImages.thumbnail,
    image: namhaeImages.desktopImage,
    mobileImage: namhaeImages.mobileImage,
    bannerImage: namhaeImages.bannerImage,
    url: "https://german-village.kr/",
    date: "2024.05 ~ 2024.08",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "AWS Amplify",
    ],
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
        "AWS Amplify",
      ],
      functions: [
        {
          function: "Next.js Server Action",
          description:
            "Next.js Server Action을 사용하여 서버에서 데이터를 가져오는 기능을 추가하였습니다.",
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
        {
          function: "AWS Amplify",
          description: "AWS Amplify를 사용하여 배포하였습니다.",
        },
      ],
    },
  },
  {
    published: true,
    id: "roowa" + index++,
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
      "Vercel",
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
        "Vercel",
      ],
      functions: [
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
        {
          function: "Vercel",
          description: "Vercel을 사용하여 배포하였습니다.",
        },
      ],
    },
  },
  {
    published: true,
    id: "roowa" + index++,
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
        {
          function: "Vercel",
          description: "Vercel을 사용하여 배포하였습니다.",
        },
      ],
    },
  },
];
