export const PROFILE_FIELDS = [
  "realName",
  "handleName",
  "birthday",
  "sex",
  "birthplace",
  "location",
  "family"
] as const;

export const SECTION_NAMES = [
  "basic",
  "openSource",
  "presentations",
  "podcast",
  "journal",
  "social",
  "contact"
] as const;

export const LINK_GROUPS = [
  "social",
  "open-source",
  "donate",
  "rel-me"
] as const;

export type ProfileField = (typeof PROFILE_FIELDS)[number];
export type SectionName = (typeof SECTION_NAMES)[number];
export type LinkGroupName = (typeof LINK_GROUPS)[number];
export type Locale = "ja" | "en";

export type LocalizedText = {
  ja: string;
  en: string;
};

export type RubyPart = {
  text: string;
  reading: string;
};

export type Profile = {
  realName: {
    ja: {
      parts: RubyPart[];
    };
    en: string;
  };
  handleName: LocalizedText;
  birthday: LocalizedText;
  sex: LocalizedText;
  birthplace: LocalizedText;
  location: LocalizedText;
  family: LocalizedText;
};

export type SocialLink = {
  id: string;
  title: LocalizedText;
  url: string;
  visible: boolean;
  relMe: boolean;
};

export type ContentLink = {
  id: string;
  title: LocalizedText;
  url: string;
};

export type SiteContent = {
  profile: Profile;
  translations: Record<Locale, Record<string, string>>;
  journal: {
    homeUrl: string;
    entryBaseUrl: string;
    years: number[];
  };
  links: {
    social: SocialLink[];
    openSource: ContentLink[];
    donate: ContentLink[];
  };
  sections: Record<SectionName, boolean>;
};

export type Writing = {
  title: string;
  url: string;
  datetime: string;
};

export type StageResource = {
  title: string;
  url: string;
};

export type StageRecord = {
  date: string;
  event: string;
  resources: StageResource[];
  note?: string;
};

export type PodcastData = {
  feedUrl: string;
  homeUrl: string;
  episodes: Array<{
    id: string;
    title: string;
    url: string;
    datetime: string;
  }>;
};

export class DataValidationError extends Error {
  readonly issues: string[];

  constructor(issues: string[]) {
    super(`データ検証に失敗しました:\n- ${issues.join("\n- ")}`);
    this.name = "DataValidationError";
    this.issues = issues;
  }
}

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const isHttpUrl = (value: unknown): value is string => {
  if (typeof value !== "string") return false;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

const isIsoDatetime = (value: unknown): value is string =>
  typeof value === "string" &&
  /^\d{4}-\d{2}-\d{2}T/.test(value) &&
  !Number.isNaN(Date.parse(value));

const isDate = (value: unknown): value is string => {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }
  const parsed = new Date(`${value}T00:00:00Z`);
  return (
    !Number.isNaN(parsed.valueOf()) && parsed.toISOString().startsWith(value)
  );
};

const addStringIssue = (
  issues: string[],
  value: unknown,
  path: string
): value is string => {
  if (typeof value === "string" && value.trim() !== "") return true;
  issues.push(`${path} は空でない文字列にしてください`);
  return false;
};

const validateLocalizedText = (
  value: unknown,
  path: string,
  issues: string[]
): value is LocalizedText => {
  if (!isObject(value)) {
    issues.push(`${path} は ja/en を持つオブジェクトにしてください`);
    return false;
  }
  return (
    addStringIssue(issues, value.ja, `${path}.ja`) &&
    addStringIssue(issues, value.en, `${path}.en`)
  );
};

const validateLink = (
  value: unknown,
  path: string,
  issues: string[],
  social: boolean
): value is ContentLink | SocialLink => {
  if (!isObject(value)) {
    issues.push(`${path} はオブジェクトにしてください`);
    return false;
  }
  addStringIssue(issues, value.id, `${path}.id`);
  validateLocalizedText(value.title, `${path}.title`, issues);
  if (!isHttpUrl(value.url))
    issues.push(`${path}.url はHTTP(S) URLにしてください`);
  if (social) {
    if (typeof value.visible !== "boolean")
      issues.push(`${path}.visible はbooleanにしてください`);
    if (typeof value.relMe !== "boolean")
      issues.push(`${path}.relMe はbooleanにしてください`);
  }
  return true;
};

export function validateSiteContent(value: unknown): SiteContent {
  const issues: string[] = [];
  if (!isObject(value))
    throw new DataValidationError([
      "site-content はオブジェクトにしてください"
    ]);

  if (!isObject(value.profile)) {
    issues.push("profile はオブジェクトにしてください");
  } else {
    for (const field of PROFILE_FIELDS) {
      const fieldValue = value.profile[field];
      if (field === "realName") {
        if (!isObject(fieldValue) || !isObject(fieldValue.ja)) {
          issues.push(
            "profile.realName は ja.parts と en を持つ必要があります"
          );
          continue;
        }
        if (
          !Array.isArray(fieldValue.ja.parts) ||
          fieldValue.ja.parts.length === 0
        ) {
          issues.push("profile.realName.ja.parts は1件以上必要です");
        } else {
          fieldValue.ja.parts.forEach((part, index) => {
            if (!isObject(part)) {
              issues.push(
                `profile.realName.ja.parts[${index}] はオブジェクトにしてください`
              );
              return;
            }
            addStringIssue(
              issues,
              part.text,
              `profile.realName.ja.parts[${index}].text`
            );
            addStringIssue(
              issues,
              part.reading,
              `profile.realName.ja.parts[${index}].reading`
            );
          });
        }
        addStringIssue(issues, fieldValue.en, "profile.realName.en");
      } else {
        validateLocalizedText(fieldValue, `profile.${field}`, issues);
      }
    }
  }

  if (!isObject(value.translations)) {
    issues.push("translations はオブジェクトにしてください");
  } else if (
    !isObject(value.translations.ja) ||
    !isObject(value.translations.en)
  ) {
    issues.push("translations.ja/en はオブジェクトにしてください");
  } else {
    const translations = {
      ja: value.translations.ja,
      en: value.translations.en
    };
    const jaKeys = Object.keys(translations.ja).sort();
    const enKeys = Object.keys(translations.en).sort();
    if (jaKeys.join("\0") !== enKeys.join("\0")) {
      issues.push("translations.ja/en のキーを完全一致させてください");
    }
    for (const locale of ["ja", "en"] as const) {
      for (const [key, translation] of Object.entries(translations[locale])) {
        if (typeof translation !== "string") {
          issues.push(`translations.${locale}.${key} は文字列にしてください`);
        }
      }
    }
  }

  if (!isObject(value.journal)) {
    issues.push("journal はオブジェクトにしてください");
  } else {
    if (!isHttpUrl(value.journal.homeUrl))
      issues.push("journal.homeUrl はHTTP(S) URLにしてください");
    if (!isHttpUrl(value.journal.entryBaseUrl))
      issues.push("journal.entryBaseUrl はHTTP(S) URLにしてください");
    if (
      !Array.isArray(value.journal.years) ||
      value.journal.years.some((year) => !Number.isInteger(year))
    ) {
      issues.push("journal.years は年の配列にしてください");
    } else {
      const years = value.journal.years as number[];
      if (new Set(years).size !== years.length)
        issues.push("journal.years に重複があります");
      if (years.some((year, index) => index > 0 && years[index - 1] < year))
        issues.push("journal.years は新しい順にしてください");
    }
  }

  if (!isObject(value.links)) {
    issues.push("links はオブジェクトにしてください");
  } else {
    for (const [group, social] of [
      ["social", true],
      ["openSource", false],
      ["donate", false]
    ] as const) {
      const links = value.links[group];
      if (!Array.isArray(links)) {
        issues.push(`links.${group} は配列にしてください`);
        continue;
      }
      links.forEach((link, index) => {
        validateLink(link, `links.${group}[${index}]`, issues, social);
      });
      const ids = links
        .filter(isObject)
        .map((link) => link.id)
        .filter((id): id is string => typeof id === "string");
      if (new Set(ids).size !== ids.length)
        issues.push(`links.${group} のidが重複しています`);
    }
  }

  if (!isObject(value.sections)) {
    issues.push("sections はオブジェクトにしてください");
  } else {
    for (const section of SECTION_NAMES) {
      if (typeof value.sections[section] !== "boolean") {
        issues.push(`sections.${section} はbooleanにしてください`);
      }
    }
  }

  if (issues.length > 0) throw new DataValidationError(issues);
  return value as SiteContent;
}

export function validateWritings(value: unknown): Writing[] {
  const issues: string[] = [];
  if (!Array.isArray(value))
    throw new DataValidationError(["writings は配列にしてください"]);
  if (value.length !== 5)
    issues.push(`writings は必ず5件にしてください（現在${value.length}件）`);
  value.forEach((item, index) => {
    if (!isObject(item)) {
      issues.push(`writings[${index}] はオブジェクトにしてください`);
      return;
    }
    addStringIssue(issues, item.title, `writings[${index}].title`);
    if (!isHttpUrl(item.url))
      issues.push(`writings[${index}].url はHTTP(S) URLにしてください`);
    if (!isIsoDatetime(item.datetime))
      issues.push(`writings[${index}].datetime はISO日時にしてください`);
  });
  const urls = value.filter(isObject).map((item) => item.url);
  if (new Set(urls).size !== urls.length)
    issues.push("writings のURLが重複しています");
  for (let index = 1; index < value.length; index++) {
    const previous = isObject(value[index - 1])
      ? value[index - 1].datetime
      : undefined;
    const current = isObject(value[index]) ? value[index].datetime : undefined;
    if (
      typeof previous === "string" &&
      typeof current === "string" &&
      Date.parse(previous) < Date.parse(current)
    ) {
      issues.push("writings は新しい順にしてください");
      break;
    }
  }
  if (issues.length > 0) throw new DataValidationError(issues);
  return value as Writing[];
}

export function validateRecords(value: unknown): StageRecord[] {
  const issues: string[] = [];
  if (!Array.isArray(value))
    throw new DataValidationError(["records は配列にしてください"]);
  value.forEach((item, index) => {
    if (!isObject(item)) {
      issues.push(`records[${index}] はオブジェクトにしてください`);
      return;
    }
    if (!isDate(item.date))
      issues.push(`records[${index}].date はYYYY-MM-DDにしてください`);
    addStringIssue(issues, item.event, `records[${index}].event`);
    if (item.note !== undefined && typeof item.note !== "string")
      issues.push(`records[${index}].note は文字列にしてください`);
    if (!Array.isArray(item.resources)) {
      issues.push(`records[${index}].resources は配列にしてください`);
      return;
    }
    item.resources.forEach((resource, resourceIndex) => {
      if (!isObject(resource)) {
        issues.push(
          `records[${index}].resources[${resourceIndex}] はオブジェクトにしてください`
        );
        return;
      }
      addStringIssue(
        issues,
        resource.title,
        `records[${index}].resources[${resourceIndex}].title`
      );
      if (!isHttpUrl(resource.url))
        issues.push(
          `records[${index}].resources[${resourceIndex}].url はHTTP(S) URLにしてください`
        );
    });
  });
  const keys = value
    .filter(isObject)
    .map((item) => `${String(item.date)}\0${String(item.event)}`);
  if (new Set(keys).size !== keys.length)
    issues.push("records の日付・イベント名が重複しています");
  for (let index = 1; index < value.length; index++) {
    const previous = isObject(value[index - 1])
      ? value[index - 1].date
      : undefined;
    const current = isObject(value[index]) ? value[index].date : undefined;
    if (
      typeof previous === "string" &&
      typeof current === "string" &&
      previous < current
    ) {
      issues.push("records は新しい順にしてください");
      break;
    }
  }
  if (issues.length > 0) throw new DataValidationError(issues);
  return value as StageRecord[];
}

export function validatePodcast(value: unknown): PodcastData {
  const issues: string[] = [];
  if (!isObject(value))
    throw new DataValidationError([
      "Podcastデータはオブジェクトにしてください"
    ]);
  if (!isHttpUrl(value.feedUrl))
    issues.push("podcast.feedUrl はHTTP(S) URLにしてください");
  if (!isHttpUrl(value.homeUrl))
    issues.push("podcast.homeUrl はHTTP(S) URLにしてください");
  if (
    !Array.isArray(value.episodes) ||
    value.episodes.length === 0 ||
    value.episodes.length > 5
  ) {
    issues.push("podcast.episodes は1〜5件にしてください");
  } else {
    value.episodes.forEach((episode, index) => {
      if (!isObject(episode)) {
        issues.push(`podcast.episodes[${index}] はオブジェクトにしてください`);
        return;
      }
      addStringIssue(issues, episode.id, `podcast.episodes[${index}].id`);
      addStringIssue(issues, episode.title, `podcast.episodes[${index}].title`);
      if (!isHttpUrl(episode.url))
        issues.push(
          `podcast.episodes[${index}].url はHTTP(S) URLにしてください`
        );
      if (!isIsoDatetime(episode.datetime))
        issues.push(
          `podcast.episodes[${index}].datetime はISO日時にしてください`
        );
    });
  }
  if (issues.length > 0) throw new DataValidationError(issues);
  return value as PodcastData;
}
