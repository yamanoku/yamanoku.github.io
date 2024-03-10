import type jaDictionary from "./ja/dictionary";
import type languages from "./languages";

export type DictionaryKeys = keyof typeof jaDictionary;
export type Dict = Partial<typeof jaDictionary>;
export type LanguageKeys = keyof typeof languages;

/** 文字列の翻訳をタイプチェックするヘルパー */
export const Dictionary = (dict: Partial<typeof jaDictionary>) => dict;
