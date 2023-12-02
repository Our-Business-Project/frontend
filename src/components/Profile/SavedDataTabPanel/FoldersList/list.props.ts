export type Folder = {
  name: string;
};

export type ListProps = {
  items: Folder[];
  onClick: (index: string) => void;
};
