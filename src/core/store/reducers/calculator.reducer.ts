import { CALC_REQUEST, CALC_SUCCESS, CALC_FAILED } from '../constants/calculator.constants';
import { CalculatorActions } from '../actions/calculator.action';
import { CalculatorData } from '@/core/models/СalculatorData.model';

interface CalculatorInterface {
  data: CalculatorData | null;
  error: string | null;
  pending: boolean;
}

type CalculatorState = CalculatorInterface;

const initialState: CalculatorState = {
  data: null,
  error: null,
  pending: false,
};

export default function calculatorReducer(state = initialState, action: CalculatorActions): CalculatorState {
  switch (action.type) {
    case CALC_REQUEST: {
      return {
        ...state,
        data: null,
        error: null,
        pending: true,
      };
    }
    case CALC_SUCCESS: {
      return {
        ...state,
        data: action.data,
        error: null,
        pending: false,
      };
    }
    case CALC_FAILED: {
      return {
        ...state,
        data: null,
        error: action.message,
        pending: false,
      };
    }

    default:
      return { ...state };
  }
}

export type { CalculatorState };
