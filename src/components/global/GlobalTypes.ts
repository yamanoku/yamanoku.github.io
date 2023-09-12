export type LinkItem = {
  url?: string;
  title?: string;
};

export type ListItem = LinkItem & {
  datetime?: string;
};
