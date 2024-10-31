import jsImage from "@/public/images/skills/js.png";
import aboutJsImage from "@/public/images/skills/js.png";
import tsImage from "@/public/images/skills/ts.png";
import aboutTsImage from "@/public/images/skills/ts.png";
import reactImage from "@/public/images/skills/react.png";
import aboutReactImage from "@/public/images/skills/react.png";
import nextImage from "@/public/images/skills/next-js.png";
import aboutNextImage from "@/public/images/skills/next-js.png";
import tailwindImage from "@/public/images/skills/tailwindcss.png";
import sassImage from "@/public/images/skills/sass.png";
import aboutSassImage from "@/public/images/skills/sass.png";
import gitImage from "@/public/images/skills/git.png";
import aspnetCoreImage from "@/public/images/skills/aspnet-core.png";
import aspnetCore from "@/public/images/skills/aspnet-core.png";
import awsImage from "@/public/images/skills/aws.png";
import aws from "@/public/images/skills/aws.png";
import cssImage from "@/public/images/skills/css.png";
import aboutCssImage from "@/public/images/skills/css.png";
import htmlImage from "@/public/images/skills/html.png";
import aboutHtmlImage from "@/public/images/skills/html.png";
import dockerImage from "@/public/images/skills/docker.png";
import aboutZustandImage from "@/public/images/skills/zustand.png";
import aboutWebApiImage from "@/public/images/skills/web-api.png";

import dockerLogo from "@/public/images/skills/docker-logo.png";

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
};
export const SkillList = [
  { percentage: 92, color: SkillColor.html, lang: "html" },
  { percentage: 89, color: SkillColor.css, lang: "css" },
  { percentage: 82, color: SkillColor.javascript, lang: "javascript" },
  { percentage: 76, color: SkillColor.typescript, lang: "typescript" },
  { percentage: 84, color: SkillColor.react, lang: "react" },
  { percentage: 77, color: SkillColor.next, lang: "next" },
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
    default:
      return ["#eeeeee", "#000000"];
  }
};

export const skillImages = [
  {
    src: jsImage,
    alt: "JavaScript",
  },
  {
    src: tsImage,
    alt: "TypeScript",
  },
  {
    src: reactImage,
    alt: "React",
  },
  {
    src: nextImage,
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
    src: aspnetCoreImage,
    alt: "ASP.NET Core",
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
    image: aboutJsImage,
    title: "JavaScript",
    description: "자바스크립트의 최신 ECMAScript 문법을 활용할 수 있습니다.",
  },
  {
    image: aboutTsImage,
    title: "TypeScript",
    description:
      "타입스크립트를 사용하여 interface 및 type을 정의할 수 있습니다.",
  },
  {
    image: aboutReactImage,
    title: "React",
    description:
      "React를 활용하여 컴포넌트 기반의 UI를 구축할 수 있습니다. 또한 React Hook을 활용하여 상태 관리 및 라이프사이클 관리를 효율적으로 수행할 수 있습니다.",
  },
  {
    image: aboutNextImage,
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

export const usableButIncomplete = [
  {
    image: dockerLogo,
    title: "Docker",
    description:
      "Docker를 활용하여 컨테이너화된 애플리케이션을 개발 버전과 프로덕션 버전으로 구축할 수 있습니다.",
  },
  {
    image: aspnetCore,
    title: "ASP.NET Core",
    description:
      "ASP.NET Core를 활용하여 MVC 웹 View 페이지 및 라우팅을 구현할 수 있습니다.",
  },
];

export const skillImageObject = {
  html: htmlImage,
  css: cssImage,
  sass: sassImage,
  javascript: jsImage,
  typescript: tsImage,
  react: reactImage,
  next: nextImage,
  tailwind: tailwindImage,
  git: gitImage,
  "asp.net core": aspnetCoreImage,
  aws: awsImage,
  docker: dockerImage,
};
