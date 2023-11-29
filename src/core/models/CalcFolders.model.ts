export interface CalcFolders {
  [key: string]: CalcFoldersUnit;
}

export interface CalcFoldersUnit {
  name: string | null;
  id: string;
}

export interface OneCalcFolder {
  name: string;
  data: OneCalcFolderData[];
  id: string;
}

export interface OneCalcFolderData {
  name: string;
  id: string;
}
