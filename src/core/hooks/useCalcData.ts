import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from './useRedux';
import { selectCalcData } from '../store/selectors/calcData.selectors';
import { createDataService, deleteDataService } from '../services/calcData.service';
import { getOneFolderDataService } from '../services/calcData.service';
import { CalculatorData } from '../models/СalcData.model';
import { FixedCostsData } from '../models/FixedCosts.model';

export const useCalcData = (token?: string) => {
  const dispatch = useAppDispatch();
  const calcData = useAppSelector(selectCalcData);

  const deleteData = useCallback(
    (folderId: string, dataId: string) => {
      if (token) dispatch(deleteDataService(token, folderId, dataId));
    },
    [dispatch, token]
  );

  const createData = useCallback(
    (folderId: string, fileName: string, calcData: CalculatorData, fixedCostsData: FixedCostsData[]) => {
      if (token) dispatch(createDataService(token, folderId, fileName, calcData, fixedCostsData));
    },
    [dispatch, token]
  );

  const getOneFolderData = useCallback(
    (folderId: string) => {
      if (token) dispatch(getOneFolderDataService(token, folderId));
    },
    [dispatch, token]
  );

  return {
    calcData,
    deleteData,
    createData,
    getOneFolderData,
  };
};
