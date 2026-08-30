import type siteContent from "../data/site-content.json";
import type languages from "./languages";

export type DictionaryKeys = keyof typeof siteContent.translations.ja;
export type Dict = Partial<typeof siteContent.translations.ja>;
export type LanguageKeys = keyof typeof languages;
