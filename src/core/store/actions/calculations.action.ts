import { CalcData, CalculationsData } from '@/core/models/Calculations.model';
import {
  CALCULATIONS_REQUEST,
  CALCULATIONS_SUCCESS,
  CALCULATIONS_FAILED,
  CALCULATIONS_UPDATE_DATA,
  CALCULATIONS_UPDATE_FIXED_COSTS,
  CALCULATIONS_UPDATE_FILE_NAME,
  CALCULATIONS_REDIRECTED,
  CALCULATIONS_RESET,
} from '../constants/calculations.constants';
import { FixedCostsData } from '@/core/models/FixedCosts.model';

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

interface CalculationsUpdateDataAction {
  type: typeof CALCULATIONS_UPDATE_DATA;
  data: CalcData;
}

interface CalculationsUpdateFixedCostsAction {
  type: typeof CALCULATIONS_UPDATE_FIXED_COSTS;
  data: FixedCostsData[];
}

interface CalculationsUpdateFileNameAction {
  type: typeof CALCULATIONS_UPDATE_FILE_NAME;
  data: string;
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
  | CalculationsUpdateDataAction
  | CalculationsUpdateFixedCostsAction
  | CalculationsUpdateFileNameAction
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

const calculationsUpdateData = (data: CalcData): CalculationsUpdateDataAction => ({
  type: CALCULATIONS_UPDATE_DATA,
  data,
});

const calculationsUpdateFixedCosts = (data: FixedCostsData[]): CalculationsUpdateFixedCostsAction => ({
  type: CALCULATIONS_UPDATE_FIXED_COSTS,
  data,
});

const calculationsUpdateFileName = (data: string): CalculationsUpdateFileNameAction => ({
  type: CALCULATIONS_UPDATE_FILE_NAME,
  data,
});

const calculationsRedirected = (): CalculationsRedirectedAction => ({
  type: CALCULATIONS_REDIRECTED,
});

const calculationsReset = (): CalculationsResetAction => ({
  type: CALCULATIONS_RESET,
});

export type { CalculationsActions };
export {
  calculationsRequest,
  calculationsSuccess,
  calculationsFailed,
  calculationsUpdateData,
  calculationsUpdateFixedCosts,
  calculationsUpdateFileName,
  calculationsRedirected,
  calculationsReset,
};
