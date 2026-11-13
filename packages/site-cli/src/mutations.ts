import {
  type ContentLink,
  type LinkGroupName,
  type ProfileField,
  type SectionName,
  type SiteContent,
  type SocialLink,
  type StageRecord,
  type StageResource,
  validateRecords,
  validateSiteContent,
  validateWorks,
  validateWritings,
  type Work,
  type WorkArticle,
  type Writing
} from "./model.js";

const clone = <T>(value: T): T => structuredClone(value);

export function addWriting(writings: Writing[], writing: Writing): Writing[] {
  if (writings.some((item) => item.url === writing.url)) {
    throw new Error(`同じURLの執筆が既にあります: ${writing.url}`);
  }
  return validateWritings(
    [...writings, writing]
      .sort(
        (left, right) => Date.parse(right.datetime) - Date.parse(left.datetime)
      )
      .slice(0, 5)
  );
}

export function replaceWriting(
  writings: Writing[],
  url: string,
  replacement: Writing
): Writing[] {
  const index = writings.findIndex((item) => item.url === url);
  if (index === -1) throw new Error(`執筆が見つかりません: ${url}`);
  const remaining = writings.filter((_, itemIndex) => itemIndex !== index);
  if (remaining.some((item) => item.url === replacement.url)) {
    throw new Error(`置換先URLの執筆が既にあります: ${replacement.url}`);
  }
  return validateWritings(
    [...remaining, replacement].sort(
      (left, right) => Date.parse(right.datetime) - Date.parse(left.datetime)
    )
  );
}

export function addStage(
  records: StageRecord[],
  record: StageRecord
): StageRecord[] {
  if (
    records.some(
      (item) => item.date === record.date && item.event === record.event
    )
  ) {
    throw new Error(
      `同じ日付・イベント名の登壇が既にあります: ${record.date} ${record.event}`
    );
  }
  return validateRecords(
    [...records, normalizeStageRecord(record)].sort((left, right) =>
      right.date.localeCompare(left.date)
    )
  );
}

export function updateStage(
  records: StageRecord[],
  date: string,
  event: string,
  update: Partial<StageRecord>
): StageRecord[] {
  const index = records.findIndex(
    (item) => item.date === date && item.event === event
  );
  if (index === -1) throw new Error(`登壇が見つかりません: ${date} ${event}`);
  const next = clone(records);
  const merged: StageRecord = { ...next[index], ...update };
  if ("eventUrl" in update && !update.eventUrl) delete merged.eventUrl;
  if ("description" in update && !update.description) delete merged.description;
  if ("note" in update && !update.note) delete merged.note;
  next[index] = normalizeStageRecord(merged);
  return validateRecords(
    next.sort((left, right) => right.date.localeCompare(left.date))
  );
}

export function removeStage(
  records: StageRecord[],
  date: string,
  event: string
): StageRecord[] {
  const next = records.filter(
    (item) => item.date !== date || item.event !== event
  );
  if (next.length === records.length)
    throw new Error(`登壇が見つかりません: ${date} ${event}`);
  return validateRecords(next);
}

export function setProfile(
  content: SiteContent,
  field: ProfileField,
  ja: string,
  en: string,
  rubyParts?: Array<{ text: string; reading: string }>
): SiteContent {
  const next = clone(content);
  if (field === "realName") {
    if (!rubyParts || rubyParts.length === 0) {
      throw new Error(
        "realName の更新には --ruby（例: 大山=おおやま）が必要です"
      );
    }
    const rubyText = rubyParts.map((part) => part.text).join("");
    if (rubyText !== ja) {
      throw new Error(
        `--ja (${ja}) と --ruby の本文 (${rubyText}) が一致しません`
      );
    }
    next.profile.realName = { ja: { parts: rubyParts }, en };
  } else {
    next.profile[field] = { ja, en };
  }
  return validateSiteContent(next);
}

const isSocialLink = (link: ContentLink | SocialLink): link is SocialLink =>
  "relMe" in link && typeof link.relMe === "boolean";

const resolveLinkGroup = (
  content: SiteContent,
  group: LinkGroupName
): {
  links: Array<ContentLink | SocialLink>;
  social: boolean;
  defaults: Pick<SocialLink, "visible" | "relMe">;
} => {
  if (group === "social" || group === "rel-me") {
    return {
      links: content.links.social,
      social: true,
      defaults:
        group === "rel-me"
          ? { visible: false, relMe: true }
          : { visible: true, relMe: false }
    };
  }
  return {
    links:
      group === "open-source" ? content.links.openSource : content.links.donate,
    social: false,
    defaults: { visible: false, relMe: false }
  };
};

const findLinkIndex = (
  links: Array<ContentLink | SocialLink>,
  group: LinkGroupName,
  id: string
): number =>
  links.findIndex((link) => {
    if (link.id !== id) return false;
    if (group !== "rel-me") return true;
    return isSocialLink(link) && link.relMe;
  });

export type LinkInput = {
  id: string;
  title: {
    ja: string;
    en: string;
  };
  url: string;
  visible?: boolean;
  relMe?: boolean;
};

export function addLink(
  content: SiteContent,
  group: LinkGroupName,
  input: LinkInput
): SiteContent {
  const next = clone(content);
  const target = resolveLinkGroup(next, group);
  if (target.links.some((link) => link.id === input.id)) {
    throw new Error(`${group} に同じidのリンクが既にあります: ${input.id}`);
  }
  const base: ContentLink = {
    id: input.id,
    title: input.title,
    url: input.url
  };
  target.links.push(
    target.social
      ? {
          ...base,
          visible: input.visible ?? target.defaults.visible,
          relMe: input.relMe ?? target.defaults.relMe
        }
      : base
  );
  return validateSiteContent(next);
}

export function updateLink(
  content: SiteContent,
  group: LinkGroupName,
  id: string,
  update: Partial<LinkInput>
): SiteContent {
  const next = clone(content);
  const target = resolveLinkGroup(next, group);
  const index = findLinkIndex(target.links, group, id);
  if (index === -1) throw new Error(`${group} のリンクが見つかりません: ${id}`);
  const current = target.links[index];
  const updated = {
    ...current,
    ...(update.id === undefined ? {} : { id: update.id }),
    ...(update.title === undefined ? {} : { title: update.title }),
    ...(update.url === undefined ? {} : { url: update.url })
  };
  if (target.social) {
    Object.assign(updated, {
      visible: update.visible ?? (current as SocialLink).visible,
      relMe: update.relMe ?? (current as SocialLink).relMe
    });
  }
  target.links[index] = updated;
  return validateSiteContent(next);
}

export function removeLink(
  content: SiteContent,
  group: LinkGroupName,
  id: string
): SiteContent {
  const next = clone(content);
  const target = resolveLinkGroup(next, group);
  const index = findLinkIndex(target.links, group, id);
  if (index === -1) throw new Error(`${group} のリンクが見つかりません: ${id}`);
  target.links.splice(index, 1);
  return validateSiteContent(next);
}

export function addJournalYear(
  content: SiteContent,
  year: number
): SiteContent {
  const next = clone(content);
  if (next.journal.years.includes(year))
    throw new Error(`${year}年は既にあります`);
  next.journal.years.push(year);
  next.journal.years.sort((left, right) => right - left);
  return validateSiteContent(next);
}

export function removeJournalYear(
  content: SiteContent,
  year: number
): SiteContent {
  const next = clone(content);
  if (!next.journal.years.includes(year))
    throw new Error(`${year}年は見つかりません`);
  next.journal.years = next.journal.years.filter((item) => item !== year);
  return validateSiteContent(next);
}

export function setTranslation(
  content: SiteContent,
  key: string,
  ja: string,
  en: string
): SiteContent {
  const next = clone(content);
  next.translations.ja[key] = ja;
  next.translations.en[key] = en;
  return validateSiteContent(next);
}

export function removeTranslation(
  content: SiteContent,
  key: string,
  referencedKeys: ReadonlySet<string>
): SiteContent {
  const next = clone(content);
  if (!(key in next.translations.ja))
    throw new Error(`翻訳キーが見つかりません: ${key}`);
  if (referencedKeys.has(key)) {
    throw new Error(`使用中の翻訳キーは削除できません: ${key}`);
  }
  delete next.translations.ja[key];
  delete next.translations.en[key];
  return validateSiteContent(next);
}

const sortWorks = (works: Work[]): void => {
  works.sort((left, right) =>
    left.createdAt < right.createdAt
      ? -1
      : left.createdAt > right.createdAt
        ? 1
        : 0
  );
};

export function addWork(works: Work[], work: Work): Work[] {
  const next = clone(works);
  if (next.some((item) => item.id === work.id)) {
    throw new Error(`同じidの製作実績が既にあります: ${work.id}`);
  }
  next.push(normalizeWork(work));
  sortWorks(next);
  return validateWorks(next);
}

const optionalWorkUrl = (
  value: string | null | undefined,
  current: string | undefined
): string | undefined => {
  if (value === undefined) return current;
  if (value === null || value === "") return undefined;
  return value;
};

const normalizeWork = (work: Work): Work => ({
  id: work.id,
  name: work.name,
  description: work.description,
  createdAt: work.createdAt,
  technologies: work.technologies,
  articles: work.articles,
  ...(work.github ? { github: work.github } : {}),
  ...(work.site ? { site: work.site } : {})
});

export type WorkUpdate = Partial<Omit<Work, "github" | "site">> & {
  github?: string | null;
  site?: string | null;
};

export function updateWork(
  works: Work[],
  id: string,
  update: WorkUpdate
): Work[] {
  const next = clone(works);
  const index = next.findIndex((item) => item.id === id);
  if (index === -1) throw new Error(`製作実績が見つかりません: ${id}`);
  const current = next[index];
  const updated = normalizeWork({
    id: update.id ?? current.id,
    name: update.name ?? current.name,
    description: update.description ?? current.description,
    createdAt: update.createdAt ?? current.createdAt,
    technologies: update.technologies ?? current.technologies,
    articles: update.articles ?? current.articles,
    github: optionalWorkUrl(update.github, current.github),
    site: optionalWorkUrl(update.site, current.site)
  });
  if (
    updated.id !== current.id &&
    next.some((item) => item.id === updated.id)
  ) {
    throw new Error(`同じidの製作実績が既にあります: ${updated.id}`);
  }
  next[index] = updated;
  sortWorks(next);
  return validateWorks(next);
}

export function removeWork(works: Work[], id: string): Work[] {
  const next = clone(works);
  const index = next.findIndex((item) => item.id === id);
  if (index === -1) throw new Error(`製作実績が見つかりません: ${id}`);
  next.splice(index, 1);
  return validateWorks(next);
}

export function setSection(
  content: SiteContent,
  section: SectionName,
  visible: boolean
): SiteContent {
  const next = clone(content);
  next.sections[section] = visible;
  return validateSiteContent(next);
}

export function normalizeStageRecord(record: StageRecord): StageRecord {
  return {
    date: record.date,
    event: record.event,
    ...(record.eventUrl ? { eventUrl: record.eventUrl } : {}),
    resources: record.resources,
    ...(record.description ? { description: record.description } : {}),
    ...(record.note ? { note: record.note } : {})
  };
}

export function pairArticles(titles: string[], urls: string[]): WorkArticle[] {
  if (titles.length !== urls.length) {
    throw new Error(
      "--article-title と --article-url は同じ件数を指定してください"
    );
  }
  return titles.map((title, index) => ({ title, url: urls[index] }));
}

export function pairResources(
  titles: string[],
  urls: string[]
): StageResource[] {
  if (titles.length !== urls.length) {
    throw new Error(
      "--resource-title と --resource-url は同じ件数を指定してください"
    );
  }
  return titles.map((title, index) => ({ title, url: urls[index] }));
}

export function parseRubyParts(
  values: string[]
): Array<{ text: string; reading: string }> {
  return values.map((value) => {
    const separator = value.indexOf("=");
    if (separator <= 0 || separator === value.length - 1) {
      throw new Error(`--ruby は 本文=よみ の形式にしてください: ${value}`);
    }
    return {
      text: value.slice(0, separator),
      reading: value.slice(separator + 1)
    };
  });
}
