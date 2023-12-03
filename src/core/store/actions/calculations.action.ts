import { CalculationsData } from '@/core/models/Calculations.model';
import {
  CALCULATIONS_REQUEST,
  CALCULATIONS_SUCCESS,
  CALCULATIONS_FAILED,
  CALCULATIONS_REDIRECTED,
  CALCULATIONS_RESET,
} from '../constants/calculations.constants';

interface CalculationsRequestAction {
  type: typeof CALCULATIONS_REQUEST;
}

interface CalculationsSuccessAction {
  type: typeof CALCULATIONS_SUCCESS;
  data: CalculationsData;
}

interface CalculationsFailedAction {
  type: typeof CALCULATIONS_FAILED;
  message: string;
}

interface CalculationsRedirectedAction {
  type: typeof CALCULATIONS_REDIRECTED;
}

interface CalculationsResetAction {
  type: typeof CALCULATIONS_RESET;
}

type CalculationsActions =
  | CalculationsRequestAction
  | CalculationsSuccessAction
  | CalculationsFailedAction
  | CalculationsRedirectedAction
  | CalculationsResetAction;

const calculationsRequest = (): CalculationsRequestAction => ({
  type: CALCULATIONS_REQUEST,
});

const calculationsSuccess = (data: CalculationsData): CalculationsSuccessAction => ({
  type: CALCULATIONS_SUCCESS,
  data,
});

const calculationsFailed = (message: string): CalculationsFailedAction => ({
  type: CALCULATIONS_FAILED,
  message,
});

const calculationsRedirected = (): CalculationsRedirectedAction => ({
  type: CALCULATIONS_REDIRECTED,
});

const calculationsReset = (): CalculationsResetAction => ({
  type: CALCULATIONS_RESET,
});

export type { CalculationsActions };
export { calculationsRequest, calculationsSuccess, calculationsFailed, calculationsRedirected, calculationsReset };
