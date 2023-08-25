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

export interface ContactItem {
  title: string;
  body: string;
  href: string;
  icon: string; // TODO move icons to separated const
}

interface Translation {
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
      speaking: ReadonlyArray<{ name: string; level: string }>;
      learning: {
        title: string;
        list: ReadonlyArray<string>;
      };
    };
    education: {
      title: string;
      university: string;
      info: ReadonlyArray<{ name: string; body: string }>;
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
    list: ReadonlyArray<ContactItem>;
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

export default Translation;
