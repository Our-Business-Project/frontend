import React, { createContext, PropsWithChildren, useContext } from 'react';
import { CalcFolders } from '../models/CalcFolders.model';
import { CalculatorShortDataUnit } from '../models/СalcData.model';

export type DataListContextType = {
  items: CalcFolders | CalculatorShortDataUnit[] | null;
  folderOnClick: (folderId: string) => void;
  fileOnClick: (fileId: string) => void;
  goBack: () => void;
  type: 'folders' | 'files';
};

export const DataListContext = createContext<DataListContextType | null>(null);

export function DataListProvider({
  items,
  folderOnClick,
  fileOnClick,
  goBack,
  type,
  children,
}: DataListContextType & PropsWithChildren<{}>) {
  return (
    <DataListContext.Provider
      value={{
        items,
        folderOnClick,
        fileOnClick,
        goBack,
        type,
      }}
    >
      {children}
    </DataListContext.Provider>
  );
}
