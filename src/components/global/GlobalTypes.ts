export type LinkItem = {
  url?: string;
  title?: string;
  rel?: string;
};

export type ListItem = LinkItem & {
  datetime?: string;
};
