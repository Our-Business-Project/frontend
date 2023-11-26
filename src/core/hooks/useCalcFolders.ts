import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from './useRedux';
import { selectCalcFolders } from '../store/selectors/calcFolders.selector';
import { createFolderService, getAllCaclFoldersService, deleteFolderService } from '../services/calcFolders.service';

export const useCalcFolders = (token?: string) => {
  const dispatch = useAppDispatch();
  const calcFolders = useAppSelector(selectCalcFolders);

  const getAllCaclFolders = useCallback(() => {
    if (token) dispatch(getAllCaclFoldersService(token));
  }, [dispatch, token]);

  const createFolder = useCallback(
    (folderName: string) => {
      if (token) dispatch(createFolderService(token, folderName));
    },
    [dispatch, token]
  );

  const deleteFolder = useCallback(
    (folderId: string) => {
      if (token) dispatch(deleteFolderService(token, folderId));
    },
    [dispatch, token]
  );

  return {
    calcFolders,
    getAllCaclFolders,
    createFolder,
    deleteFolder,
  };
};
