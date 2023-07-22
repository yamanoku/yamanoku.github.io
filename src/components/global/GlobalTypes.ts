export type LinkItem = {
  url?: string;
  title?: string;
  isGitHubLink?: boolean;
};

export type ListItem = LinkItem & {
  datetime?: string;
};
