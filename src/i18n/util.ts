import type { AstroGlobal } from "astro";
import { Dict, DictionaryKeys, LanguageKeys } from "./translation-checkers";

function mapDefaultExports<T>(modules: Record<string, { default: T }>) {
  const exportMap: Record<string, T> = {};
  for (const [path, module] of Object.entries(modules)) {
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    const [_dot, lang] = path.split("/");
    exportMap[lang] = module.default;
  }
  return exportMap;
}

const translations = mapDefaultExports<Dict>(
  import.meta.glob("./*/dictionary.ts", { eager: true })
);

const fallbackLang = "ja";

/**
 * 翻訳された文字列を取得するためのヘルパー関数
 *
 * @example
 * ---
 * import { useTranslations } from '~/i18n/util';
 * const t = useTranslations(Astro);
 * ---
 * <FrameworkComponent label={t('articleNav.nextPage')} />
 */
export function useTranslations(
  Astro: Readonly<AstroGlobal>
): (key: DictionaryKeys) => string | undefined {
  const lang = getLanguageFromURL(Astro.url.pathname) || "ja";
  return useTranslationsForLang(lang as LanguageKeys);
}

export function useTranslationsForLang(
  lang: LanguageKeys
): (key: DictionaryKeys) => string | undefined {
  return function getTranslation(key: DictionaryKeys) {
    const str = translations[lang]?.[key] || translations[fallbackLang][key];
    if (str === undefined)
      console.error(`Missing translation for “${key}” in “${lang}”.`);
    return str;
  };
}

export function getLanguageFromURL(pathname: string) {
  const langCodeMatch = pathname.match(/\/([a-z]{2}-?[a-z]{0,2})\//);
  return langCodeMatch ? langCodeMatch[1] : "ja";
}
