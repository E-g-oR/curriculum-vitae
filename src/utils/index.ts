import type { Languages } from "@i18n/translation";
import { flow, pipe } from "fp-ts/function";
import { Ord } from "fp-ts/number";
import { contramap } from "fp-ts/Ord";
import { Technology, techPriority } from "@content/technologies";
import * as A from "fp-ts/ReadonlyArray";

export const getLanguageFromURL = (pathname: string): Languages => {
  const langCodeMatch = pathname.match(/\/([a-z]{2}-?[a-z]{0,2})\//);
  return (langCodeMatch ? langCodeMatch[1] : "en") as Languages;
};

const techsOrd = pipe(
  Ord,
  contramap((t: Technology) => techPriority[t.category])
);
export const getTechsOrdered: (
  techs: ReadonlyArray<Technology>
) => ReadonlyArray<Technology> = flow(A.sort<Technology>(techsOrd));
