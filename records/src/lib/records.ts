export type Resource = {
  title: string;
  url: string;
};

export type RecordItem = {
  date: string;
  event: string;
  resources: Resource[];
  note?: string;
  description?: string;
};

export function groupRecordsByYear(
  records: RecordItem[]
): [string, RecordItem[]][] {
  const groups = new Map<string, RecordItem[]>();
  for (const record of records) {
    const year = record.date.slice(0, 4);
    const current = groups.get(year);
    if (current) {
      current.push(record);
    } else {
      groups.set(year, [record]);
    }
  }
  return [...groups];
}

export function formatTalkDate(isoDate: string): string {
  const month = Number(isoDate.slice(5, 7));
  const day = Number(isoDate.slice(8, 10));
  return `${month}月${day}日`;
}

export function isUpcoming(isoDate: string, now: Date): boolean {
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return isoDate > `${year}-${month}-${day}`;
}
