import { spawn } from "node:child_process";
import { define } from "gunshi";
import {
  LINK_GROUPS,
  type LinkGroupName,
  PROFILE_FIELDS,
  type ProfileField,
  SECTION_NAMES,
  type SectionName,
  validateRecords,
  validateSiteContent,
  validateWritings
} from "./model.js";
import {
  addJournalYear,
  addLink,
  addStage,
  addWriting,
  pairResources,
  parseRubyParts,
  removeJournalYear,
  removeLink,
  removeStage,
  removeTranslation,
  replaceWriting,
  setProfile,
  setSection,
  setTranslation,
  updateLink,
  updateStage
} from "./mutations.js";
import { fetchPodcast } from "./podcast.js";
import {
  collectReferencedTranslationKeys,
  getDataPaths,
  getRepositoryRoot,
  readJson,
  readRepositoryData,
  validateRepository,
  writeJson
} from "./repository.js";

const writeArg = {
  write: {
    type: "boolean" as const,
    default: false,
    description: "変更をファイルへ保存する（省略時はプレビューのみ）"
  }
};

const printJson = (value: unknown): void => {
  console.log(JSON.stringify(value, null, 2));
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

const writingListCommand = define({
  name: "list",
  description: "現在表示する執筆5件をJSONで表示",
  run: async () => printJson((await readWritings()).writings)
});

const writingAddCommand = define({
  name: "add",
  description: "執筆を追加し、最新5件へローテーション",
  args: {
    title: { type: "string", required: true, description: "記事タイトル" },
    url: { type: "string", required: true, description: "記事URL" },
    datetime: { type: "string", required: true, description: "公開ISO日時" },
    ...writeArg
  },
  run: async (ctx) => {
    const { paths, writings } = await readWritings();
    const next = addWriting(writings, {
      title: ctx.values.title,
      url: ctx.values.url,
      datetime: ctx.values.datetime
    });
    await writeJson(paths.writings, next, {
      write: ctx.values.write,
      log: ctx.log
    });
    printJson(next);
  }
});

const writingRemoveCommand = define({
  name: "remove",
  description: "指定URLの執筆を置換（5件制約を維持するため置換先は必須）",
  toKebab: true,
  args: {
    url: { type: "positional", required: true, description: "削除する記事URL" },
    replacementTitle: {
      type: "string",
      required: true,
      description: "置換する記事タイトル"
    },
    replacementUrl: {
      type: "string",
      required: true,
      description: "置換する記事URL"
    },
    replacementDatetime: {
      type: "string",
      required: true,
      description: "置換する記事の公開ISO日時"
    },
    ...writeArg
  },
  run: async (ctx) => {
    const { paths, writings } = await readWritings();
    const next = replaceWriting(writings, ctx.values.url, {
      title: ctx.values.replacementTitle,
      url: ctx.values.replacementUrl,
      datetime: ctx.values.replacementDatetime
    });
    await writeJson(paths.writings, next, {
      write: ctx.values.write,
      log: ctx.log
    });
    printJson(next);
  }
});

const writingCommand = define({
  name: "writing",
  description: "執筆一覧を更新",
  subCommands: {
    add: writingAddCommand,
    remove: writingRemoveCommand,
    list: writingListCommand
  }
});

const stageListCommand = define({
  name: "list",
  description: "登壇記録をJSONで表示",
  run: async () => printJson((await readRecords()).records)
});

const resourceArgs = {
  resourceTitle: {
    type: "string" as const,
    multiple: true as const,
    description: "資料タイトル（複数指定可）"
  },
  resourceUrl: {
    type: "string" as const,
    multiple: true as const,
    description: "資料URL（複数指定可）"
  }
};

const stageAddCommand = define({
  name: "add",
  description: "登壇記録を追加",
  toKebab: true,
  args: {
    date: { type: "string", required: true, description: "開催日 YYYY-MM-DD" },
    event: { type: "string", required: true, description: "イベント名" },
    ...resourceArgs,
    note: { type: "string", description: "資料未定などの注記" },
    ...writeArg
  },
  run: async (ctx) => {
    const { paths, records } = await readRecords();
    const next = addStage(records, {
      date: ctx.values.date,
      event: ctx.values.event,
      resources: pairResources(
        ctx.values.resourceTitle ?? [],
        ctx.values.resourceUrl ?? []
      ),
      ...(ctx.values.note === undefined ? {} : { note: ctx.values.note })
    });
    await writeJson(paths.records, next, {
      write: ctx.values.write,
      log: ctx.log
    });
    printJson(
      next.find(
        (item) =>
          item.date === ctx.values.date && item.event === ctx.values.event
      )
    );
  }
});

const stageUpdateCommand = define({
  name: "update",
  description: "日付とイベント名で登壇記録を更新",
  toKebab: true,
  args: {
    date: { type: "positional", required: true, description: "現在の開催日" },
    event: { type: "string", required: true, description: "現在のイベント名" },
    newDate: { type: "string", description: "新しい開催日" },
    newEvent: { type: "string", description: "新しいイベント名" },
    ...resourceArgs,
    note: { type: "string", description: "新しい注記（空文字で削除）" },
    ...writeArg
  },
  run: async (ctx) => {
    const { paths, records } = await readRecords();
    const resourceSpecified =
      ctx.values.resourceTitle !== undefined ||
      ctx.values.resourceUrl !== undefined;
    const next = updateStage(records, ctx.values.date, ctx.values.event, {
      ...(ctx.values.newDate === undefined ? {} : { date: ctx.values.newDate }),
      ...(ctx.values.newEvent === undefined
        ? {}
        : { event: ctx.values.newEvent }),
      ...(resourceSpecified
        ? {
            resources: pairResources(
              ctx.values.resourceTitle ?? [],
              ctx.values.resourceUrl ?? []
            )
          }
        : {}),
      ...(ctx.values.note === undefined
        ? {}
        : ctx.values.note === ""
          ? { note: undefined }
          : { note: ctx.values.note })
    });
    await writeJson(paths.records, next, {
      write: ctx.values.write,
      log: ctx.log
    });
  }
});

const stageRemoveCommand = define({
  name: "remove",
  description: "日付とイベント名で登壇記録を削除",
  args: {
    date: { type: "positional", required: true, description: "開催日" },
    event: { type: "string", required: true, description: "イベント名" },
    ...writeArg
  },
  run: async (ctx) => {
    const { paths, records } = await readRecords();
    const next = removeStage(records, ctx.values.date, ctx.values.event);
    await writeJson(paths.records, next, {
      write: ctx.values.write,
      log: ctx.log
    });
  }
});

const stageCommand = define({
  name: "stage",
  description: "登壇記録を更新",
  subCommands: {
    add: stageAddCommand,
    update: stageUpdateCommand,
    remove: stageRemoveCommand,
    list: stageListCommand
  }
});

const profileShowCommand = define({
  name: "show",
  description: "プロフィールをJSONで表示",
  run: async () => printJson((await readSiteContent()).content.profile)
});

const profileSetCommand = define({
  name: "set",
  description: "プロフィール項目の日英値を同時更新",
  args: {
    field: {
      type: "positional",
      required: true,
      description: PROFILE_FIELDS.join(", ")
    },
    ja: { type: "string", required: true, description: "日本語値" },
    en: { type: "string", required: true, description: "英語値" },
    ruby: {
      type: "string",
      multiple: true,
      description: "本名の本文=よみ（複数指定可）"
    },
    ...writeArg
  },
  run: async (ctx) => {
    if (!PROFILE_FIELDS.includes(ctx.values.field as ProfileField)) {
      throw new Error(
        `field は ${PROFILE_FIELDS.join(", ")} から選んでください`
      );
    }
    const { paths, content } = await readSiteContent();
    const next = setProfile(
      content,
      ctx.values.field as ProfileField,
      ctx.values.ja,
      ctx.values.en,
      ctx.values.ruby ? parseRubyParts(ctx.values.ruby) : undefined
    );
    await writeJson(paths.siteContent, next, {
      write: ctx.values.write,
      log: ctx.log
    });
  }
});

const profileCommand = define({
  name: "profile",
  description: "基本プロフィールを更新",
  subCommands: { set: profileSetCommand, show: profileShowCommand }
});

const linkListCommand = define({
  name: "list",
  description: "リンク一覧を表示",
  args: {
    group: {
      type: "positional",
      required: false,
      description: LINK_GROUPS.join(", ")
    }
  },
  run: async (ctx) => {
    const { links } = (await readSiteContent()).content;
    if (!ctx.values.group) return printJson(links);
    const group = parseLinkGroup(ctx.values.group);
    printJson(resolveLinksForDisplay(links, group));
  }
});

const parseLinkGroup = (value: string): LinkGroupName => {
  if (!LINK_GROUPS.includes(value as LinkGroupName)) {
    throw new Error(`group は ${LINK_GROUPS.join(", ")} から選んでください`);
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
    description: "rel=meリンクとして出力する"
  }
};

const linkAddCommand = define({
  name: "add",
  description: "リンクを追加",
  toKebab: true,
  args: {
    group: {
      type: "positional",
      required: true,
      description: LINK_GROUPS.join(", ")
    },
    id: { type: "string", required: true, description: "安定した識別子" },
    titleJa: { type: "string", required: true, description: "日本語タイトル" },
    titleEn: { type: "string", required: true, description: "英語タイトル" },
    url: { type: "string", required: true, description: "URL" },
    ...visibilityArgs,
    ...writeArg
  },
  run: async (ctx) => {
    const { paths, content } = await readSiteContent();
    const next = addLink(content, parseLinkGroup(ctx.values.group), {
      id: ctx.values.id,
      title: { ja: ctx.values.titleJa, en: ctx.values.titleEn },
      url: ctx.values.url,
      ...(ctx.explicit.visible ? { visible: ctx.values.visible } : {}),
      ...(ctx.explicit.relMe ? { relMe: ctx.values.relMe } : {})
    });
    await writeJson(paths.siteContent, next, {
      write: ctx.values.write,
      log: ctx.log
    });
  }
});

const linkUpdateCommand = define({
  name: "update",
  description: "idでリンクを更新",
  toKebab: true,
  args: {
    group: {
      type: "positional",
      required: true,
      description: LINK_GROUPS.join(", ")
    },
    id: { type: "positional", required: true, description: "現在の識別子" },
    newId: { type: "string", description: "新しい識別子" },
    titleJa: { type: "string", description: "新しい日本語タイトル" },
    titleEn: { type: "string", description: "新しい英語タイトル" },
    url: { type: "string", description: "新しいURL" },
    ...visibilityArgs,
    ...writeArg
  },
  run: async (ctx) => {
    if (
      (ctx.values.titleJa === undefined) !==
      (ctx.values.titleEn === undefined)
    ) {
      throw new Error("--title-ja と --title-en は同時に指定してください");
    }
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
    await writeJson(paths.siteContent, next, {
      write: ctx.values.write,
      log: ctx.log
    });
  }
});

const linkRemoveCommand = define({
  name: "remove",
  description: "idでリンクを削除",
  args: {
    group: {
      type: "positional",
      required: true,
      description: LINK_GROUPS.join(", ")
    },
    id: { type: "positional", required: true, description: "識別子" },
    ...writeArg
  },
  run: async (ctx) => {
    const { paths, content } = await readSiteContent();
    const next = removeLink(
      content,
      parseLinkGroup(ctx.values.group),
      ctx.values.id
    );
    await writeJson(paths.siteContent, next, {
      write: ctx.values.write,
      log: ctx.log
    });
  }
});

const linkCommand = define({
  name: "link",
  description: "SNS、rel=me、OSS、支援リンクを更新",
  subCommands: {
    add: linkAddCommand,
    update: linkUpdateCommand,
    remove: linkRemoveCommand,
    list: linkListCommand
  }
});

const journalAddYearCommand = define({
  name: "add-year",
  description: "日報年を追加",
  args: {
    year: { type: "number", required: true, description: "西暦年" },
    ...writeArg
  },
  run: async (ctx) => {
    const { paths, content } = await readSiteContent();
    const next = addJournalYear(content, ctx.values.year);
    await writeJson(paths.siteContent, next, {
      write: ctx.values.write,
      log: ctx.log
    });
  }
});

const journalRemoveYearCommand = define({
  name: "remove-year",
  description: "日報年を削除",
  args: {
    year: { type: "number", required: true, description: "西暦年" },
    ...writeArg
  },
  run: async (ctx) => {
    const { paths, content } = await readSiteContent();
    const next = removeJournalYear(content, ctx.values.year);
    await writeJson(paths.siteContent, next, {
      write: ctx.values.write,
      log: ctx.log
    });
  }
});

const journalCommand = define({
  name: "journal",
  description: "日報リンクの年を更新",
  subCommands: {
    "add-year": journalAddYearCommand,
    "remove-year": journalRemoveYearCommand
  }
});

const i18nListCommand = define({
  name: "list",
  description: "日英翻訳を表示",
  run: async () => printJson((await readSiteContent()).content.translations)
});

const i18nSetCommand = define({
  name: "set",
  description: "日英翻訳を同時に追加・更新",
  args: {
    key: { type: "positional", required: true, description: "翻訳キー" },
    ja: { type: "string", required: true, description: "日本語訳" },
    en: { type: "string", required: true, description: "英語訳" },
    ...writeArg
  },
  run: async (ctx) => {
    const { paths, content } = await readSiteContent();
    const next = setTranslation(
      content,
      ctx.values.key,
      ctx.values.ja,
      ctx.values.en
    );
    await writeJson(paths.siteContent, next, {
      write: ctx.values.write,
      log: ctx.log
    });
  }
});

const i18nRemoveCommand = define({
  name: "remove",
  description: "未使用の日英翻訳を同時に削除",
  args: {
    key: { type: "positional", required: true, description: "翻訳キー" },
    ...writeArg
  },
  run: async (ctx) => {
    const { paths, content } = await readSiteContent();
    const next = removeTranslation(
      content,
      ctx.values.key,
      await collectReferencedTranslationKeys()
    );
    await writeJson(paths.siteContent, next, {
      write: ctx.values.write,
      log: ctx.log
    });
  }
});

const i18nCommand = define({
  name: "i18n",
  description: "日英翻訳を更新",
  subCommands: {
    set: i18nSetCommand,
    remove: i18nRemoveCommand,
    list: i18nListCommand
  }
});

const sectionListCommand = define({
  name: "list",
  description: "セクション表示状態を表示",
  run: async () => printJson((await readSiteContent()).content.sections)
});

const createSectionMutationCommand = (visible: boolean) =>
  define({
    name: visible ? "show" : "hide",
    description: `セクションを${visible ? "表示" : "非表示"}にする`,
    args: {
      section: {
        type: "positional",
        required: true,
        description: SECTION_NAMES.join(", ")
      },
      ...writeArg
    },
    run: async (ctx) => {
      if (!SECTION_NAMES.includes(ctx.values.section as SectionName)) {
        throw new Error(
          `section は ${SECTION_NAMES.join(", ")} から選んでください`
        );
      }
      const { paths, content } = await readSiteContent();
      const next = setSection(
        content,
        ctx.values.section as SectionName,
        visible
      );
      await writeJson(paths.siteContent, next, {
        write: ctx.values.write,
        log: ctx.log
      });
    }
  });

const sectionCommand = define({
  name: "section",
  description: "トップページのセクション表示を更新",
  subCommands: {
    show: createSectionMutationCommand(true),
    hide: createSectionMutationCommand(false),
    list: sectionListCommand
  }
});

const podcastSyncCommand = define({
  name: "sync",
  description: "RSSから最新Podcastエピソードを同期",
  toKebab: true,
  args: {
    feedUrl: { type: "string", description: "上書きするRSS URL" },
    ...writeArg
  },
  run: async (ctx) => {
    const { podcast } = await readRepositoryData();
    const next = await fetchPodcast(ctx.values.feedUrl ?? podcast.feedUrl);
    await writeJson(getDataPaths().podcast, next, {
      write: ctx.values.write,
      log: ctx.log
    });
    printJson(next);
  }
});

const podcastCommand = define({
  name: "podcast",
  description: "お元気ですか.fmを更新",
  subCommands: { sync: podcastSyncCommand }
});

const validateCommand = define({
  name: "validate",
  description: "全更新データの形式と整合性を検証",
  run: async () => {
    const data = await validateRepository();
    console.log(
      `検証成功: 執筆${data.writings.length}件、登壇${data.records.length}件、Podcast ${data.podcast.episodes.length}件`
    );
  }
});

const runProcess = (command: string, args: string[]): Promise<void> =>
  new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: getRepositoryRoot(),
      stdio: "inherit",
      shell: process.platform === "win32"
    });
    child.once("error", reject);
    child.once("exit", (code, signal) => {
      if (code === 0) resolve();
      else
        reject(
          new Error(
            `${command} ${args.join(" ")} が失敗しました (${signal ?? code})`
          )
        );
    });
  });

const checkCommand = define({
  name: "check",
  description: "データ検証、lint、本体・recordsビルド、HTML検証を実行",
  run: async () => {
    await validateRepository();
    await runProcess("pnpm", ["biome:ci"]);
    await runProcess("pnpm", ["build"]);
    await runProcess("pnpm", ["--filter", "records", "build"]);
    await runProcess("pnpm", ["markuplint"]);
  }
});

export const rootCommand = define({
  name: "site",
  description: "yamanoku.netの更新を安全に行うCLI",
  internal: true,
  subCommands: {
    writing: writingCommand,
    stage: stageCommand,
    profile: profileCommand,
    link: linkCommand,
    journal: journalCommand,
    i18n: i18nCommand,
    section: sectionCommand,
    podcast: podcastCommand,
    validate: validateCommand,
    check: checkCommand
  }
});
