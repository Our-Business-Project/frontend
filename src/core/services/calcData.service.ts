import { AppDispatch } from '../store';
import { deleteDataRequest } from '../api/calc/calcData.api';
import { calcDataRequest, calcDataSuccess, calcDataFailed } from '../store/actions/calcData.action';
import { errorNotify } from '../helpers/notifications';
import { getOneFolderDataRequest } from '../api/calc/calcData.api';

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
