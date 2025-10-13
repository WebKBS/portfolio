import {
  eurasiaImages,
  eurasiaPreviewImages,
} from "@/data/imageData/eurasiaImages";
import { k2gbsImages, k2gbsPreviewImages } from "@/data/imageData/k2gbsImages";
import {
  dpangzImages,
  dpangzPreviewImages,
} from "@/data/imageData/dpangzImages";
import { IWorks } from "@/types/worksType";

let index = 0;

export const vstroWorks: IWorks[] = [
  {
    published: true,
    id: "vstro" + index++,
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
    id: "vstro" + index++,
    title: "k2gbs 홈페이지",
    description:
      "Next.js 리뉴얼 및 next-intl을 사용한 다국어 지원 홈페이지입니다.",
    thumbnail: k2gbsImages.thumbnail,
    image: k2gbsImages.desktopImage,
    mobileImage: k2gbsImages.mobileImage,
    bannerImage: k2gbsImages.bannerImage,
    url: null,
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
    id: "vstro" + index++,
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
