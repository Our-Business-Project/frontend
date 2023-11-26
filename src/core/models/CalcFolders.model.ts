export interface CalcFolders {
  [key: string]: CalcFoldersUnit;
}

export interface CalcFoldersUnit {
  name: string | null;
  id: string;
}
