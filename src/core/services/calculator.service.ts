import { CalculatorData } from '../models/СalculatorData.model';
import { AppDispatch } from '../store';
import { getAllCaclFoldersRequest } from '../api/calc/getFolders.api';
import { calcRequest, calcSuccess, calcFailed } from '../store/actions/calculator.action';

// export const updateDataService = (data: CalculatorData) => {
//   return (dispatch: AppDispatch) => {
//     dispatch(updateData(data));
//   };
// };

// export const resetDataService = () => {
//   return (dispatch: AppDispatch) => {
//     dispatch(resetData());
//   };
// };

export const getAllCaclFoldersService = (token: string, id: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(calcRequest());
    try {
      const data = await getAllCaclFoldersRequest(token, id);
      dispatch(calcSuccess(data));
    } catch (err) {
      const error = err as Error;
      dispatch(calcFailed(error.message));
      // errorNotify(error.message);
    }
  };
};
