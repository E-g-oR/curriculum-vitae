import type { Translation } from "./translation";
import locale from "date-fns/locale/ru/index";
import { format, formatDistanceStrict, isSameYear } from "date-fns";

const ru: Translation = {
  page: {
    title: "Егор Музычкин",
    description:
      "Опытный фронтенд-разработчик, создаю веб-сайты и веб-приложения используя самые современные технологии разработки.",
  },
  format: {
    distance: ([start, end]) => formatDistanceStrict(start, end, { locale }),
    period: ([start, end]) =>
      isSameYear(start, end)
        ? format(start, "LLLL y", { locale })
        : `${format(start, "LLL y", { locale })} — ${format(end, "LLL y", {
            locale,
          })}`,
  },
  name: "Егор Музычкин",
  description:
    "Интроверт. Влюблён в кофе и рассветы. Библиофил. Гитарист. Люблю котов. Одержим путешествиями и природой.",
  location: {
    title: "Место",
    city: "Гомель",
    country: "Беларусь",
  },
  objective: {
    title: "Цель",
    name: "Желаемая должность",
    value: "Фронтенд разработчик",
  },
  about: {
    title: "Обо мне",
    body: [
      "Я интересуюсь программированием и веб-разработкой, это буквально моя страсть. Мне действительно нравится воплощать дизайн веб-сайтов и веб-приложений с помощью современных инструментов, создавая интуитивно понятные и визуально привлекательные интерфейсы, которые оставляют приятное впечатление.",
    ],
    education: {
      title: "Образование",
      university: "ГГУ им. Франциска Скорины",
      info: [
        {
          name: "Факультет",
          body: "Математики и технологий программирования",
        },
        {
          name: "Специальность",
          body: "Экономическая кибернетика",
        },
      ],
    },
    languages: {
      title: "Я говорю на",
      learning: {
        title: "А так же сейчас изучаю",
        list: ["Испанский"],
      },
      speaking: [
        { name: "Русский", level: "Носитель языка" },
        { name: "Белорусский", level: "Разговорный" },
        { name: "Английский", level: "Разговорный" },
      ],
    },
  },
  experience: {
    title: "Опыт работы",
    responsibilities: "Обязанности",
    list: [
      {
        position: "Фронтенд разработчик",
        description: "Разработка программных продуктов в разных сферах.",
        company: "NDA",
        period: [new Date(2022, 9, 26), new Date(2023, 9, 25)],
        responsibilities: [
          "Разработка и внедрение дизайна пользовательского интерфейса",
          "Разработка проектов и архитектуры",
          "Создание переиспользуемых компонентов",
          "Поддержка и расширение существующих проектов и исправление багов",
          "Написание документации",
          "Встречи с заказчиком",
        ],
        technologies: [
          "React",
          "React Native",
          "Redux (RTQ)",
          "Zustand",
          "TypeScript",
          "TailwindCss",
        ],
      },
      {
        position: "Фронтенд разработчик",
        description:
          "Разработка пользовательского интерфейса, обработка и визуализация данных, багфикс.",
        company: "ITSupportMe",
        period: [new Date(2021, 8, 13), new Date(2022, 9, 15)],
        responsibilities: [
          "Создание переиспользуемых компонентов",
          "Построение пользовательского интерфейса",
          "Обработка и визуализация данных",
          "Разработка и внедрение нового функционала",
          "Поддержка и расширение проектов",
          "Исправление багов",
        ],
        technologies: ["React", "Redux", "TypeScript", "RxJS"],
      },
      {
        position: "Стажировка",
        description:
          "Познакомился с разработкой веб-приложений, а так же мобильной разработкой. Научился писать юнит-тесты и интеграционные тесты.",
        company: "ITSupportMe",
        period: [new Date(2021, 7, 1), new Date(2021, 8, 13)],
        responsibilities: [],
        technologies: [
          "React",
          "React Native",
          "Redux",
          "MobX",
          "JavaScript",
          "TypeScript",
          "Jest",
          "React testing library",
          "Cucumber framework",
        ],
      },
    ],
  },
  tools: {
    title: "Инструменты",
  },
  contacts: {
    title: "Контакты",
    list: [
      {
        title: "Электронная почта",
        body: "emuzych@gmail.com",
        icon: "email",
        href: "mailto:emuzych@gmail.com",
      },
      {
        title: "Телефон",
        body: "+375  (29) 168 92 58",
        icon: "phone",
        href: "tel:+375291689258",
      },
      {
        title: "Skype",
        body: "emuzych@gmail.com",
        icon: "skype",
        href: "skype:emuzych@gmail.com",
      },
      {
        title: "Telegram",
        body: "@egor_muzychkin",
        icon: "telegram",
        href: "https://t.me/egor_muzychkin",
      },
      {
        title: "GitHub",
        body: "https://github.com/E-g-oR",
        icon: "github",
        href: "https://github.com/E-g-oR",
      },
    ],
  },
  programming: "Программирование",
  skills: "Навыки",
  others: "Другое",
};

export default ru;
