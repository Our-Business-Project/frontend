import { getCalculationsRequest } from '../api/calc/calculations.api';
import { errorNotify } from '../helpers/notifications';
import { AppDispatch } from '../store';
import { calculationsFailed, calculationsRequest, calculationsSuccess } from '../store/actions/calculations.action';

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
