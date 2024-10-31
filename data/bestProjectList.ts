import { namhaeImages } from "@/data/works/imageData/namhaeImages";
import { StaticImageData } from "next/image";
import { skillImageObject } from "@/data/SkillsData";

export interface BestProject {
  id: string;
  title: string;
  description: string;
  period: string;
  image: StaticImageData;
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
  // {
  //   id: "portfolio",
  //   title: "포트폴리오 웹사이트",
  //   description: `개인 포트폴리오 웹사이트로, Next.js 14와 TypeScript를 기반으로 개발되었습니다.
  // 주요 기능으로는 Intersection Observer API를 활용한 스크롤 애니메이션,
  // Framer Motion을 활용한 페이지 전환 애니메이션,
  // React Hook Form을 활용한 이메일 폼 및 유효성 검사,
  // Dark Mode 토글 기능 등이 있습니다.
  // 또한 SEO 최적화를 위해 Next.js의 Head 컴포넌트를 활용하고,
  // Google Analytics를 통한 사용자 행동 분석을 구현했습니다.
  // AWS S3와 CloudFront를 통한 이미지 업로드 및 배포를 구현했으며,
  // GitHub Actions를 통한 CI/CD 파이프라인을 구축했습니다.`,
  //   image: namhaeImages.desktopImage,
  //   url: "https://german-village.kr/",
  //   skills: [],
  // },
] as const;
