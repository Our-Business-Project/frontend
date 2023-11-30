import { CalculatorDataIncome } from '@/core/models/СalcData.model';
import { CALC_DATA_REQUEST, CALC_DATA_SUCCESS, CALC_DATA_FAILED } from '../constants/calcData.constants';

interface CalcDataRequestAction {
  type: typeof CALC_DATA_REQUEST;
}

interface CalcDataSuccessAction {
  type: typeof CALC_DATA_SUCCESS;
  data: CalculatorDataIncome;
}

interface CalcDataFailedAction {
  type: typeof CALC_DATA_FAILED;
  message: string;
}

type CalcDataActions = CalcDataRequestAction | CalcDataSuccessAction | CalcDataFailedAction;

const calcDataRequest = (): CalcDataRequestAction => ({
  type: CALC_DATA_REQUEST,
});

const calcDataSuccess = (data: CalculatorDataIncome): CalcDataSuccessAction => ({
  type: CALC_DATA_SUCCESS,
  data,
});

const calcDataFailed = (message: string): CalcDataFailedAction => ({
  type: CALC_DATA_FAILED,
  message,
});

export type { CalcDataActions };
export { calcDataRequest, calcDataSuccess, calcDataFailed };
