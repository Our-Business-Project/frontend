import { AppDispatch } from '../store';
import { createDataRequest, deleteDataRequest, patchDataRequest } from '../api/calc/calcData.api';
import { calcDataRequest, calcDataSuccess, calcDataFailed } from '../store/actions/calcData.action';
import { errorNotify, successNotify } from '../helpers/notifications';
import { getOneFolderDataRequest } from '../api/calc/calcData.api';
import { FixedCostsData } from '../models/FixedCosts.model';
import { CalcData } from '../models/Calculations.model';

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
  calcData: CalcData,
  fixedCostsData: FixedCostsData[]
) => {
  return async (dispatch: AppDispatch) => {
    dispatch(calcDataRequest());
    try {
      await createDataRequest(token, folderId, fileName, calcData, fixedCostsData);
      const responseData = await getOneFolderDataRequest(token, folderId);
      dispatch(calcDataSuccess(responseData));
    } catch (err) {
      const error = err as Error;
      dispatch(calcDataFailed(error.message));
      errorNotify(error.message);
    }
  };
};

export const patchDataService = (
  token: string,
  folderId: string,
  dataId: string,
  fileName: string,
  calcData: CalcData,
  fixedCostsData: FixedCostsData[]
) => {
  return async (dispatch: AppDispatch) => {
    dispatch(calcDataRequest());
    try {
      await patchDataRequest(token, folderId, dataId, fileName, calcData, fixedCostsData);
      const responseData = await getOneFolderDataRequest(token, folderId);
      dispatch(calcDataSuccess(responseData));
      successNotify('Дані успішно оновлено');
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
      console.log(data);
      dispatch(calcDataSuccess(data));
    } catch (err) {
      const error = err as Error;
      dispatch(calcDataFailed(error.message));
      errorNotify(error.message);
    }
  };
};
