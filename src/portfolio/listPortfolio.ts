import portfolio from "../../portfolio/src/data/portfolio.json";
import type { ListType } from "../presentations/listPresentation";

type WorkListSource = ReadonlyArray<{
  name: string;
  createdAt: string;
  github?: string;
  site?: string;
}>;

// ポートフォリオに出す件数。全文は portfolio.yamanoku.net。件数は変えない。
export const LATEST_PORTFOLIO_LENGTH = 3;

export const deriveListPortfolio = (source: WorkListSource): ListType[] =>
  [...source]
    .sort((left, right) => right.createdAt.localeCompare(left.createdAt))
    .slice(0, LATEST_PORTFOLIO_LENGTH)
    .map((work) => {
      const url = work.site ?? work.github;
      return {
        title: work.name,
        datetime: work.createdAt,
        ...(url ? { url } : {})
      };
    });

export const listPortfolio = deriveListPortfolio(portfolio);
