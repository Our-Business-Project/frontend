import { CalculatorData } from '@/core/models/СalculatorData.model';
import { CALC_REQUEST, CALC_SUCCESS, CALC_FAILED } from '../constants/calculator.constants';

interface CalcRequestAction {
  type: typeof CALC_REQUEST;
}

interface CalcSuccessAction {
  type: typeof CALC_SUCCESS;
  data: CalculatorData;
}

interface CalcFailedAction {
  type: typeof CALC_FAILED;
  message: string;
}

type CalculatorActions = CalcRequestAction | CalcSuccessAction | CalcFailedAction;

const calcRequest = (): CalcRequestAction => ({
  type: CALC_REQUEST,
});

const calcSuccess = (data: CalculatorData): CalcSuccessAction => ({
  type: CALC_SUCCESS,
  data,
});

const calcFailed = (message: string): CalcFailedAction => ({
  type: CALC_FAILED,
  message,
});

export type { CalculatorActions };
export { calcRequest, calcSuccess, calcFailed };
