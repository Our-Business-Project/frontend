import { AppDispatch } from '../store';
import { getAllCaclFoldersRequest } from '../api/calc/getCalcFolders.api';
import { calcFoldersRequest, calcFoldersSuccess, calcFoldersFailed } from '../store/actions/calcFolders.action';

export const getAllCaclFoldersService = (token: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(calcFoldersRequest());
    try {
      const data = await getAllCaclFoldersRequest(token);
      dispatch(calcFoldersSuccess(data));
    } catch (err) {
      const error = err as Error;
      dispatch(calcFoldersFailed(error.message));
      // errorNotify(error.message);
    }
  };
};
