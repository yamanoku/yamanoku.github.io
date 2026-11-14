import siteContent from "../../../src/data/site-content.json";

export type PortfolioLang = "ja" | "en";

const translations = siteContent.translations;

export const copy = {
  ja: {
    title: "Portfolio | yamanoku.net",
    description: translations.ja["portfolio.lead"],
    lead: translations.ja["portfolio.lead"],
    articles: translations.ja["portfolio.articles"],
    github: translations.ja["portfolio.github"],
    genres: translations.ja["portfolio.genres"],
    genre: {
      website: translations.ja["portfolio.genre.website"],
      event: translations.ja["portfolio.genre.event"],
      poc: translations.ja["portfolio.genre.poc"],
      "source-code": translations.ja["portfolio.genre.sourceCode"],
      "advent-calendar": translations.ja["portfolio.genre.adventCalendar"],
      book: translations.ja["portfolio.genre.book"]
    },
    skip: translations.ja["skip.to-content"],
    multilingual: "多言語ページ",
    related: "yamanoku.net関連ページ",
    portal: "ポータルサイト",
    records: "Records",
    archives: "アーカイブ",
    portalUrl: "https://yamanoku.net"
  },
  en: {
    title: "Portfolio | yamanoku.net",
    description: translations.en["portfolio.lead"],
    lead: translations.en["portfolio.lead"],
    articles: translations.en["portfolio.articles"],
    github: translations.en["portfolio.github"],
    genres: translations.en["portfolio.genres"],
    genre: {
      website: translations.en["portfolio.genre.website"],
      event: translations.en["portfolio.genre.event"],
      poc: translations.en["portfolio.genre.poc"],
      "source-code": translations.en["portfolio.genre.sourceCode"],
      "advent-calendar": translations.en["portfolio.genre.adventCalendar"],
      book: translations.en["portfolio.genre.book"]
    },
    skip: translations.en["skip.to-content"],
    multilingual: "Languages",
    related: "Related pages on yamanoku.net",
    portal: "Portal",
    records: "Records",
    archives: "Archives",
    portalUrl: "https://yamanoku.net/en/"
  }
} as const;
