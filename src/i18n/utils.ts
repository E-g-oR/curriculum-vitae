import type { AstroGlobal } from "astro";
import { getLanguageFromURL } from "../utils";
import Translation, { dictionary } from "./translation";

export const useTranslations = (Astro: Readonly<AstroGlobal>): Translation => {
  const lang = getLanguageFromURL(Astro.url.pathname) || "en";
  return dictionary[lang];
};
