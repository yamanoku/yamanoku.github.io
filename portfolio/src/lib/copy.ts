import siteContent from "../../../src/data/site-content.json";

export type PortfolioLang = "ja" | "en";

const translations = siteContent.translations;

export const copy = {
  ja: {
    title: "Portfolio | yamanoku.net",
    description: translations.ja["portfolio.lead"],
    lead: translations.ja["portfolio.lead"],
    portfolio_related: translations.ja["portfolio.related"],
    github: translations.ja["portfolio.github"],
    categories: translations.ja["portfolio.categories"],
    category: {
      website: translations.ja["portfolio.categories.website"],
      event: translations.ja["portfolio.categories.event"],
      "source-code": translations.ja["portfolio.categories.sourceCode"],
      "advent-calendar": translations.ja["portfolio.categories.adventCalendar"],
      book: translations.ja["portfolio.categories.book"],
      curation: translations.ja["portfolio.categories.curation"]
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
    portfolio_related: translations.en["portfolio.related"],
    github: translations.en["portfolio.github"],
    categories: translations.en["portfolio.categories"],
    category: {
      website: translations.en["portfolio.categories.website"],
      event: translations.en["portfolio.categories.event"],
      "source-code": translations.en["portfolio.categories.sourceCode"],
      "advent-calendar": translations.en["portfolio.categories.adventCalendar"],
      book: translations.en["portfolio.categories.book"],
      curation: translations.en["portfolio.categories.curation"]
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
