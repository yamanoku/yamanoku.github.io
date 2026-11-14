export type WorkArticle = {
  title: string;
  url: string;
};

export const WORK_GENRES = [
  "website",
  "event",
  "poc",
  "source-code",
  "advent-calendar",
  "book"
] as const;

export type WorkGenre = (typeof WORK_GENRES)[number];

export type WorkItem = {
  id: string;
  name: string;
  description: {
    ja: string;
    en: string;
  };
  createdAt: string;
  genres: WorkGenre[];
  technologies: string[];
  articles: WorkArticle[];
  github?: string;
  site?: string;
  thumbnail?: {
    url: string;
    width: number;
    height: number;
  };
};

export const dayLabel = (iso: string, lang: "ja" | "en") => {
  const [year, month, day] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat(lang === "ja" ? "ja-JP" : "en", {
    month: "long",
    day: "numeric",
    timeZone: "UTC"
  }).format(new Date(Date.UTC(year, month - 1, day)));
};

export const siteLabel = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

export const orderPortfolio = (portfolio: WorkItem[], lang: "ja" | "en") =>
  [...portfolio]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .map((work) => ({
      work,
      label: dayLabel(work.createdAt, lang)
    }));
