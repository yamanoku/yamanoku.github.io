export type LinkItem = {
  url?: string;
  title?: string;
  isExternal?: boolean;
  isGitHubLink?: boolean;
};

export type ListItem = LinkItem & {
  datetime?: string;
};
