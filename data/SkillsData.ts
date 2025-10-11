import jsLogo from "@/public/images/skills/js.png";
import tsLogo from "@/public/images/skills/ts.png";
import reactLogo from "@/public/images/skills/react.png";
import nextLogo from "@/public/images/skills/next-js.png";
import nextLogoIcon from "@/public/icons/nextjs.svg";
import expoLogoIcon from "@/public/icons/expo.svg";
import viteLogoIcon from "@/public/icons/vite.svg";
import expressLogo from "@/public/icons/express.svg";

import tailwindImage from "@/public/images/skills/tailwindcss.png";
import sassImage from "@/public/images/skills/sass.png";
import aboutSassImage from "@/public/images/skills/sass.png";
import gitImage from "@/public/images/skills/git.png";
import aspnetCoreImage from "@/public/images/skills/aspnet-core.png";
import awsImage from "@/public/images/skills/aws.png";
import aws from "@/public/images/skills/aws.png";
import cssImage from "@/public/images/skills/css.png";
import aboutCssImage from "@/public/images/skills/css.png";
import htmlImage from "@/public/images/skills/html.png";
import aboutHtmlImage from "@/public/images/skills/html.png";
import dockerImage from "@/public/images/skills/docker.png";
import aboutZustandImage from "@/public/images/skills/zustand.png";
import aboutWebApiImage from "@/public/images/skills/web-api.png";
import storybookImage from "@/public/icons/storybook-black.svg";

import dockerLogo from "@/public/images/skills/docker-logo.png";
import { StaticImageData } from "next/image";

// Placeholder for missing icons (user will add later)
// Using a simple data URL as fallback
const dummyIcon =
  "data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='200' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='24' fill='%239ca3af' text-anchor='middle' dominant-baseline='middle'%3E%3F%3C/text%3E%3C/svg%3E";

export const SkillColor = {
  html: "#E34F26",
  css: "#1572B6",
  javascript: "#F7DF1E",
  typescript: "#3178C6",
  react: "#61DAFB",
  next: "#000000",
  tailwind: "#38B2AC",
  sass: "#CC6699",
  docker: "#2496ED",
  "asp.net core": "#512BD4",
  storybook: "#FE4785",
};

export const SkillList = [
  { percentage: 93, color: SkillColor.html, lang: "html" },
  { percentage: 92, color: SkillColor.css, lang: "css" },
  { percentage: 87, color: SkillColor.javascript, lang: "javascript" },
  { percentage: 84, color: SkillColor.typescript, lang: "typescript" },
  { percentage: 88, color: SkillColor.react, lang: "react" },
  { percentage: 86, color: SkillColor.next, lang: "next" },
];

export const SkillsBackground = (skills: string) => {
  switch (skills.toLocaleLowerCase()) {
    case "html":
      return [SkillColor.html, "#FFFFFF"];
    case "css":
      return [SkillColor.css, "#FFFFFF"];
    case "sass":
      return [SkillColor.sass, "#FFFFFF"];
    case "next.js":
      return [SkillColor.next, "#FFFFFF"];
    case "react":
      return [SkillColor.react, "#000000"];
    case "javascript":
      return [SkillColor.javascript, "#000000"];
    case "typescript":
      return [SkillColor.typescript, "#FFFFFF"];
    case "docker":
      return [SkillColor.docker, "#FFFFFF"];
    case "asp.net core":
      return [SkillColor["asp.net core"], "#FFFFFF"];
    case "tailwind css":
      return [SkillColor.tailwind, "#FFFFFF"];
    case "zustand":
      return ["#000000", "#FFFFFF"];
    case "shadcn ui":
      return ["#000000", "#FFFFFF"];
    case "storybook":
      return [SkillColor.storybook, "#FFFFFF"];
    default:
      return ["#eeeeee", "#000000"];
  }
};

export const skillImages = [
  {
    src: jsLogo,
    alt: "JavaScript",
  },
  {
    src: tsLogo,
    alt: "TypeScript",
  },
  {
    src: reactLogo,
    alt: "React",
  },
  {
    src: nextLogo,
    alt: "Next.js",
  },
  {
    src: tailwindImage,
    alt: "Tailwind CSS",
  },
  {
    src: sassImage,
    alt: "Sass",
  },
  {
    src: gitImage,
    alt: "Git",
  },
  {
    src: awsImage,
    alt: "AWS",
  },
  {
    src: cssImage,
    alt: "CSS",
  },
  {
    src: htmlImage,
    alt: "HTML",
  },
  {
    src: dockerImage,
    alt: "Docker",
  },
  {
    src: storybookImage,
    alt: "Storybook",
  },
];

export const aboutGoodSkills = [
  {
    image: aboutHtmlImage,
    title: "HTML",
    description:
      "웹 표준을 준수하며 시멘틱 태그를 활용하여 웹 페이지를 구조화할 수 있습니다. 또한 Form과 Table을 효과적으로 활용할 수 있습니다.",
  },
  {
    image: aboutCssImage,
    title: "CSS",
    description:
      "CSS와 CSS 모듈을 이용하여 스타일링을 할 수 있으며, 다양한 애니메이션 효과 및 반응형 웹을 구현할 수 있습니다.",
  },
  {
    image: aboutSassImage,
    title: "Sass",
    description:
      "CSS 전처리기인 Sass를 활용하여 스타일 시트를 보다 효율적으로 작성할 수 있습니다.",
  },
  {
    image: jsLogo,
    title: "JavaScript",
    description: "자바스크립트의 최신 ECMAScript 문법을 활용할 수 있습니다.",
  },
  {
    image: tsLogo,
    title: "TypeScript",
    description:
      "타입스크립트를 사용하여 interface 및 type을 정의할 수 있습니다.",
  },
  {
    image: reactLogo,
    title: "React",
    description:
      "React를 활용하여 컴포넌트 기반의 UI를 구축할 수 있습니다. 또한 React Hook을 활용하여 상태 관리 및 라이프사이클 관리를 효율적으로 수행할 수 있습니다.",
  },
  {
    image: nextLogo,
    title: "Next.js",
    description:
      "Next.js를 이용하여 서버 사이드 렌더링(SSR), 정적 사이트 생성(SSG) 및 파일 시스템 라우팅을 구현할 수 있습니다.",
  },
  {
    image: aboutZustandImage,
    title: "Zustand",
    description:
      "Zustand를 활용하여 간단하고 효율적으로 상태 관리를 할 수 있습니다.",
  },
  {
    image: aboutWebApiImage,
    title: "Web Api",
    description:
      "Fetch API, File API, Web Storage API 등을 다양한 Web API를 활용하여 웹 애플리케이션을 구현할 수 있습니다.",
  },
  {
    image: aws,
    title: "AWS",
    description:
      "AWS의 S3, Amplify, Route53 등의 서비스를 활용하여 클라우드 서비스를 구축할 수 있습니다.",
  },
];

export const skillImageObject = {
  html: htmlImage,
  css: cssImage,
  sass: sassImage,
  javascript: jsLogo,
  typescript: tsLogo,
  react: reactLogo,
  next: nextLogo,
  tailwind: tailwindImage,
  git: gitImage,
  "asp.net core": aspnetCoreImage,
  aws: awsImage,
  docker: dockerImage,
};

// Categorized Skills Data
export interface SkillItem {
  image: string | StaticImageData;
  title: string;
  description: string;
  level?: "expert" | "intermediate" | "beginner";
}

export interface SkillCategory {
  category: string;
  icon?: string;
  skills: SkillItem[];
}

export const categorizedSkills: SkillCategory[] = [
  {
    category: "Core Languages",
    skills: [
      {
        image: jsLogo,
        title: "JavaScript",
        description:
          "자바스크립트의 최신 ECMAScript 문법을 활용할 수 있습니다.",
        level: "expert",
      },
      {
        image: tsLogo,
        title: "TypeScript",
        description:
          "타입스크립트를 사용하여 interface 및 type을 정의할 수 있습니다.",
        level: "expert",
      },
      {
        image: aboutHtmlImage,
        title: "HTML",
        description:
          "웹 표준을 준수하며 시멘틱 태그를 활용하여 웹 페이지를 구조화할 수 있습니다.",
        level: "expert",
      },
      {
        image: aboutCssImage,
        title: "CSS",
        description:
          "CSS와 CSS 모듈을 이용하여 스타일링을 할 수 있으며, 다양한 애니메이션 효과 및 반응형 웹을 구현할 수 있습니다.",
        level: "expert",
      },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      {
        image: reactLogo,
        title: "React",
        description:
          "React를 활용하여 컴포넌트 기반의 UI를 구축할 수 있습니다. React Hook을 활용한 상태 관리 및 라이프사이클 관리를 효율적으로 수행할 수 있습니다.",
        level: "expert",
      },
      {
        image: nextLogoIcon,
        title: "Next.js (15+)",
        description:
          "Next.js를 이용하여 서버 사이드 렌더링(SSR), 정적 사이트 생성(SSG) 및 App Router를 구현할 수 있습니다.",
        level: "expert",
      },
      {
        image: expoLogoIcon,
        title: "React Native (Expo)",
        description:
          "Expo를 활용하여 크로스 플랫폼 모바일 애플리케이션을 개발할 수 있습니다.",
        level: "intermediate",
      },
      {
        image: viteLogoIcon,
        title: "Vite",
        description:
          "Vite를 사용하여 빠른 개발 환경을 구축하고 최적화된 프로덕션 빌드를 생성할 수 있습니다.",
        level: "intermediate",
      },
      {
        image: expressLogo,
        title: "Express",
        description:
          "Express를 활용하여 RESTful API 서버를 구축할 수 있습니다.",
        level: "intermediate",
      },
    ],
  },
  {
    category: "Styling",
    skills: [
      {
        image: tailwindImage,
        title: "Tailwind CSS",
        description:
          "Tailwind CSS를 활용하여 유틸리티 기반의 스타일링을 효율적으로 수행할 수 있습니다.",
        level: "expert",
      },
      {
        image: aboutSassImage,
        title: "Sass",
        description:
          "CSS 전처리기인 Sass를 활용하여 스타일 시트를 보다 효율적으로 작성할 수 있습니다.",
        level: "expert",
      },
      {
        image: dummyIcon,
        title: "CSS Modules",
        description:
          "CSS Modules를 사용하여 컴포넌트 단위의 스타일 격리를 구현할 수 있습니다.",
        level: "expert",
      },
      {
        image: dummyIcon,
        title: "Shadcn UI",
        description:
          "Shadcn UI 컴포넌트 라이브러리를 활용하여 일관된 디자인 시스템을 구축할 수 있습니다.",
        level: "intermediate",
      },
      {
        image: dummyIcon,
        title: "Framer Motion",
        description:
          "Framer Motion을 활용하여 부드럽고 인터랙티브한 애니메이션을 구현할 수 있습니다.",
        level: "intermediate",
      },
    ],
  },
  {
    category: "State Management & Data Fetching",
    skills: [
      {
        image: aboutZustandImage,
        title: "Zustand",
        description:
          "Zustand를 활용하여 간단하고 효율적으로 상태 관리를 할 수 있습니다.",
        level: "expert",
      },
      {
        image: dummyIcon,
        title: "React Query (TanStack Query)",
        description:
          "React Query를 사용하여 서버 상태를 효율적으로 관리하고 캐싱할 수 있습니다.",
        level: "intermediate",
      },
      {
        image: dummyIcon,
        title: "React Context API",
        description:
          "React Context API를 활용하여 전역 상태를 관리할 수 있습니다.",
        level: "expert",
      },
      {
        image: dummyIcon,
        title: "Server Actions (Next.js)",
        description:
          "Next.js Server Actions를 활용하여 서버 측 데이터 변경을 처리할 수 있습니다.",
        level: "intermediate",
      },
      {
        image: dummyIcon,
        title: "Axios",
        description:
          "Axios를 사용하여 HTTP 요청을 처리하고 인터셉터를 활용할 수 있습니다.",
        level: "expert",
      },
    ],
  },
  {
    category: "Routing",
    skills: [
      {
        image: dummyIcon,
        title: "Next.js App Router",
        description:
          "Next.js 15+ App Router를 활용하여 파일 시스템 기반 라우팅을 구현할 수 있습니다.",
        level: "expert",
      },
      {
        image: dummyIcon,
        title: "TanStack Router",
        description:
          "TanStack Router를 사용하여 타입 안전한 라우팅을 구현할 수 있습니다.",
        level: "intermediate",
      },
      {
        image: dummyIcon,
        title: "React Router",
        description: "React Router를 활용하여 SPA 라우팅을 구현할 수 있습니다.",
        level: "expert",
      },
    ],
  },
  {
    category: "Validation & Type Safety",
    skills: [
      {
        image: dummyIcon,
        title: "Zod",
        description:
          "Zod를 사용하여 런타임 타입 검증 및 스키마 정의를 할 수 있습니다.",
        level: "intermediate",
      },
    ],
  },
  {
    category: "Authentication",
    skills: [
      {
        image: dummyIcon,
        title: "Auth.js 5.0 (NextAuth)",
        description:
          "Auth.js를 활용하여 인증 및 세션 관리를 구현할 수 있습니다.",
        level: "intermediate",
      },
    ],
  },
  {
    category: "Package Managers",
    skills: [
      {
        image: dummyIcon,
        title: "pnpm",
        description:
          "pnpm을 사용하여 효율적인 패키지 관리를 수행할 수 있습니다.",
        level: "expert",
      },
      {
        image: dummyIcon,
        title: "npm",
        description:
          "npm을 사용하여 패키지를 관리하고 스크립트를 실행할 수 있습니다.",
        level: "expert",
      },
    ],
  },
  {
    category: "Analytics & SEO",
    skills: [
      {
        image: dummyIcon,
        title: "Google Analytics",
        description:
          "Google Analytics를 통합하여 웹사이트 트래픽을 분석할 수 있습니다.",
        level: "intermediate",
      },
      {
        image: dummyIcon,
        title: "Google Search Console",
        description:
          "Google Search Console을 활용하여 검색 성능을 모니터링할 수 있습니다.",
        level: "intermediate",
      },
      {
        image: dummyIcon,
        title: "Naver Search Advisor",
        description:
          "네이버 서치어드바이저를 통해 네이버 검색 최적화를 수행할 수 있습니다.",
        level: "intermediate",
      },
    ],
  },
  {
    category: "Testing & Quality",
    skills: [
      {
        image: storybookImage,
        title: "Storybook",
        description:
          "Storybook을 활용하여 컴포넌트 문서화 및 독립적인 개발 환경을 구축할 수 있습니다.",
        level: "intermediate",
      },
      {
        image: dummyIcon,
        title: "Prettier",
        description:
          "Prettier를 사용하여 일관된 코드 포맷팅을 유지할 수 있습니다.",
        level: "expert",
      },
      {
        image: dummyIcon,
        title: "ESLint",
        description:
          "ESLint를 활용하여 코드 품질을 검증하고 일관된 코딩 스타일을 유지할 수 있습니다.",
        level: "expert",
      },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      {
        image: dockerLogo,
        title: "Docker",
        description:
          "Docker를 활용하여 컨테이너화된 애플리케이션을 개발 버전과 프로덕션 버전으로 구축할 수 있습니다.",
        level: "intermediate",
      },
      {
        image: aws,
        title: "AWS",
        description:
          "AWS의 S3, Amplify, Route53 등의 서비스를 활용하여 클라우드 서비스를 구축할 수 있습니다.",
        level: "intermediate",
      },
      {
        image: gitImage,
        title: "Git",
        description:
          "Git을 사용하여 버전 관리 및 협업을 효율적으로 수행할 수 있습니다.",
        level: "expert",
      },
      {
        image: dummyIcon,
        title: "Puppeteer",
        description:
          "Puppeteer를 활용하여 웹 스크래핑 및 자동화 테스트를 수행할 수 있습니다.",
        level: "beginner",
      },
    ],
  },
  {
    category: "APIs & Web Technologies",
    skills: [
      {
        image: aboutWebApiImage,
        title: "Web API",
        description:
          "Fetch API, File API, Web Storage API 등 다양한 Web API를 활용하여 웹 애플리케이션을 구현할 수 있습니다.",
        level: "expert",
      },
    ],
  },
];
