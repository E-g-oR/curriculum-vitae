import ru from "./ru";
import en from "./en";

export interface ExperienceItem {
  company: string;
  position: string;
  description: string;
  period: [Date, Date];
  responsibilities: ReadonlyArray<string>;
  technologies: ReadonlyArray<string>;
}

export interface Contact {
  title: string;
  body: string;
  href: string;
  icon: string;
}

export interface EducationItem {
  name: string;
  body: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Translation {
  page: {
    title: string;
    description: string;
  };
  format: {
    distance: ([start, end]: [Date, Date]) => string;
    period: ([start, end]: [Date, Date]) => string;
  };
  name: string;
  description: string;
  location: {
    title: string;
    country: string;
    city: string;
  };
  objective: {
    title: string;
    name: string;
    value: string;
  };
  about: {
    title: string;
    body: ReadonlyArray<string>;
    languages: {
      title: string;
      speaking: ReadonlyArray<Language>;
      learning: {
        title: string;
        list: ReadonlyArray<string>;
      };
    };
    education: {
      title: string;
      university: string;
      info: ReadonlyArray<EducationItem>;
    };
  };
  experience: {
    title: string;
    responsibilities: string;
    list: ReadonlyArray<ExperienceItem>;
  };
  tools: {
    title: string;
  };
  contacts: {
    title: string;
    list: ReadonlyArray<Contact>;
  };
  programming: string;
  skills: string;
  others: string;
}

export enum Languages {
  en = "en",
  ru = "ru",
}

export const dictionary = {
  ru,
  en,
};
