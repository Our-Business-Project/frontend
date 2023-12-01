import { AppDispatch } from '../store';
import { createDataRequest, deleteDataRequest } from '../api/calc/calcData.api';
import { calcDataRequest, calcDataSuccess, calcDataFailed } from '../store/actions/calcData.action';
import { errorNotify } from '../helpers/notifications';
import { getOneFolderDataRequest } from '../api/calc/calcData.api';
import { CalculatorData } from '../models/СalcData.model';
import { FixedCostsData } from '../models/FixedCosts.model';

export const deleteDataService = (token: string, folderId: string, dataId: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(calcDataRequest());
    try {
      await deleteDataRequest(token, folderId, dataId);
      const data = await getOneFolderDataRequest(token, folderId);
      dispatch(calcDataSuccess(data));
    } catch (err) {
      const error = err as Error;
      dispatch(calcDataFailed(error.message));
      errorNotify(error.message);
    }
  };
};

export const createDataService = (
  token: string,
  folderId: string,
  fileName: string,
  CalcData: CalculatorData,
  fixedCostsData: FixedCostsData[]
) => {
  return async (dispatch: AppDispatch) => {
    dispatch(calcDataRequest());
    try {
      await createDataRequest(token, folderId, fileName, CalcData, fixedCostsData);
      const responseData = await getOneFolderDataRequest(token, folderId);
      dispatch(calcDataSuccess(responseData));
    } catch (err) {
      const error = err as Error;
      dispatch(calcDataFailed(error.message));
      errorNotify(error.message);
    }
  };
};

export const getOneFolderDataService = (token: string, folderId: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(calcDataRequest());
    try {
      const data = await getOneFolderDataRequest(token, folderId);
      dispatch(calcDataSuccess(data));
    } catch (err) {
      const error = err as Error;
      dispatch(calcDataFailed(error.message));
      errorNotify(error.message);
    }
  };
};
