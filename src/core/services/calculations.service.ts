import { getCalculationsExampleRequest, getCalculationsRequest } from '../api/calc/calculations.api';
import { errorNotify } from '../helpers/notifications';
import { AppDispatch } from '../store';
import {
  calculationsFailed,
  calculationsRedirected,
  calculationsRequest,
  calculationsReset,
  calculationsSuccess,
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

export const setCalculationsIsRedirected = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(calculationsRedirected());
  };
};

export const resetCalculations = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(calculationsReset());
  };
};
