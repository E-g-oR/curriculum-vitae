type Category = "mobile" | "front" | "back" | "testing" | "styles" | "others";

export const techPriority: Record<Category, number> = {
  front: 1,
  styles: 2,
  mobile: 3,
  back: 4,
  testing: 5,
  others: 6,
};

export interface Technology {
  name: string;
  href: string;
  image: string;
  category: Category;
}

const technologies: ReadonlyArray<Technology> = [
  {
    name: "JavaScript",
    image: "javascript",
    href: "https://js-documentation.netlify.app/",
    category: "front",
  },
  {
    name: "TypeScript",
    image: "typescript",
    href: "https://www.typescriptlang.org/",
    category: "front",
  },
  {
    name: "React",
    image: "react",
    href: "https://react.dev/blog/2023/03/16/introducing-react-dev",
    category: "front",
  },
  {
    name: "React Native",
    image: "react",
    href: "https://reactnative.dev/docs/getting-started",
    category: "mobile",
  },
  {
    name: "Next.js",
    image: "nextjs",
    href: "https://nextjs.org/docs",
    category: "front",
  },
  {
    name: "NestJs",
    image: "nest",
    href: "https://docs.nestjs.com/",
    category: "back",
  },
  {
    name: "Prisma",
    image: "prisma",
    href: "https://www.prisma.io/docs",
    category: "back",
  },
  {
    name: "Astro",
    image: "astro",
    href: "https://docs.astro.build/en/getting-started/",
    category: "front",
  },
  {
    name: "SolidJs",
    image: "solidjs",
    href: "https://www.solidjs.cn/guides/getting-started",
    category: "front",
  },
  {
    name: "Redux",
    image: "redux",
    href: "https://redux.js.org/",
    category: "front",
  },
  {
    name: "Zustand",
    image: "bear",
    href: "https://docs.pmnd.rs/zustand/getting-started/introduction",
    category: "front",
  },
  {
    name: "Soket.io",
    image: "socket",
    href: "",
    category: "front",
  },
  {
    name: "PostgreSQL",
    image: "postgresql",
    href: "",
    category: "back",
  },
  {
    name: "Sass/Scss",
    image: "sass",
    href: "",
    category: "styles",
  },
  {
    name: "Figma",
    image: "figma",
    href: "",
    category: "others",
  },
  {
    name: "Git",
    image: "git",
    href: "",
    category: "others",
  },
  {
    name: "TailwindCss",
    image: "tailwindcss",
    href: "https://v2.tailwindcss.com/",
    category: "styles",
  },
  {
    name: "vanilla-extract/css",
    image: "vanilla",
    href: "https://vanilla-extract.style/",
    category: "styles",
  },
  {
    name: "Jest",
    image: "jest",
    href: "https://jestjs.io/",
    category: "testing",
  },
  {
    name: "React testing library",
    image: "testing",
    href: "",
    category: "testing",
  },
  {
    name: "Cucumber",
    image: "cucumber",
    href: "",
    category: "testing",
  },
  {
    name: "Thin",
    image: "thin",
    href: "",
    category: "back",
  },
  {
    name: "Firebase",
    image: "firebase",
    href: "",
    category: "back",
  },
  {
    name: "Tauri",
    image: "tauri",
    href: "",
    category: "others",
  },
];

export default technologies;
