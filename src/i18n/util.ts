import type { AstroGlobal } from "astro";
import { Dict, DictionaryKeys, LanguageKeys } from "./translation-checkers";

export function getLanguageFromURL(pathname: string) {
  const langCodeMatch = pathname.match(/\/([a-z]{2}-?[a-z]{0,2})\//);
  return langCodeMatch ? langCodeMatch[1] : "ja";
}

/**
 * Convert the map of modules returned by `import.meta.globEager` to an object
 * mapping the language code from each module’s filepath to the module’s default export.
 */
function mapDefaultExports<T>(modules: Record<string, { default: T }>) {
  const exportMap: Record<string, T> = {};
  for (const [path, module] of Object.entries(modules)) {
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
 * Create a helper function for getting translated strings.
 *
 * Within an Astro component, prefer the `UIString` component,
 * which only needs the key as it has access to the global Astro object.
 *
 * However, you can’t pass an Astro component as a prop to a framework component,
 * so this function creates a look-up method to get the string instead:
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
