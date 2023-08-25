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
    image: "",
    href: "https://js-documentation.netlify.app/",
    category: "front",
  },
  {
    name: "TypeScript",
    image: "",
    href: "https://www.typescriptlang.org/",
    category: "front",
  },
  {
    name: "React",
    image: "",
    href: "https://react.dev/blog/2023/03/16/introducing-react-dev",
    category: "front",
  },
  {
    name: "React Native",
    image: "",
    href: "https://reactnative.dev/docs/getting-started",
    category: "mobile",
  },
  {
    name: "Next.js",
    image: "",
    href: "https://nextjs.org/docs",
    category: "front",
  },
  {
    name: "NestJs",
    image: "",
    href: "https://docs.nestjs.com/",
    category: "back",
  },
  {
    name: "Prisma",
    image: "",
    href: "https://www.prisma.io/docs",
    category: "back",
  },
  {
    name: "Astro",
    image: "",
    href: "https://docs.astro.build/en/getting-started/",
    category: "front",
  },
  {
    name: "SolidJs",
    image: "",
    href: "https://www.solidjs.cn/guides/getting-started",
    category: "front",
  },
  {
    name: "Redux",
    image: "",
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
    image: "",
    href: "",
    category: "front",
  },
  {
    name: "PostgreSQL",
    image: "",
    href: "",
    category: "back",
  },
  {
    name: "Sass/Scss",
    image: "",
    href: "",
    category: "styles",
  },
  {
    name: "Figma",
    image: "",
    href: "",
    category: "others",
  },
  {
    name: "Git",
    image: "",
    href: "",
    category: "others",
  },
  {
    name: "TailwindCss",
    image: "",
    href: "https://v2.tailwindcss.com/",
    category: "styles",
  },
  {
    name: "vanilla-extract/css",
    image: "",
    href: "https://vanilla-extract.style/",
    category: "styles",
  },
  {
    name: "Jest",
    image: "",
    href: "https://jestjs.io/",
    category: "testing",
  },
  {
    name: "React testing library",
    image: "",
    href: "",
    category: "testing",
  },
  {
    name: "Cucumber",
    image: "",
    href: "",
    category: "testing",
  },
  {
    name: "Thin",
    image: "",
    href: "",
    category: "back",
  },
  {
    name: "Firebase",
    image: "",
    href: "",
    category: "back",
  },
  {
    name: "Tauri",
    image: "",
    href: "",
    category: "others",
  },
];

export default technologies;
