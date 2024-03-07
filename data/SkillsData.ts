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
    src: "/skills/js.png",
    alt: "JavaScript",
  },
  {
    src: "/skills/ts.png",
    alt: "TypeScript",
  },
  {
    src: "/skills/react.png",
    alt: "React",
  },
  {
    src: "/skills/next-js.png",
    alt: "Next.js",
  },
  {
    src: "/skills/tailwindcss.png",
    alt: "Tailwind CSS",
  },
  {
    src: "/skills/sass.png",
    alt: "Sass",
  },
  {
    src: "/skills/git.png",
    alt: "Git",
  },
  {
    src: "/skills/aspnet-core.png",
    alt: "ASP.NET Core",
  },
  {
    src: "/skills/aws.png",
    alt: "AWS",
  },
  {
    src: "/skills/css.png",
    alt: "CSS",
  },
  {
    src: "/skills/html.png",
    alt: "HTML",
  },
  {
    src: "/skills/docker.png",
    alt: "Docker",
  },
];

export const aboutSkills = [
  {
    image: "/skills/html.png",
    title: "HTML",
    description: [
      "웹표준에 맞게 시멘틱 태그를 사용할 수 있어요.",
      "폼을 잘 만들수 있어요.",
      "테이블을 잘 만들수 있어요.",
    ],
  },
  {
    image: "/skills/css.png",
    title: "CSS",
    description: [
      "CSS를 이용하여 레이아웃을 잘 만들수 있어요.",
      "CSS를 이용하여 애니메이션을 만들수 있어요.",
      "CSS를 이용하여 반응형 웹을 만들수 있어요.",
    ],
  },
  {
    image: "/skills/sass.png",
    title: "Sass",
    description: [
      "Sass를 이용하여 더 효율적으로 CSS를 작성할 수 있어요.",
      "Sass를 이용하여 반응형 웹을 만들수 있어요.",
      "Sass를 이용하여 레이아웃을 잘 만들수 있어요.",
    ],
  },
  {
    image: "/skills/js.png",
    title: "JavaScript",
    description: [
      "자바스크립트로 DOM을 다룰 수 있어요.",
      "자바스크립트로 이벤트를 다룰 수 있어요.",
      "자바스크립트로 비동기 처리를 다룰 수 있어요.",
    ],
  },
  {
    image: "/skills/ts.png",
    title: "TypeScript",
    description: [
      "타입스크립트로 자바스크립트를 작성할 수 있어요.",
      "타입스크립트로 인터페이스를 작성할 수 있어요.",
      "타입스크립트로 제네릭을 작성할 수 있어요.",
    ],
  },
  {
    image: "/skills/react.png",
    title: "React",
    description: [
      "React로 컴포넌트를 만들수 있어요.",
      "React로 상태를 관리할 수 있어요.",
      "React로 라우팅을 다룰 수 있어요.",
    ],
  },
];
