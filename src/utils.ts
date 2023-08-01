import type {Languages} from "./i18n/translation";
import {getYear, isSameYear} from "date-fns";

export const getLanguageFromURL = (pathname: string): Languages => {
    const langCodeMatch = pathname.match(/\/([a-z]{2}-?[a-z]{0,2})\//);
    return (langCodeMatch ? langCodeMatch[1] : 'en') as Languages;
}

export const getYears = ([start, end]: [Date, Date]) =>
    isSameYear(start, end)
        ? getYear(start)
        : `${getYear(start)} – ${getYear(end)}`
