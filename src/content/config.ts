export const LINKS = [
  {
    title: "Documentation",
    body: "Learn how Astro works and explore the official API docs.",
    href: "https://docs.astro.build",
  },
  {
    title: "Integrations",
    body: "Supercharge your project with new frameworks and libraries.",
    href: "https://astro.build/integrations",
  },
  {
    title: "Themes",
    body: "Explore a galaxy of community-built starter themes.",
    href: "https://docs.astro.build",
  },
  {
    title: "Community",
    body: "Come say hi to our amazing Discord community. ❤️",
    href: "https://docs.astro.build",
  },
];

export interface Contact {
  icon: string;
  title: string;
  body: string;
  href: string;
}

export const CONTACTS: ReadonlyArray<Contact> = [
  {
    title: "Email",
    body: "emuzych@gmail.com",
    href: "mailto:emuzych@gmail.com",
    icon: "email",
  },
  {
    title: "Phone number",
    body: "+375 (29) 168 92 58",
    href: "tel:+375291689258",
    icon: "phone",
  },
  {
    title: "Skype",
    body: "emuzych@gmail.com",
    href: "#",
    icon: "skype",
  },
  {
    title: "Telegram",
    body: "@egor_muzychkin",
    href: "https://t.me/egor_muzychkin",
    icon: "telegram",
  },
  {
    title: "GitHub",
    body: "https://github.com/E-g-oR",
    href: "https://github.com/E-g-oR",
    icon: "github",
  },
];

export const mainData = {
  objective: {
    name: "Desired position",
    positionValue: "frontend developer.",
  },
  education: {
    university: "Francisk Skorina Gomel state university",
    data: [
      {
        name: "Department",
        body: "Mathematics and programming technologies.",
      },
      {
        name: "Speciality",
        body: "Economic cybernetics",
      },
    ],
  },
  experience: [
    {
      position: "Trainee",
      duration: "3 months",
      description:
        "I got acquainted with the development of web applications, as well as mobile development. I learned how to write unit and integration tests.",
      company: "",
    },
    {
      position: "Junior frontend developer",
      duration: "1 year",
      description:
        "User interface development, data processing and visualization, bugfix.",
      company: "ITSupportMe",
    },
    {
      position: "Frontend developer",
      duration: "1 year",
      description: "Development of software products.",
      company: "Military Academy of Belarus",
    },
  ],
  skills: {
    languages: [
      {
        name: "Russian",
        level: "native speaker",
        icon: "",
      },
      {
        name: "Belarussian",
        level: "Intermediate",
        icon: "",
      },
      {
        name: "English",
        level: "Intermediate",
        icon: "",
      },
    ],
    technologies: {
      programming: [
        {
          category: "front-end",
          tools: [
            "React (typescript)",
            "NextJs",
            "SolidJs",
            "Astro",
            "React Native",
          ],
        },
        {
          category: "state management",
          tools: ["Redux", "Zustand", "MobX"],
        },
        {
          category: "styling",
          tools: ["vanilla-extract/css", "TailwindCss", "Scss"],
        },
        {
          category: "back-end",
          tools: ["NestJs (typescript)", "postgresql", "Prisma orm"],
        },
      ],
      others: [
        "Git",
        "BEM",
        "SOLID",
        "Agile",
        "Figma",
        "Thin backend",
        "Firebase",
        "Tauri",
        "Jest",
        "React testing library",
        "Cucumber",
      ],
    },
  },
};
