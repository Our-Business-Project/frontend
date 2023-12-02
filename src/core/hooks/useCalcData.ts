import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from './useRedux';
import { selectCalcData } from '../store/selectors/calcData.selectors';
import { deleteDataService, getOneFileDataService } from '../services/calcData.service';
import { getOneFolderDataService } from '../services/calcData.service';

export const useCalcData = (token?: string) => {
  const dispatch = useAppDispatch();
  const calcData = useAppSelector(selectCalcData);

  const deleteData = useCallback(
    (folderId: string, dataId: string) => {
      if (token) dispatch(deleteDataService(token, folderId, dataId));
    },
    [dispatch, token]
  );

  const getOneFolderData = useCallback(
    (folderId: string) => {
      if (token) dispatch(getOneFolderDataService(token, folderId));
    },
    [dispatch, token]
  );

  const getOneFileData = useCallback(
    (folderId: string, fileId: string) => {
      if (token) dispatch(getOneFileDataService(token, folderId, fileId));
    },
    [dispatch, token]
  );

  return {
    calcData,
    deleteData,
    getOneFolderData,
    getOneFileData,
  };
};
