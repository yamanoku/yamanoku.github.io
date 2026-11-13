import works from "../../works/src/data/works.json";
import type { ListType } from "../presentations/listPresentation";

type WorkListSource = ReadonlyArray<{
  name: string;
  createdAt: string;
  github?: string;
  site?: string;
}>;

// ポートフォリオに出す件数。全文は works.yamanoku.net。件数は変えない。
export const LATEST_WORKS_LENGTH = 3;

export const deriveListWorks = (source: WorkListSource): ListType[] =>
  [...source]
    .sort((left, right) => right.createdAt.localeCompare(left.createdAt))
    .slice(0, LATEST_WORKS_LENGTH)
    .map((work) => {
      const url = work.site ?? work.github;
      return {
        title: work.name,
        datetime: work.createdAt,
        ...(url ? { url } : {})
      };
    });

export const listWorks = deriveListWorks(works);
