import { CalculatorData } from '../models/СalculatorData.model';
import { AppDispatch } from '../store';
import { updateData, resetData } from '../store/actions/calculator.action';

export const updateDataService = (data: CalculatorData) => {
  return (dispatch: AppDispatch) => {
    dispatch(updateData(data));
  };
};

export const resetDataService = () => {
  return (dispatch: AppDispatch) => {
    dispatch(resetData());
  };
};
