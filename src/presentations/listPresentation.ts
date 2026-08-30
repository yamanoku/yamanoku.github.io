import records from "../../records/src/data/records.json";
import writings from "../data/writings.json";

export type ListType = {
  title: string;
  url: string;
  datetime: string;
};

type ExactPresantationLengthArray<T> = {
  length: 5;
} & T[];

// records.json（records.yamanoku.netの登壇記録）を唯一の情報源として導出する
export const deriveListStage = (
  source: typeof records,
  now = new Date()
): ListType[] =>
  source
    .filter(
      (record) => new Date(record.date) < now && record.resources.length > 0
    )
    .slice(0, 5)
    .map((record) => ({
      title: record.resources[0].title,
      url: record.resources[0].url,
      datetime: record.date
    }));

export const listStage = deriveListStage(records);

if (writings.length !== 5) {
  throw new Error(`listWriteは5件必要です（現在${writings.length}件）`);
}

export const listWrite = writings as ExactPresantationLengthArray<ListType>;
