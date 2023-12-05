import { getCalculationsExampleRequest, getCalculationsRequest } from '../api/calc/calculations.api';
import { errorNotify } from '../helpers/notifications';
import { CalcData } from '../models/Calculations.model';
import { FixedCostsData } from '../models/FixedCosts.model';
import { AppDispatch } from '../store';
import {
  calculationsFailed,
  calculationsRedirected,
  calculationsRequest,
  calculationsReset,
  calculationsSuccess,
  calculationsUpdateData,
  calculationsUpdateFileName,
  calculationsUpdateFixedCosts,
} from '../store/actions/calculations.action';

export const getCalculationsService = (token: string, folderId: string, fileId: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(calculationsRequest());
    try {
      const data = await getCalculationsRequest(token, folderId, fileId);
      dispatch(calculationsSuccess(data));
    } catch (err) {
      const error = err as Error;
      dispatch(calculationsFailed(error.message));
      errorNotify(error.message);
    }
  };
};

export const getCalculationsExampleService = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(calculationsRequest());
    try {
      const data = await getCalculationsExampleRequest();
      dispatch(calculationsSuccess(data));
    } catch (err) {
      const error = err as Error;
      dispatch(calculationsFailed(error.message));
      errorNotify(error.message);
    }
  };
};

export const updateCalcDataService = (calcData: CalcData) => {
  return async (dispatch: AppDispatch) => {
    dispatch(calculationsUpdateData(calcData));
  };
};

export const updateFixedCostsService = (fixedCosts: FixedCostsData[]) => {
  return async (dispatch: AppDispatch) => {
    dispatch(calculationsUpdateFixedCosts(fixedCosts));
  };
};

export const updateFileNameService = (fileName: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(calculationsUpdateFileName(fileName));
  };
};

export const setCalculationsIsRedirectedService = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(calculationsRedirected());
  };
};

export const resetCalculationsService = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(calculationsReset());
  };
};
