import { AppDispatch } from '../store';
import { getAllCaclFoldersRequest, createFolderRequest, deleteFolderRequest } from '../api/calc/calcFolders.api';
import { calcFoldersRequest, calcFoldersSuccess, calcFoldersFailed } from '../store/actions/calcFolders.action';
import { errorNotify } from '../helpers/notifications';

export const getAllFoldersService = (token: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(calcFoldersRequest());
    try {
      const data = await getAllCaclFoldersRequest(token);
      dispatch(calcFoldersSuccess(data));
    } catch (err) {
      const error = err as Error;
      dispatch(calcFoldersFailed(error.message));
      errorNotify(error.message);
    }
  };
};

export const createFolderService = (token: string, folderName: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(calcFoldersRequest());
    try {
      await createFolderRequest(token, folderName);
      const data = await getAllCaclFoldersRequest(token);
      dispatch(calcFoldersSuccess(data));
    } catch (err) {
      const error = err as Error;
      dispatch(calcFoldersFailed(error.message));
      errorNotify(error.message);
    }
  };
};

export const deleteFolderService = (token: string, folderId: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(calcFoldersRequest());
    try {
      await deleteFolderRequest(token, folderId);
      const data = await getAllCaclFoldersRequest(token);
      dispatch(calcFoldersSuccess(data));
    } catch (err) {
      const error = err as Error;
      dispatch(calcFoldersFailed(error.message));
      errorNotify(error.message);
    }
  };
};
