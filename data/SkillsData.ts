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

export const aboutGoodSkills = [
  {
    image: "/skills/html.png",
    title: "HTML",
    description:
      "웹 표준을 준수하며 시멘틱 태그를 활용하여 웹 페이지를 구조화할 수 있습니다. 또한 Form과 Table을 효과적으로 활용할 수 있습니다.",
  },
  {
    image: "/skills/css.png",
    title: "CSS",
    description:
      "CSS와 CSS 모듈을 이용하여 스타일링을 할 수 있으며, 다양한 애니메이션 효과 및 반응형 웹을 구현할 수 있습니다.",
  },
  {
    image: "/skills/sass.png",
    title: "Sass",
    description:
      "CSS 전처리기인 Sass를 활용하여 스타일 시트를 보다 효율적으로 작성할 수 있습니다.",
  },
  {
    image: "/skills/js.png",
    title: "JavaScript",
    description: "자바스크립트의 최신 ECMAScript 문법을 활용할 수 있습니다.",
  },
  {
    image: "/skills/ts.png",
    title: "TypeScript",
    description:
      "타입스크립트를 사용하여 interface 및 type을 정의할 수 있습니다.",
  },
  {
    image: "/skills/react.png",
    title: "React",
    description:
      "React를 활용하여 컴포넌트 기반의 UI를 구축할 수 있습니다. 또한 React Hook을 활용하여 상태 관리 및 라이프사이클 관리를 효율적으로 수행할 수 있습니다.",
  },
  {
    image: "/skills/next-js.png",
    title: "Next.js",
    description:
      "Next.js를 이용하여 서버 사이드 렌더링(SSR), 정적 사이트 생성(SSG) 및 파일 시스템 라우팅을 구현할 수 있습니다.",
  },
  {
    image: "/skills/zustand.png",
    title: "Zustand",
    description:
      "Zustand를 활용하여 간단하고 효율적으로 상태 관리를 할 수 있습니다.",
  },
  {
    image: "/skills/web-api.png",
    title: "Web Api",
    description:
      "Fetch API, File API, Web Storage API 등을 다양한 Web API를 활용하여 웹 애플리케이션을 구현할 수 있습니다.",
  },
];

export const usableButIncomplete = [
  {
    image: "/skills/docker-logo.png",
    title: "Docker",
    description:
      "Docker를 활용하여 컨테이너화된 애플리케이션을 개발 버전과 프로덕션 버전으로 구축할 수 있습니다.",
  },
  {
    image: "/skills/aspnet-core.png",
    title: "ASP.NET Core",
    description:
      "ASP.NET Core를 활용하여 MVC 웹 View 페이지 및 라우팅을 구현할 수 있습니다.",
  },
];
