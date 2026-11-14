import { spawn } from "node:child_process";

import { define } from "gunshi";

import { SiteCliError } from "./errors.js";
import {
  LINK_GROUPS,
  type LinkGroupName,
  PROFILE_FIELDS,
  type ProfileField,
  SECTION_NAMES,
  type SectionName,
  WORK_CATEGORIES,
  isWorkCategory,
  normalizeWorkCategories,
  type WorkCategory,
  validateRecords,
  validateSiteContent,
  validatePortfolio,
  validateWritings
} from "./model.js";
import {
  addJournalYear,
  addLink,
  addStage,
  addWork,
  addWriting,
  pairArticles,
  pairResources,
  parseRubyParts,
  removeJournalYear,
  removeLink,
  removeStage,
  removeTranslation,
  removeWork,
  replaceWriting,
  setProfile,
  setSection,
  setTranslation,
  updateLink,
  updateStage,
  updateWork
} from "./mutations.js";
import { fetchPodcast } from "./podcast.js";
import {
  flagValue,
  presentDocument,
  presentLine,
  presentMutation
} from "./presentation.js";
import {
  collectReferencedTranslationKeys,
  getDataPaths,
  getRepositoryRoot,
  readJson,
  readRepositoryData,
  validateRepository,
  writeJson
} from "./repository.js";

type ArgSchema = {
  type?: string;
  required?: boolean;
  description?: string;
  short?: string;
  default?: unknown;
  multiple?: boolean;
  negatable?: boolean;
};

export type CommandNode = {
  name?: string;
  description?: string;
  args?: Record<string, ArgSchema>;
  examples?: string | ((...args: never[]) => unknown);
  internal?: boolean;
  toKebab?: boolean;
  subCommands?: Record<string, CommandNode>;
};

const DEPRECATED: Record<string, string> = {
  "journal add-year": "journal years add",
  "journal remove-year": "journal years remove",
  "profile show": "profile inspect",
  "sections show": "sections enable",
  "sections hide": "sections disable",
  "section show": "sections enable",
  "section hide": "sections disable"
};

export const deprecationFor = (
  commandPath: readonly string[]
): string | undefined => {
  const key = commandPath.join(" ");
  const replacement = DEPRECATED[key];
  if (!replacement) return undefined;
  return `${key} は非推奨です。site ${replacement} を使ってください。`;
};

const asNode = (command: object): CommandNode => command as CommandNode;

const asAlias = <T extends object>(command: T): T & { internal: true } => ({
  ...command,
  internal: true as const
});

const groupHelp = async (ctx: { commandPath: string[] }): Promise<void> => {
  const { showHelp } = await import("./cli.js");
  await showHelp(ctx.commandPath);
};

const consentToWrite = (values: object): boolean => {
  const write = flagValue(values, "write") === true;
  const dryRun = flagValue(values, "dry-run") === true;
  if (write && dryRun) {
    throw new SiteCliError({
      message: "--write と --dry-run は同時に使えません。",
      exitCode: 2,
      reason: "invalid_arguments",
      next: ["site --help"]
    });
  }
  return write;
};

const readSiteContent = async () => {
  const paths = getDataPaths();
  return {
    paths,
    content: validateSiteContent(await readJson(paths.siteContent))
  };
};

const readWritings = async () => {
  const paths = getDataPaths();
  return {
    paths,
    writings: validateWritings(await readJson(paths.writings))
  };
};

const readRecords = async () => {
  const paths = getDataPaths();
  return {
    paths,
    records: validateRecords(await readJson(paths.records))
  };
};

const readPortfolio = async () => {
  const paths = getDataPaths();
  return {
    paths,
    portfolio: validatePortfolio(await readJson(paths.portfolio))
  };
};

const usage = (message: string): SiteCliError =>
  new SiteCliError({
    message,
    exitCode: 2,
    reason: "invalid_arguments"
  });

const writingListCommand = define({
  name: "list",
  description: "表示中の執筆5件を出す",
  examples: `表示中の執筆を見る
  site writings list`,
  run: async () => {
    const writings = (await readWritings()).writings;
    presentDocument(writings, { writings });
  }
});

const writingAddCommand = define({
  name: "add",
  description: "執筆を追加し、最新5件にする",
  examples: `追加前に差分を見る
  site writings add --title "記事タイトル" --url "https://example.com/article" --datetime "2026-08-29T12:00:00+09:00"

確認した内容を保存する
  site writings add --title "記事タイトル" --url "https://example.com/article" --datetime "2026-08-29T12:00:00+09:00" --write`,
  args: {
    title: { type: "string", required: true, description: "記事タイトル" },
    url: { type: "string", required: true, description: "記事URL" },
    datetime: { type: "string", required: true, description: "公開ISO日時" }
  },
  run: async (ctx) => {
    const write = consentToWrite(ctx.values);
    const { paths, writings } = await readWritings();
    const next = addWriting(writings, {
      title: ctx.values.title,
      url: ctx.values.url,
      datetime: ctx.values.datetime
    });
    const result = await writeJson(paths.writings, next, { write });
    presentMutation({
      resource: "執筆",
      id: ctx.values.url,
      outcome: "added",
      next: [
        "writings",
        "add",
        "--title",
        ctx.values.title,
        "--url",
        ctx.values.url,
        "--datetime",
        ctx.values.datetime,
        "--write"
      ],
      result
    });
  }
});

const writingRemoveCommand = define({
  name: "remove",
  description: "指定URLの執筆を別の1件と入れ替える",
  toKebab: true,
  examples: `末尾を入れ替える前に差分を見る
  site writings remove "https://example.com/old" --replacement-title "新しい記事" --replacement-url "https://example.com/new" --replacement-datetime "2026-08-29T12:00:00+09:00"`,
  args: {
    url: { type: "positional", required: true, description: "外す記事のURL" },
    replacementTitle: {
      type: "string",
      required: true,
      description: "代わりに入れる記事タイトル"
    },
    replacementUrl: {
      type: "string",
      required: true,
      description: "代わりに入れる記事URL"
    },
    replacementDatetime: {
      type: "string",
      required: true,
      description: "代わりに入れる記事の公開ISO日時"
    }
  },
  run: async (ctx) => {
    const write = consentToWrite(ctx.values);
    const { paths, writings } = await readWritings();
    const next = replaceWriting(writings, ctx.values.url, {
      title: ctx.values.replacementTitle,
      url: ctx.values.replacementUrl,
      datetime: ctx.values.replacementDatetime
    });
    const result = await writeJson(paths.writings, next, { write });
    presentMutation({
      resource: "執筆",
      id: ctx.values.replacementUrl,
      outcome: "replaced",
      next: [
        "writings",
        "remove",
        ctx.values.url,
        "--replacement-title",
        ctx.values.replacementTitle,
        "--replacement-url",
        ctx.values.replacementUrl,
        "--replacement-datetime",
        ctx.values.replacementDatetime,
        "--write"
      ],
      result
    });
  }
});

const writingCommand = define({
  name: "writings",
  description: "表示する執筆5件を更新する",
  run: groupHelp,
  subCommands: {
    add: writingAddCommand,
    remove: writingRemoveCommand,
    list: writingListCommand,
    ls: asAlias(writingListCommand),
    rm: asAlias(writingRemoveCommand)
  }
});

const stageListCommand = define({
  name: "list",
  description: "登壇記録を出す",
  examples: `登壇記録を見る
  site stages list`,
  run: async () => {
    const stages = (await readRecords()).records;
    presentDocument(stages, { stages });
  }
});

const resourceArgs = {
  resourceTitle: {
    type: "string" as const,
    multiple: true as const,
    description: "資料タイトル。複数あるときは同じ順で繰り返す"
  },
  resourceUrl: {
    type: "string" as const,
    multiple: true as const,
    description: "資料URL。タイトルと同じ件数、同じ順で繰り返す"
  }
};

const eventUrlArg = {
  eventUrl: {
    type: "string" as const,
    description: "イベントの公式ページ、または開催ページのURL"
  }
};

const stageSelector = (date: string, event: string): string =>
  `${date} ${event}`;

const stageAddCommand = define({
  name: "add",
  description: "登壇記録を追加する",
  toKebab: true,
  examples: `資料のある登壇を追加する
  site stages add --date 2026-10-24 --event "Vue Fes Japan 2026" --event-url "https://vuefes.jp/2026" --resource-title "資料タイトル" --resource-url "https://example.com/slides"

資料未定の予定を追加する
  site stages add --date 2026-10-24 --event "Vue Fes Japan 2026" --note TBD`,
  args: {
    date: { type: "string", required: true, description: "開催日。YYYY-MM-DD" },
    event: {
      type: "string",
      required: true,
      description: "イベント名。完全一致"
    },
    ...eventUrlArg,
    ...resourceArgs,
    description: { type: "string", description: "登壇内容の要約" },
    note: { type: "string", description: "資料未定などの注記" }
  },
  run: async (ctx) => {
    const write = consentToWrite(ctx.values);
    const { paths, records } = await readRecords();
    const next = addStage(records, {
      date: ctx.values.date,
      event: ctx.values.event,
      resources: pairResources(
        ctx.values.resourceTitle ?? [],
        ctx.values.resourceUrl ?? []
      ),
      ...(ctx.values.eventUrl === undefined
        ? {}
        : { eventUrl: ctx.values.eventUrl }),
      ...(ctx.values.description === undefined
        ? {}
        : { description: ctx.values.description }),
      ...(ctx.values.note === undefined ? {} : { note: ctx.values.note })
    });
    const result = await writeJson(paths.records, next, { write });
    const nextArgs = [
      "stages",
      "add",
      "--date",
      ctx.values.date,
      "--event",
      ctx.values.event
    ];
    if (ctx.values.eventUrl) nextArgs.push("--event-url", ctx.values.eventUrl);
    for (const title of ctx.values.resourceTitle ?? []) {
      nextArgs.push("--resource-title", title);
    }
    for (const url of ctx.values.resourceUrl ?? []) {
      nextArgs.push("--resource-url", url);
    }
    if (ctx.values.description)
      nextArgs.push("--description", ctx.values.description);
    if (ctx.values.note) nextArgs.push("--note", ctx.values.note);
    nextArgs.push("--write");
    presentMutation({
      resource: "登壇",
      id: stageSelector(ctx.values.date, ctx.values.event),
      outcome: "added",
      next: nextArgs,
      result
    });
  }
});

const stageUpdateCommand = define({
  name: "update",
  description: "開催日とイベント名が一致する登壇を更新する",
  toKebab: true,
  examples: `開催ページを追加する
  site stages update 2026-10-24 --event "Vue Fes Japan 2026" --event-url "https://vuefes.jp/2026"`,
  args: {
    date: {
      type: "positional",
      required: true,
      description: "現在の開催日。YYYY-MM-DD、完全一致"
    },
    event: {
      type: "string",
      required: true,
      description: "現在のイベント名。完全一致、大文字小文字を区別"
    },
    newDate: { type: "string", description: "新しい開催日" },
    newEvent: { type: "string", description: "新しいイベント名" },
    ...eventUrlArg,
    ...resourceArgs,
    description: {
      type: "string",
      description: "登壇内容の要約。空文字で消す"
    },
    note: { type: "string", description: "注記。空文字で消す" }
  },
  run: async (ctx) => {
    const write = consentToWrite(ctx.values);
    const { paths, records } = await readRecords();
    const resourceSpecified =
      ctx.values.resourceTitle !== undefined ||
      ctx.values.resourceUrl !== undefined;
    const next = updateStage(records, ctx.values.date, ctx.values.event, {
      ...(ctx.values.newDate === undefined ? {} : { date: ctx.values.newDate }),
      ...(ctx.values.newEvent === undefined
        ? {}
        : { event: ctx.values.newEvent }),
      ...(ctx.values.eventUrl === undefined
        ? {}
        : ctx.values.eventUrl === ""
          ? { eventUrl: undefined }
          : { eventUrl: ctx.values.eventUrl }),
      ...(resourceSpecified
        ? {
            resources: pairResources(
              ctx.values.resourceTitle ?? [],
              ctx.values.resourceUrl ?? []
            )
          }
        : {}),
      ...(ctx.values.description === undefined
        ? {}
        : ctx.values.description === ""
          ? { description: undefined }
          : { description: ctx.values.description }),
      ...(ctx.values.note === undefined
        ? {}
        : ctx.values.note === ""
          ? { note: undefined }
          : { note: ctx.values.note })
    });
    const result = await writeJson(paths.records, next, { write });
    const date = ctx.values.newDate ?? ctx.values.date;
    const event = ctx.values.newEvent ?? ctx.values.event;
    const nextArgs = [
      "stages",
      "update",
      ctx.values.date,
      "--event",
      ctx.values.event
    ];
    if (ctx.values.newDate) nextArgs.push("--new-date", ctx.values.newDate);
    if (ctx.values.newEvent) nextArgs.push("--new-event", ctx.values.newEvent);
    if (ctx.values.eventUrl !== undefined) {
      nextArgs.push("--event-url", ctx.values.eventUrl);
    }
    for (const title of ctx.values.resourceTitle ?? []) {
      nextArgs.push("--resource-title", title);
    }
    for (const url of ctx.values.resourceUrl ?? []) {
      nextArgs.push("--resource-url", url);
    }
    if (ctx.values.description !== undefined) {
      nextArgs.push("--description", ctx.values.description);
    }
    if (ctx.values.note !== undefined) nextArgs.push("--note", ctx.values.note);
    nextArgs.push("--write");
    presentMutation({
      resource: "登壇",
      id: stageSelector(date, event),
      outcome: "updated",
      next: nextArgs,
      result
    });
  }
});

const stageRemoveCommand = define({
  name: "remove",
  description: "開催日とイベント名が一致する登壇を記録から外す",
  examples: `登壇を外す前に差分を見る
  site stages remove 2026-10-24 --event "Vue Fes Japan 2026"`,
  args: {
    date: {
      type: "positional",
      required: true,
      description: "開催日。YYYY-MM-DD、完全一致"
    },
    event: {
      type: "string",
      required: true,
      description: "イベント名。完全一致、大文字小文字を区別"
    }
  },
  run: async (ctx) => {
    const write = consentToWrite(ctx.values);
    const { paths, records } = await readRecords();
    const next = removeStage(records, ctx.values.date, ctx.values.event);
    const result = await writeJson(paths.records, next, { write });
    presentMutation({
      resource: "登壇",
      id: stageSelector(ctx.values.date, ctx.values.event),
      outcome: "removed",
      next: [
        "stages",
        "remove",
        ctx.values.date,
        "--event",
        ctx.values.event,
        "--write"
      ],
      result
    });
  }
});

const stageCommand = define({
  name: "stages",
  description: "登壇記録を更新する",
  run: groupHelp,
  subCommands: {
    add: stageAddCommand,
    update: stageUpdateCommand,
    remove: stageRemoveCommand,
    list: stageListCommand,
    ls: asAlias(stageListCommand),
    rm: asAlias(stageRemoveCommand)
  }
});

const profileInspectCommand = define({
  name: "inspect",
  description: "プロフィールを出す",
  examples: `プロフィールを見る
  site profile inspect`,
  run: async () => {
    const profile = (await readSiteContent()).content.profile;
    presentDocument(profile, { profile });
  }
});

const profileSetCommand = define({
  name: "set",
  description: "プロフィール項目の日英を同時に更新する",
  examples: `所在地を更新する
  site profile set location --ja "千葉県流山市" --en "Nagareyama, Chiba" --write`,
  args: {
    field: {
      type: "positional",
      required: true,
      description: PROFILE_FIELDS.join(", ")
    },
    ja: { type: "string", required: true, description: "日本語の値" },
    en: { type: "string", required: true, description: "英語の値" },
    ruby: {
      type: "string",
      multiple: true,
      description: "本名の本文=よみ。複数指定できる"
    }
  },
  run: async (ctx) => {
    if (!PROFILE_FIELDS.includes(ctx.values.field as ProfileField)) {
      throw usage(`field は ${PROFILE_FIELDS.join(", ")} から選んでください。`);
    }
    const write = consentToWrite(ctx.values);
    const { paths, content } = await readSiteContent();
    const next = setProfile(
      content,
      ctx.values.field as ProfileField,
      ctx.values.ja,
      ctx.values.en,
      ctx.values.ruby ? parseRubyParts(ctx.values.ruby) : undefined
    );
    const result = await writeJson(paths.siteContent, next, { write });
    const nextArgs = [
      "profile",
      "set",
      ctx.values.field,
      "--ja",
      ctx.values.ja,
      "--en",
      ctx.values.en
    ];
    for (const ruby of ctx.values.ruby ?? []) nextArgs.push("--ruby", ruby);
    nextArgs.push("--write");
    presentMutation({
      resource: "プロフィール",
      id: ctx.values.field,
      outcome: "updated",
      next: nextArgs,
      result
    });
  }
});

const profileCommand = define({
  name: "profile",
  description: "基本プロフィールを更新する",
  run: groupHelp,
  subCommands: {
    set: profileSetCommand,
    inspect: profileInspectCommand,
    show: asAlias(profileInspectCommand)
  }
});

const linkListCommand = define({
  name: "list",
  description: "リンクを出す",
  args: {
    group: {
      type: "positional",
      required: false,
      description: LINK_GROUPS.join(", ")
    }
  },
  examples: `SNSリンクを見る
  site links list social`,
  run: async (ctx) => {
    const { links } = (await readSiteContent()).content;
    if (!ctx.values.group) {
      presentDocument(links, { links });
      return;
    }
    const group = parseLinkGroup(ctx.values.group);
    const selected = resolveLinksForDisplay(links, group);
    presentDocument(selected, { links: selected, group });
  }
});

const parseLinkGroup = (value: string): LinkGroupName => {
  if (!LINK_GROUPS.includes(value as LinkGroupName)) {
    throw usage(`group は ${LINK_GROUPS.join(", ")} から選んでください。`);
  }
  return value as LinkGroupName;
};

const resolveLinksForDisplay = (
  links: Awaited<ReturnType<typeof readSiteContent>>["content"]["links"],
  group: LinkGroupName
) =>
  group === "social" || group === "rel-me"
    ? links.social.filter((link) => group === "social" || link.relMe)
    : group === "open-source"
      ? links.openSource
      : links.donate;

const visibilityArgs = {
  visible: {
    type: "boolean" as const,
    negatable: true,
    description: "SNS一覧に表示する"
  },
  relMe: {
    type: "boolean" as const,
    negatable: true,
    description: "rel=me リンクとして出力する"
  }
};

const linkAddCommand = define({
  name: "add",
  description: "リンクを追加する",
  toKebab: true,
  examples: `SNSリンクを追加する
  site links add social --id example --title-ja "Example" --title-en "Example" --url "https://example.com/@yamanoku" --write`,
  args: {
    group: {
      type: "positional",
      required: true,
      description: LINK_GROUPS.join(", ")
    },
    id: {
      type: "string",
      required: true,
      description: "安定した識別子。完全一致"
    },
    titleJa: { type: "string", required: true, description: "日本語タイトル" },
    titleEn: { type: "string", required: true, description: "英語タイトル" },
    url: { type: "string", required: true, description: "URL" },
    ...visibilityArgs
  },
  run: async (ctx) => {
    const write = consentToWrite(ctx.values);
    const { paths, content } = await readSiteContent();
    const next = addLink(content, parseLinkGroup(ctx.values.group), {
      id: ctx.values.id,
      title: { ja: ctx.values.titleJa, en: ctx.values.titleEn },
      url: ctx.values.url,
      ...(ctx.explicit.visible ? { visible: ctx.values.visible } : {}),
      ...(ctx.explicit.relMe ? { relMe: ctx.values.relMe } : {})
    });
    const result = await writeJson(paths.siteContent, next, { write });
    const nextArgs = [
      "links",
      "add",
      ctx.values.group,
      "--id",
      ctx.values.id,
      "--title-ja",
      ctx.values.titleJa,
      "--title-en",
      ctx.values.titleEn,
      "--url",
      ctx.values.url
    ];
    if (ctx.explicit.visible) {
      nextArgs.push(ctx.values.visible ? "--visible" : "--no-visible");
    }
    if (ctx.explicit.relMe) {
      nextArgs.push(ctx.values.relMe ? "--rel-me" : "--no-rel-me");
    }
    nextArgs.push("--write");
    presentMutation({
      resource: "リンク",
      id: ctx.values.id,
      outcome: "added",
      next: nextArgs,
      result
    });
  }
});

const linkUpdateCommand = define({
  name: "update",
  description: "idが一致するリンクを更新する",
  toKebab: true,
  examples: `URLを更新する
  site links update social example --url "https://example.com/new" --write`,
  args: {
    group: {
      type: "positional",
      required: true,
      description: LINK_GROUPS.join(", ")
    },
    id: {
      type: "positional",
      required: true,
      description: "現在の識別子。完全一致"
    },
    newId: { type: "string", description: "新しい識別子" },
    titleJa: { type: "string", description: "新しい日本語タイトル" },
    titleEn: { type: "string", description: "新しい英語タイトル" },
    url: { type: "string", description: "新しいURL" },
    ...visibilityArgs
  },
  run: async (ctx) => {
    if (
      (ctx.values.titleJa === undefined) !==
      (ctx.values.titleEn === undefined)
    ) {
      throw usage("--title-ja と --title-en は同時に指定してください。");
    }
    const write = consentToWrite(ctx.values);
    const { paths, content } = await readSiteContent();
    const next = updateLink(
      content,
      parseLinkGroup(ctx.values.group),
      ctx.values.id,
      {
        ...(ctx.values.newId === undefined ? {} : { id: ctx.values.newId }),
        ...(ctx.values.titleJa === undefined
          ? {}
          : {
              title: {
                ja: ctx.values.titleJa,
                en: ctx.values.titleEn as string
              }
            }),
        ...(ctx.values.url === undefined ? {} : { url: ctx.values.url }),
        ...(ctx.explicit.visible ? { visible: ctx.values.visible } : {}),
        ...(ctx.explicit.relMe ? { relMe: ctx.values.relMe } : {})
      }
    );
    const result = await writeJson(paths.siteContent, next, { write });
    const nextArgs = ["links", "update", ctx.values.group, ctx.values.id];
    if (ctx.values.newId) nextArgs.push("--new-id", ctx.values.newId);
    if (ctx.values.titleJa !== undefined && ctx.values.titleEn !== undefined) {
      nextArgs.push(
        "--title-ja",
        ctx.values.titleJa,
        "--title-en",
        ctx.values.titleEn
      );
    }
    if (ctx.values.url !== undefined) nextArgs.push("--url", ctx.values.url);
    if (ctx.explicit.visible) {
      nextArgs.push(ctx.values.visible ? "--visible" : "--no-visible");
    }
    if (ctx.explicit.relMe) {
      nextArgs.push(ctx.values.relMe ? "--rel-me" : "--no-rel-me");
    }
    nextArgs.push("--write");
    presentMutation({
      resource: "リンク",
      id: ctx.values.newId ?? ctx.values.id,
      outcome: "updated",
      next: nextArgs,
      result
    });
  }
});

const linkRemoveCommand = define({
  name: "remove",
  description: "idが一致するリンクを外す",
  examples: `リンクを外す
  site links remove social example --write`,
  args: {
    group: {
      type: "positional",
      required: true,
      description: LINK_GROUPS.join(", ")
    },
    id: { type: "positional", required: true, description: "識別子。完全一致" }
  },
  run: async (ctx) => {
    const write = consentToWrite(ctx.values);
    const { paths, content } = await readSiteContent();
    const next = removeLink(
      content,
      parseLinkGroup(ctx.values.group),
      ctx.values.id
    );
    const result = await writeJson(paths.siteContent, next, { write });
    presentMutation({
      resource: "リンク",
      id: ctx.values.id,
      outcome: "removed",
      next: ["links", "remove", ctx.values.group, ctx.values.id, "--write"],
      result
    });
  }
});

const linkCommand = define({
  name: "links",
  description: "SNS、rel=me、OSS、支援リンクを更新する",
  run: groupHelp,
  subCommands: {
    add: linkAddCommand,
    update: linkUpdateCommand,
    remove: linkRemoveCommand,
    list: linkListCommand,
    ls: asAlias(linkListCommand),
    rm: asAlias(linkRemoveCommand)
  }
});

const parseWorkCategories = (values: string[] | undefined): WorkCategory[] => {
  if (values === undefined || values.length === 0) {
    throw usage(
      `--category を1つ以上指定してください。${WORK_CATEGORIES.join(", ")} から選びます。`
    );
  }
  const unknown = values.filter((value) => !isWorkCategory(value));
  if (unknown.length > 0) {
    throw usage(
      `category は ${WORK_CATEGORIES.join(", ")} から選んでください: ${unknown.join(", ")}`
    );
  }
  return normalizeWorkCategories(values.filter(isWorkCategory));
};

const workDetailArgs = {
  category: {
    type: "string" as const,
    multiple: true as const,
    description:
      "カテゴリ。website, event, source-code, advent-calendar, book, curation。複数あるときは繰り返す。指定すると一覧を置き換える"
  },
  articleTitle: {
    type: "string" as const,
    multiple: true as const,
    description: "関連記事のタイトル。URLと同じ件数、同じ順で繰り返す"
  },
  articleUrl: {
    type: "string" as const,
    multiple: true as const,
    description: "関連記事のURL。タイトルと同じ件数、同じ順で繰り返す"
  }
};

const appendWorkDetails = (
  args: string[],
  categories: string[] | undefined,
  articleTitles: string[] | undefined,
  articleUrls: string[] | undefined
) => {
  for (const category of categories ?? []) {
    args.push("--category", category);
  }
  for (const title of articleTitles ?? []) {
    args.push("--article-title", title);
  }
  for (const url of articleUrls ?? []) {
    args.push("--article-url", url);
  }
};

const workListCommand = define({
  name: "list",
  description: "製作実績を作った順に出す",
  examples: `製作実績を見る
  site portfolio list`,
  run: async () => {
    const portfolio = (await readPortfolio()).portfolio;
    presentDocument(portfolio, { portfolio });
  }
});

const workAddCommand = define({
  name: "add",
  description: "製作実績を追加する",
  toKebab: true,
  examples: `製作実績を追加する
  site portfolio add --id example --name "example" --github "https://github.com/yamanoku/example" --site "https://example.com" --description-ja "概要" --description-en "Summary" --created 2026-01-01 --category website --category source-code --article-title "記事" --article-url "https://example.com/article" --write`,
  args: {
    id: {
      type: "string",
      required: true,
      description: "安定した識別子。完全一致"
    },
    name: { type: "string", required: true, description: "プロジェクト名" },
    github: {
      type: "string",
      description: "GitHubリポジトリのURL。省略できる"
    },
    site: {
      type: "string",
      description: "プロジェクトサイトのURL。省略できる"
    },
    descriptionJa: {
      type: "string",
      required: true,
      description: "日本語の概要"
    },
    descriptionEn: {
      type: "string",
      required: true,
      description: "英語の概要"
    },
    created: {
      type: "string",
      required: true,
      description: "作った日。YYYY-MM-DD。並び順に使う"
    },
    ...workDetailArgs
  },
  run: async (ctx) => {
    const write = consentToWrite(ctx.values);
    const { paths, portfolio } = await readPortfolio();
    const next = addWork(portfolio, {
      id: ctx.values.id,
      name: ctx.values.name,
      description: {
        ja: ctx.values.descriptionJa,
        en: ctx.values.descriptionEn
      },
      createdAt: ctx.values.created,
      ...(ctx.values.github ? { github: ctx.values.github } : {}),
      ...(ctx.values.site ? { site: ctx.values.site } : {}),
      categories: parseWorkCategories(ctx.values.category),
      articles: pairArticles(
        ctx.values.articleTitle ?? [],
        ctx.values.articleUrl ?? []
      )
    });
    const result = await writeJson(paths.portfolio, next, { write });
    const nextArgs = [
      "portfolio",
      "add",
      "--id",
      ctx.values.id,
      "--name",
      ctx.values.name,
      "--description-ja",
      ctx.values.descriptionJa,
      "--description-en",
      ctx.values.descriptionEn,
      "--created",
      ctx.values.created
    ];
    if (ctx.values.github) nextArgs.push("--github", ctx.values.github);
    if (ctx.values.site) nextArgs.push("--site", ctx.values.site);
    appendWorkDetails(
      nextArgs,
      ctx.values.category,
      ctx.values.articleTitle,
      ctx.values.articleUrl
    );
    nextArgs.push("--write");
    presentMutation({
      resource: "製作実績",
      id: ctx.values.id,
      outcome: "added",
      next: nextArgs,
      result
    });
  }
});

const workUpdateCommand = define({
  name: "update",
  description: "idが一致する製作実績を更新する",
  toKebab: true,
  examples: `カテゴリと関連記事を置き換える
  site portfolio update example --category website --category source-code --article-title "記事" --article-url "https://example.com/article" --write`,
  args: {
    id: {
      type: "positional",
      required: true,
      description: "現在の識別子。完全一致"
    },
    newId: { type: "string", description: "新しい識別子" },
    name: { type: "string", description: "新しいプロジェクト名" },
    github: {
      type: "string",
      description: "GitHubリポジトリのURL。空文字で消す"
    },
    site: {
      type: "string",
      description: "プロジェクトサイトのURL。空文字で消す"
    },
    descriptionJa: { type: "string", description: "新しい日本語の概要" },
    descriptionEn: { type: "string", description: "新しい英語の概要" },
    created: { type: "string", description: "新しい作成日。YYYY-MM-DD" },
    ...workDetailArgs,
    clearArticles: {
      type: "boolean",
      description: "関連記事を空にする"
    }
  },
  run: async (ctx) => {
    if (
      (ctx.values.descriptionJa === undefined) !==
      (ctx.values.descriptionEn === undefined)
    ) {
      throw usage(
        "--description-ja と --description-en は同時に指定してください。"
      );
    }
    const categoriesSpecified = ctx.values.category !== undefined;
    const articlesSpecified =
      ctx.values.articleTitle !== undefined ||
      ctx.values.articleUrl !== undefined;
    if (ctx.values.clearArticles === true && articlesSpecified) {
      throw usage(
        "--clear-articles と --article-title、--article-url は同時に使えません。"
      );
    }
    const write = consentToWrite(ctx.values);
    const { paths, portfolio } = await readPortfolio();
    const next = updateWork(portfolio, ctx.values.id, {
      ...(ctx.values.newId === undefined ? {} : { id: ctx.values.newId }),
      ...(ctx.values.name === undefined ? {} : { name: ctx.values.name }),
      ...(ctx.values.github === undefined
        ? {}
        : { github: ctx.values.github === "" ? null : ctx.values.github }),
      ...(ctx.values.site === undefined
        ? {}
        : { site: ctx.values.site === "" ? null : ctx.values.site }),
      ...(ctx.values.descriptionJa === undefined
        ? {}
        : {
            description: {
              ja: ctx.values.descriptionJa,
              en: ctx.values.descriptionEn as string
            }
          }),
      ...(ctx.values.created === undefined
        ? {}
        : { createdAt: ctx.values.created }),
      ...(categoriesSpecified
        ? { categories: parseWorkCategories(ctx.values.category) }
        : {}),
      ...(ctx.values.clearArticles === true
        ? { articles: [] }
        : articlesSpecified
          ? {
              articles: pairArticles(
                ctx.values.articleTitle ?? [],
                ctx.values.articleUrl ?? []
              )
            }
          : {})
    });
    const result = await writeJson(paths.portfolio, next, { write });
    const nextArgs = ["portfolio", "update", ctx.values.id];
    if (ctx.values.newId) nextArgs.push("--new-id", ctx.values.newId);
    if (ctx.values.name !== undefined) nextArgs.push("--name", ctx.values.name);
    if (ctx.values.github !== undefined)
      nextArgs.push("--github", ctx.values.github);
    if (ctx.values.site !== undefined) nextArgs.push("--site", ctx.values.site);
    if (
      ctx.values.descriptionJa !== undefined &&
      ctx.values.descriptionEn !== undefined
    ) {
      nextArgs.push(
        "--description-ja",
        ctx.values.descriptionJa,
        "--description-en",
        ctx.values.descriptionEn
      );
    }
    if (ctx.values.created !== undefined) {
      nextArgs.push("--created", ctx.values.created);
    }
    appendWorkDetails(nextArgs, ctx.values.category, undefined, undefined);
    if (ctx.values.clearArticles === true) {
      nextArgs.push("--clear-articles");
    } else {
      appendWorkDetails(
        nextArgs,
        undefined,
        ctx.values.articleTitle,
        ctx.values.articleUrl
      );
    }
    nextArgs.push("--write");
    presentMutation({
      resource: "製作実績",
      id: ctx.values.newId ?? ctx.values.id,
      outcome: "updated",
      next: nextArgs,
      result
    });
  }
});

const workRemoveCommand = define({
  name: "remove",
  description: "idが一致する製作実績を外す",
  examples: `製作実績を外す
  site portfolio remove example --write`,
  args: {
    id: { type: "positional", required: true, description: "識別子。完全一致" }
  },
  run: async (ctx) => {
    const write = consentToWrite(ctx.values);
    const { paths, portfolio } = await readPortfolio();
    const next = removeWork(portfolio, ctx.values.id);
    const result = await writeJson(paths.portfolio, next, { write });
    presentMutation({
      resource: "製作実績",
      id: ctx.values.id,
      outcome: "removed",
      next: ["portfolio", "remove", ctx.values.id, "--write"],
      result
    });
  }
});

const portfolioCommand = define({
  name: "portfolio",
  description: "製作実績を更新する",
  run: groupHelp,
  subCommands: {
    add: workAddCommand,
    update: workUpdateCommand,
    remove: workRemoveCommand,
    list: workListCommand,
    ls: asAlias(workListCommand),
    rm: asAlias(workRemoveCommand)
  }
});

const runJournalYear =
  (action: "add" | "remove") => async (ctx: { values: { year?: number } }) => {
    if (ctx.values.year === undefined) throw usage("--year が必要です。");
    const year = ctx.values.year;
    const write = consentToWrite(ctx.values);
    const { paths, content } = await readSiteContent();
    const next =
      action === "add"
        ? addJournalYear(content, year)
        : removeJournalYear(content, year);
    const result = await writeJson(paths.siteContent, next, { write });
    presentMutation({
      resource: "日報の年",
      id: String(year),
      outcome: action === "add" ? "added" : "removed",
      next: ["journal", "years", action, "--year", String(year), "--write"],
      result
    });
  };

const journalYearArgs = {
  year: { type: "number" as const, required: true, description: "西暦年" }
};

const journalYearsAddCommand = define({
  name: "add",
  description: "日報の年を追加する",
  examples: `年を追加する
  site journal years add --year 2027 --write`,
  args: journalYearArgs,
  run: runJournalYear("add")
});

const journalYearsRemoveCommand = define({
  name: "remove",
  description: "日報の年を外す",
  examples: `年を外す
  site journal years remove --year 2021 --write`,
  args: journalYearArgs,
  run: runJournalYear("remove")
});

const journalYearsCommand = define({
  name: "years",
  description: "日報の年を更新する",
  run: groupHelp,
  subCommands: {
    add: journalYearsAddCommand,
    remove: journalYearsRemoveCommand,
    rm: asAlias(journalYearsRemoveCommand)
  }
});

const journalAddYearCommand = define({
  name: "add-year",
  internal: true,
  description: "非推奨。journal years add を使う",
  args: journalYearArgs,
  run: runJournalYear("add")
});

const journalRemoveYearCommand = define({
  name: "remove-year",
  internal: true,
  description: "非推奨。journal years remove を使う",
  args: journalYearArgs,
  run: runJournalYear("remove")
});

const journalCommand = define({
  name: "journal",
  description: "日報リンクの年を更新する",
  run: groupHelp,
  subCommands: {
    years: journalYearsCommand,
    "add-year": journalAddYearCommand,
    "remove-year": journalRemoveYearCommand
  }
});

const i18nListCommand = define({
  name: "list",
  description: "日英の翻訳を出す",
  examples: `翻訳を見る
  site i18n list`,
  run: async () => {
    const translations = (await readSiteContent()).content.translations;
    presentDocument(translations, { translations });
  }
});

const i18nSetCommand = define({
  name: "set",
  description: "日英の翻訳を同時に追加、または更新する",
  examples: `翻訳を追加する
  site i18n set example.key --ja "日本語" --en "English" --write`,
  args: {
    key: {
      type: "positional",
      required: true,
      description: "翻訳キー。完全一致"
    },
    ja: { type: "string", required: true, description: "日本語訳" },
    en: { type: "string", required: true, description: "英語訳" }
  },
  run: async (ctx) => {
    const write = consentToWrite(ctx.values);
    const { paths, content } = await readSiteContent();
    const existed = ctx.values.key in content.translations.ja;
    const next = setTranslation(
      content,
      ctx.values.key,
      ctx.values.ja,
      ctx.values.en
    );
    const result = await writeJson(paths.siteContent, next, { write });
    presentMutation({
      resource: "翻訳",
      id: ctx.values.key,
      outcome: existed ? "updated" : "added",
      next: [
        "i18n",
        "set",
        ctx.values.key,
        "--ja",
        ctx.values.ja,
        "--en",
        ctx.values.en,
        "--write"
      ],
      result
    });
  }
});

const i18nRemoveCommand = define({
  name: "remove",
  description: "ソースから参照されていない日英の翻訳を外す",
  examples: `未使用の翻訳を外す
  site i18n remove example.key --write`,
  args: {
    key: {
      type: "positional",
      required: true,
      description: "翻訳キー。完全一致"
    }
  },
  run: async (ctx) => {
    const write = consentToWrite(ctx.values);
    const { paths, content } = await readSiteContent();
    const next = removeTranslation(
      content,
      ctx.values.key,
      await collectReferencedTranslationKeys()
    );
    const result = await writeJson(paths.siteContent, next, { write });
    presentMutation({
      resource: "翻訳",
      id: ctx.values.key,
      outcome: "removed",
      next: ["i18n", "remove", ctx.values.key, "--write"],
      result
    });
  }
});

const i18nCommand = define({
  name: "i18n",
  description: "日英の翻訳を更新する",
  run: groupHelp,
  subCommands: {
    set: i18nSetCommand,
    remove: i18nRemoveCommand,
    list: i18nListCommand,
    ls: asAlias(i18nListCommand),
    rm: asAlias(i18nRemoveCommand)
  }
});

const sectionListCommand = define({
  name: "list",
  description: "セクションの表示状態を出す",
  examples: `表示状態を見る
  site sections list`,
  run: async () => {
    const sections = (await readSiteContent()).content.sections;
    presentDocument(sections, { sections });
  }
});

const createSectionCommand = (visible: boolean) =>
  define({
    name: visible ? "enable" : "disable",
    description: visible ? "セクションを表示する" : "セクションを非表示にする",
    examples: visible
      ? `OSSセクションを表示する
  site sections enable openSource --write`
      : `Podcastセクションを非表示にする
  site sections disable podcast --write`,
    args: {
      section: {
        type: "positional",
        required: true,
        description: SECTION_NAMES.join(", ")
      }
    },
    run: async (ctx) => {
      if (!SECTION_NAMES.includes(ctx.values.section as SectionName)) {
        throw usage(
          `section は ${SECTION_NAMES.join(", ")} から選んでください。`
        );
      }
      const write = consentToWrite(ctx.values);
      const { paths, content } = await readSiteContent();
      const next = setSection(
        content,
        ctx.values.section as SectionName,
        visible
      );
      const result = await writeJson(paths.siteContent, next, { write });
      const verb = visible ? "enable" : "disable";
      presentMutation({
        resource: "セクション",
        id: ctx.values.section,
        outcome: visible ? "enabled" : "disabled",
        next: ["sections", verb, ctx.values.section, "--write"],
        result
      });
    }
  });

const sectionEnableCommand = createSectionCommand(true);
const sectionDisableCommand = createSectionCommand(false);

const sectionCommand = define({
  name: "sections",
  description: "トップページのセクション表示を更新する",
  run: groupHelp,
  subCommands: {
    enable: sectionEnableCommand,
    disable: sectionDisableCommand,
    show: asAlias(sectionEnableCommand),
    hide: asAlias(sectionDisableCommand),
    list: sectionListCommand,
    ls: asAlias(sectionListCommand)
  }
});

const podcastSyncCommand = define({
  name: "sync",
  description: "RSSから最新のPodcastエピソードを同期する",
  toKebab: true,
  examples: `取得結果を見てから保存する
  site podcast sync

取得した内容を保存する
  site podcast sync --write`,
  args: {
    feedUrl: { type: "string", description: "この実行だけで使うRSSのURL" }
  },
  run: async (ctx) => {
    const write = consentToWrite(ctx.values);
    const { podcast } = await readRepositoryData();
    const next = await fetchPodcast(ctx.values.feedUrl ?? podcast.feedUrl);
    const result = await writeJson(getDataPaths().podcast, next, { write });
    const nextArgs = ["podcast", "sync"];
    if (ctx.values.feedUrl) nextArgs.push("--feed-url", ctx.values.feedUrl);
    nextArgs.push("--write");
    presentMutation({
      resource: "Podcast",
      id: next.feedUrl,
      outcome: "updated",
      next: nextArgs,
      extra: { episodes: next.episodes.length },
      result
    });
  }
});

const podcastCommand = define({
  name: "podcast",
  description: "お元気ですか.fmを更新する",
  run: groupHelp,
  subCommands: { sync: podcastSyncCommand }
});

const validateCommand = define({
  name: "validate",
  description: "更新データの形式と整合性を検証する",
  examples: `データを検証する
  site validate`,
  run: async () => {
    const data = await validateRepository();
    presentLine(
      `検証成功: 執筆${data.writings.length}件、登壇${data.records.length}件、製作実績${data.portfolio.length}件、Podcast ${data.podcast.episodes.length}件`,
      {
        outcome: "validated",
        writings: data.writings.length,
        stages: data.records.length,
        portfolio: data.portfolio.length,
        episodes: data.podcast.episodes.length
      }
    );
  }
});

const runProcess = (command: string, args: string[]): Promise<void> =>
  new Promise((resolvePromise, reject) => {
    const child = spawn(command, args, {
      cwd: getRepositoryRoot(),
      stdio: "inherit",
      shell: process.platform === "win32"
    });
    child.once("error", () => {
      reject(
        new SiteCliError({
          message: `${command} を起動できません。`,
          exitCode: 1,
          reason: "spawn_failed"
        })
      );
    });
    child.once("exit", (code, signal) => {
      if (code === 0) {
        resolvePromise();
        return;
      }
      if (signal) {
        const signalNumber =
          signal === "SIGINT"
            ? 2
            : signal === "SIGTERM"
              ? 15
              : signal === "SIGHUP"
                ? 1
                : 1;
        reject(
          new SiteCliError({
            message: "",
            exitCode: 128 + signalNumber,
            reason: "canceled",
            silent: true
          })
        );
        return;
      }
      reject(
        new SiteCliError({
          message: "",
          exitCode: code ?? 1,
          reason: "build_failed",
          silent: true
        })
      );
    });
  });

const checkCommand = define({
  name: "check",
  description:
    "データ検証、lint、本体とrecordsとportfolioのビルド、HTML検証を実行する",
  examples: `公開前の確認を実行する
  site check`,
  run: async (ctx) => {
    if (flagValue(ctx.values, "json") === true) {
      throw usage(
        "check は子プロセスの出力をそのまま渡すため、--json は使えません。"
      );
    }
    await validateRepository();
    await runProcess("pnpm", ["ox:ci"]);
    await runProcess("pnpm", ["build"]);
    await runProcess("pnpm", ["--filter", "records", "build"]);
    await runProcess("pnpm", ["--filter", "portfolio", "build"]);
    await runProcess("pnpm", ["markuplint"]);
    console.error("✓ 確認しました");
  }
});

const helpSearchCommand = define({
  name: "search",
  description: "コマンドをオフラインで探す",
  examples: `登壇のコマンドを探す
  site help search 登壇`,
  args: {
    query: {
      type: "positional",
      required: true,
      description: "コマンド名、説明、例から探す語"
    }
  },
  run: async (ctx) => {
    const commands = searchCommands(ctx.values.query);
    if (flagValue(ctx.values, "json") === true) {
      presentDocument(commands, { commands });
      return;
    }
    if (commands.length === 0) {
      presentLine(`No commands match "${ctx.values.query}".`, { commands });
      return;
    }
    presentLine(
      commands
        .map((command) => `${command.path}  ${command.summary}`)
        .join("\n"),
      { commands }
    );
  }
});

const helpCommand = define({
  name: "help",
  description: "コマンドを探す",
  run: groupHelp,
  subCommands: {
    search: helpSearchCommand
  }
});

export const rootCommand = define({
  name: "site",
  description: "yamanoku.netの更新を安全に行うCLI",
  internal: true,
  examples: `執筆を追加する前に差分を見る
  site writings add --title "記事タイトル" --url "https://example.com/article" --datetime "2026-08-29T12:00:00+09:00"

コマンドを探す
  site help search 登壇`,
  run: groupHelp,
  subCommands: {
    writings: writingCommand,
    writing: asAlias(writingCommand),
    stages: stageCommand,
    stage: asAlias(stageCommand),
    profile: profileCommand,
    links: linkCommand,
    link: asAlias(linkCommand),
    portfolio: portfolioCommand,
    work: asAlias(portfolioCommand),
    journal: journalCommand,
    i18n: i18nCommand,
    sections: sectionCommand,
    section: asAlias(sectionCommand),
    podcast: podcastCommand,
    validate: validateCommand,
    check: checkCommand,
    help: helpCommand
  }
});

export type CatalogEntry = {
  path: string;
  summary: string;
  examples: string;
};

const walkCommands = (
  command: CommandNode,
  path: string[],
  into: CatalogEntry[]
) => {
  if (command.internal && path.length > 0) return;
  if (path.length > 0) {
    into.push({
      path: path.join(" "),
      summary: command.description ?? "",
      examples: typeof command.examples === "string" ? command.examples : ""
    });
  }
  for (const [name, child] of Object.entries(command.subCommands ?? {})) {
    walkCommands(child, [...path, name], into);
  }
};

export const listCommands = (): CatalogEntry[] => {
  const entries: CatalogEntry[] = [];
  walkCommands(asNode(rootCommand), [], entries);
  return entries;
};

export const searchCommands = (
  query: string
): Array<{ path: string; summary: string }> => {
  const needle = query.toLowerCase();
  return listCommands()
    .filter(
      (entry) =>
        entry.path.toLowerCase().includes(needle) ||
        entry.summary.toLowerCase().includes(needle) ||
        entry.examples.toLowerCase().includes(needle)
    )
    .slice(0, 10)
    .map(({ path, summary }) => ({ path, summary }));
};

export const commandAt = (
  path: readonly string[]
):
  | { kind: "ok"; command: CommandNode; path: string[] }
  | { kind: "unknown"; segment: string; parent: string[] } => {
  let current = asNode(rootCommand);
  const resolved: string[] = [];
  for (const segment of path) {
    const child = current.subCommands?.[segment];
    if (!child) {
      return { kind: "unknown", segment, parent: resolved };
    }
    current = child;
    resolved.push(segment);
  }
  return { kind: "ok", command: current, path: resolved };
};
