import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from './useRedux';
import { selectCalcData } from '../store/selectors/calcData.selectors';
import { createDataService, deleteDataService, patchDataService } from '../services/calcData.service';
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
    (folderId: string, fileName: string, CalcData: CalculatorData, fixedCostsData: FixedCostsData[]) => {
      if (token) dispatch(createDataService(token, folderId, fileName, CalcData, fixedCostsData));
    },
    [dispatch, token]
  );

  const patchData = useCallback(
    (
      folderId: string,
      dataId: string,
      fileName: string,
      CalcData: CalculatorData,
      fixedCostsData: FixedCostsData[]
    ) => {
      if (token) dispatch(patchDataService(token, folderId, dataId, fileName, CalcData, fixedCostsData));
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
    patchData,
    getOneFolderData,
  };
};
