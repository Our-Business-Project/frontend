import { CalculationData } from '@/core/models/Calculations.model';
import { CALCULATIONS_REQUEST, CALCULATIONS_SUCCESS, CALCULATIONS_FAILED } from '../constants/calculations.constants';

interface CalculationsRequestAction {
  type: typeof CALCULATIONS_REQUEST;
}

interface CalculationsSuccessAction {
  type: typeof CALCULATIONS_SUCCESS;
  data: CalculationData;
}

interface CalculationsFailedAction {
  type: typeof CALCULATIONS_FAILED;
  message: string;
}

type CalculationsActions = CalculationsRequestAction | CalculationsSuccessAction | CalculationsFailedAction;

const calculationsRequest = (): CalculationsRequestAction => ({
  type: CALCULATIONS_REQUEST,
});

const calculationsSuccess = (data: CalculationData): CalculationsSuccessAction => ({
  type: CALCULATIONS_SUCCESS,
  data,
});

const calculationsFailed = (message: string): CalculationsFailedAction => ({
  type: CALCULATIONS_FAILED,
  message,
});

export type { CalculationsActions };
export { calculationsRequest, calculationsSuccess, calculationsFailed };
