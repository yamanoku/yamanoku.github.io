import type jaDictionary from "./ja/dictionary";
import languages from "./languages";

export type DictionaryKeys = keyof typeof jaDictionary;
export type Dict = Partial<typeof jaDictionary>;
export type LanguageKeys = keyof typeof languages;

/** Helper to type check a dictionary of string translations. */
export const Dictionary = (dict: Partial<typeof jaDictionary>) => dict;
