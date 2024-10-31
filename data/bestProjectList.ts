import { namhaeImages } from "@/data/works/imageData/namhaeImages";
import { StaticImageData } from "next/image";
import { skillImageObject } from "@/data/SkillsData";
import { recodelogImages } from "@/data/works/imageData/recodelogImages";

export interface BestProject {
  id: string;
  title: string;
  description: string;
  period: string;
  image: StaticImageData | string;
  url: string;
  detailUrl: string;
  skills: StaticImageData[];
}

export const bestProjectList: BestProject[] = [
  {
    id: "german-village",
    title: "남해독일마을 웹사이트 리뉴얼",
    description: `공공기관 산하 남해독일마을의 웹사이트를 현대적으로 리뉴얼한 프로젝트입니다. \n
  Next.js 14와 TypeScript를 기반으로 개발되었으며, 다국어 지원과 지도 기반 관광 정보를 제공합니다.
  주요 기능으로는 호텔 예약 시스템, 카카오맵 API를 활용한 관광지 정보, 다국어 번역 시스템이 있습니다.
  특히 Intercepting Routes를 활용한 호텔 미리보기, Suspense와 Skeleton UI를 통한 로딩 최적화로 사용자 경험을 크게 개선했습니다.
  또한 Server Component를 활용하고 Google Search Console과 네이버 서치어드바이저를 통한 SEO 최적화로 검색엔진 노출을 개선했으며, AWS Amplify를 통한 안정적인 배포와 Route 53을 통한 도메인 관리를 구현했습니다.`,
    period: "2024.05 ~ 2024.08",
    image: namhaeImages.desktopImage,
    url: "https://german-village.kr/",
    detailUrl: "/works/namhae-german-village",
    skills: [
      skillImageObject.next,
      skillImageObject.react,
      skillImageObject.typescript,
    ],
  },
  {
    id: "recodelog",
    title: "Recodelog - 개발 블로그 플랫폼",
    description: `Next.js 14와 VeliteJS를 활용하여 개발한 개인 기술 블로그 플랫폼입니다. 
  MDX를 기반으로 한 콘텐츠 관리 시스템을 구축하여 효율적인 기술 문서 작성과 관리가 가능합니다.

  Shadcn UI 컴포넌트와 Tailwind CSS를 활용하여 세련된 디자인을 구현했으며,
  구글 다국어 번역 API를 통합하여 글로벌 독자들의 접근성을 높였습니다.

  특히 브라우저 환경 디바이스 체크 페이지를 구축하여 사용자 환경에 따른 
  최적화된 경험을 제공하며, SEO 최적화를 통해 주요 검색 엔진에서의 노출도를 
  크게 향상시켰습니다.`,
    period: "2024.03 ~ 운영중",
    image: recodelogImages.desktopImage,
    url: "https://recodelog.com",
    detailUrl: "/works/recodelog",
    skills: [
      skillImageObject.next,
      skillImageObject.react,
      skillImageObject.typescript,
    ],
  },
] as const;
