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
    skip: translations.en["skip.to-content"],
    multilingual: "Languages",
    related: "Related pages on yamanoku.net",
    portal: "Portal",
    records: "Records",
    archives: "Archives",
    portalUrl: "https://yamanoku.net/en/"
  }
} as const;
