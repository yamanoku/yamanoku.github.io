import type { AstroGlobal } from "astro";
import siteContent from "../data/site-content.json";
import type { DictionaryKeys, LanguageKeys } from "./translation-checkers";

const translations = siteContent.translations;

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
