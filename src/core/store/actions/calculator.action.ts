import { CalculatorData } from '@/core/models/СalculatorData.model';
import { RESET_DATA, UPDATE_DATA } from '../constants/calculator.constants';

interface CalculatorUpdateAction {
  type: typeof UPDATE_DATA;
  data: CalculatorData;
}

interface CalculatorResetAction {
  type: typeof RESET_DATA;
}

type CalculatorActions = CalculatorUpdateAction | CalculatorResetAction;

const updateData = (data: CalculatorData): CalculatorUpdateAction => ({
  type: UPDATE_DATA,
  data,
});

const resetData = (): CalculatorResetAction => ({
  type: RESET_DATA,
});

export type { CalculatorActions };
export { updateData, resetData };
