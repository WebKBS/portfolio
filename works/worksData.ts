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
}

export const works = [
  {
    id: 1,
    title: "임대료 보증금 상호전환 계산기",
    description: "개인 프로젝트로 제작한 임대료 보증금 상호전환 계산기입니다.",
    thumbnail: "/works/depos/thumbnails.png",
    image: "/works/depos/main.png",
    mobileImage: "/works/depos/mobile.png",
    url: "https://depos.kr",
    date: "2024-02 ~ 진행중",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Shadcn Ui",
    ],
    slug: "depos",
  },
  {
    id: 2,
    title: "임대료 보증금 상호전환 계산기",
    description: "개인 프로젝트로 제작한 임대료 보증금 상호전환 계산기입니다.",
    thumbnail: "/works/depos/thumbnails.png",
    image: "/works/depos/main.png",
    mobileImage: "/works/depos/mobile.png",
    url: "https://depos.kr",
    date: "2024-02",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    slug: "depos2",
  },
  {
    id: 3,
    title: "임대료 보증금 상호전환 계산기",
    description: "개인 프로젝트로 제작한 임대료 보증금 상호전환 계산기입니다.",
    thumbnail: "/works/depos/thumbnails.png",
    image: "/works/depos/main.png",
    mobileImage: "/works/depos/mobile.png",
    url: "https://depos.kr",
    date: "2024-02",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    slug: "depos2",
  },
  {
    id: 4,
    title: "임대료 보증금 상호전환 계산기",
    description: "개인 프로젝트로 제작한 임대료 보증금 상호전환 계산기입니다.",
    thumbnail: "/works/depos/thumbnails.png",
    image: "/works/depos/main.png",
    mobileImage: "/works/depos/mobile.png",
    url: "https://depos.kr",
    date: "2024-02",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    slug: "depos2",
  },
];
