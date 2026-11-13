export type WorkArticle = {
  title: string;
  url: string;
};

export type WorkItem = {
  id: string;
  name: string;
  description: {
    ja: string;
    en: string;
  };
  createdAt: string;
  technologies: string[];
  articles: WorkArticle[];
  github?: string;
  site?: string;
};

export const monthLabel = (iso: string, lang: "ja" | "en") => {
  const [year, month] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat(lang === "ja" ? "ja-JP" : "en", {
    year: "numeric",
    month: "short",
    timeZone: "UTC"
  }).format(new Date(Date.UTC(year, month - 1, 1)));
};

export const siteLabel = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

export const orderWorks = (works: WorkItem[], lang: "ja" | "en") =>
  [...works]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .map((work) => ({
      work,
      label: monthLabel(work.createdAt, lang)
    }));
