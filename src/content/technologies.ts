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
    image: "javascript.svg",
    href: "https://js-documentation.netlify.app/",
    category: "front",
  },
  {
    name: "TypeScript",
    image: "typescript.svg",
    href: "https://www.typescriptlang.org/",
    category: "front",
  },
  {
    name: "React",
    image: "react.svg",
    href: "https://react.dev/blog/2023/03/16/introducing-react-dev",
    category: "front",
  },
  {
    name: "React Native",
    image: "react.svg",
    href: "https://reactnative.dev/docs/getting-started",
    category: "mobile",
  },
  {
    name: "Next.js",
    image: "nextjs.svg",
    href: "https://nextjs.org/docs",
    category: "front",
  },
  {
    name: "NestJs",
    image: "nest.svg",
    href: "https://docs.nestjs.com/",
    category: "back",
  },
  {
    name: "Prisma",
    image: "prisma.svg",
    href: "https://www.prisma.io/docs",
    category: "back",
  },
  {
    name: "Astro",
    image: "astro.svg",
    href: "https://docs.astro.build/en/getting-started/",
    category: "front",
  },
  {
    name: "SolidJs",
    image: "solidjs.svg",
    href: "https://www.solidjs.cn/guides/getting-started",
    category: "front",
  },
  {
    name: "Redux",
    image: "redux.svg",
    href: "https://redux.js.org/",
    category: "front",
  },
  {
    name: "Zustand",
    image: "",
    href: "https://docs.pmnd.rs/zustand/getting-started/introduction",
    category: "front",
  },
  {
    name: "Soket.io",
    image: "socket.svg",
    href: "",
    category: "front",
  },
  {
    name: "PostgreSQL",
    image: "postgresql.svg",
    href: "",
    category: "back",
  },
  {
    name: "Sass/Scss",
    image: "sass.svg",
    href: "",
    category: "styles",
  },
  {
    name: "Figma",
    image: "figma.svg",
    href: "",
    category: "others",
  },
  {
    name: "Git",
    image: "git.svg",
    href: "",
    category: "others",
  },
  {
    name: "TailwindCss",
    image: "tailwindcss.svg",
    href: "https://v2.tailwindcss.com/",
    category: "styles",
  },
  {
    name: "vanilla-extract/css",
    image: "vanilla.svg",
    href: "https://vanilla-extract.style/",
    category: "styles",
  },
  {
    name: "Jest",
    image: "jest.svg",
    href: "https://jestjs.io/",
    category: "testing",
  },
  {
    name: "React testing library",
    image: "testing.svg",
    href: "",
    category: "testing",
  },
  {
    name: "Cucumber",
    image: "cucumber.svg",
    href: "",
    category: "testing",
  },
  {
    name: "Thin",
    image: "thin.svg",
    href: "",
    category: "back",
  },
  {
    name: "Firebase",
    image: "firebase.svg",
    href: "",
    category: "back",
  },
  {
    name: "Tauri",
    image: "tauri.svg",
    href: "",
    category: "others",
  },
];

export default technologies;
