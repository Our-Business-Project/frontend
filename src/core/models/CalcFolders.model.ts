export interface CalcFolders {
  [key: string]: CalcFoldersUnit;
}

export interface CalcFoldersUnit {
  name: string;
  id: string;
  numberOfFiles?: number;
  createdAt: string;
}
