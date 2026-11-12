import siteContent from "../../../src/data/site-content.json";

export type WorksLang = "ja" | "en";

const translations = siteContent.translations;

export const copy = {
  ja: {
    title: "Works | yamanoku.net",
    description: "やまのく（yamanoku）が公開しているオープンソースの製作実績",
    lead: translations.ja["works.lead"],
    articles: translations.ja["works.articles"],
    github: translations.ja["works.github"],
    multilingual: "多言語ページ",
    related: "yamanoku.net関連ページ",
    portal: "ポータルサイト",
    records: "登壇記録",
    archives: "アーカイブ",
    portalUrl: "https://yamanoku.net"
  },
  en: {
    title: "Works | yamanoku.net",
    description: "Open source projects published by yamanoku.",
    lead: translations.en["works.lead"],
    articles: translations.en["works.articles"],
    github: translations.en["works.github"],
    multilingual: "Languages",
    related: "Related pages on yamanoku.net",
    portal: "Portal",
    records: "Records",
    archives: "Archives",
    portalUrl: "https://yamanoku.net/en/"
  }
} as const;
