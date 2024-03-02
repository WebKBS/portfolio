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
