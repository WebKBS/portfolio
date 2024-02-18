export interface IWorks {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  image: string;
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
    url: "https://depos.kr",
    date: "2024-02",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    slug: "depos",
  },
  {
    id: 2,
    title: "임대료 보증금 상호전환 계산기",
    description: "개인 프로젝트로 제작한 임대료 보증금 상호전환 계산기입니다.",
    thumbnail: "/works/depos/thumbnails.png",
    image: "/works/depos/main.png",
    url: "https://depos.kr",
    date: "2024-02",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    slug: "depos2",
  },
];
