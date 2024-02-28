import { StaticImageData } from "next/image";

export interface IWorks {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  image: StaticImageData | string;
  mobileImage: StaticImageData | string;
  url: string;
  date: string;
  tags: string[];
  slug: string;
  body: string;
}

export const works = [
  {
    id: 1,
    title: "임대료 보증금 자동 상호전환 계산기",
    description: "개인 프로젝트로 제작한 임대료 보증금 상호전환 계산기입니다.",
    thumbnail: "/works/depos/thumbnail.png",
    image: "/works/depos/main.png",
    mobileImage: "/works/depos/mobile.png",
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
  },
  {
    id: 2,
    title: "Eurasia-Consulting 홈페이지",
    description:
      "워드프레스를 사용하여 제작된 홈페이지를 Next.js로 리뉴얼하였습니다.",
    thumbnail: "/works/eurasia/thumbnail.png",
    image: "/works/eurasia/main.png",
    mobileImage: "/works/eurasia/mobile.png",
    url: "https://eurasia-consulting.vercel.app/",
    date: "2023.10 ~ 2023.11",
    tags: ["반응형", "Next.js", "React", "TypeScript", "Tailwind CSS", "RSS"],
    slug: "eurasia",
    body: "워드프레스 기반 제작된 웹을 Next.js를 사용하여 전체 리뉴얼을 하였습니다. 헤럴드코리아 뉴스 RSS를 사용하여 최신 뉴스를 보여주는 기능을 추가하였습니다. 또한 nodemailer 라이브러리를 사용하여 beget 서버에서 메일을 보낼 수 있도록 문의하기 기능을 구현하였습니다.",
  },
  {
    id: 3,
    title: "k2gbs 홈페이지",
    description:
      "Next.js 리뉴얼 및 next-intl을 사용한 다국어 지원 홈페이지입니다.",
    thumbnail: "/works/k2gbs/thumbnail.png",
    image: "/works/k2gbs/main.png",
    mobileImage: "/works/k2gbs/mobile.png",
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
  },
  {
    id: 4,
    title: "임대료 보증금 상호전환 계산기",
    description: "개인 프로젝트로 제작한 임대료 보증금 상호전환 계산기입니다.",
    thumbnail: "/works/depos/thumbnail.png",
    image: "/works/depos/main.png",
    mobileImage: "/works/depos/mobile.png",
    url: "https://depos.kr",
    date: "2024-02",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    slug: "depos2",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem mollitia laudantium est. Sint ipsum eum accusantium, sit illoearum. Tenetur quas molestiae fuga architecto sint molestias quiaquidem ipsa non? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem mollitia laudantium est. Sint ipsum eum",
  },
  {
    id: 5,
    title: "임대료 보증금 상호전환 계산기",
    description: "개인 프로젝트로 제작한 임대료 보증금 상호전환 계산기입니다.",
    thumbnail: "/works/depos/thumbnail.png",
    image: "/works/depos/main.png",
    mobileImage: "/works/depos/mobile.png",
    url: "https://depos.kr",
    date: "2024-02",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    slug: "depos2",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem mollitia laudantium est. Sint ipsum eum accusantium, sit illoearum. Tenetur quas molestiae fuga architecto sint molestias quiaquidem ipsa non? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem mollitia laudantium est. Sint ipsum eum",
  },
];
