import { CALCULATIONS_REQUEST, CALCULATIONS_SUCCESS, CALCULATIONS_FAILED } from '../constants/calculations.constants';
import { CalculationsActions } from '../actions/calculations.action';
import { CalculationData } from '@/core/models/Calculations.model';

interface CalculationsInterface {
  data: CalculationData | null;
  error: string | null;
  pending: boolean;
}

type CalculationsState = CalculationsInterface;

const initialState: CalculationsState = {
  data: null,
  error: null,
  pending: false,
};

export default function calculationsReducer(state = initialState, action: CalculationsActions): CalculationsState {
  switch (action.type) {
    case CALCULATIONS_REQUEST: {
      return {
        ...state,
        data: null,
        error: null,
        pending: true,
      };
    }
    case CALCULATIONS_SUCCESS: {
      return {
        ...state,
        data: action.data,
        error: null,
        pending: false,
      };
    }
    case CALCULATIONS_FAILED: {
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

export type { CalculationsState };
