import {
  CALCULATIONS_REQUEST,
  CALCULATIONS_SUCCESS,
  CALCULATIONS_FAILED,
  CALCULATIONS_REDIRECTED,
  CALCULATIONS_RESET,
} from '../constants/calculations.constants';
import { CalculationsActions } from '../actions/calculations.action';
import { CalculationData } from '@/core/models/Calculations.model';

interface CalculationsInterface {
  data: CalculationData | null;
  error: string | null;
  pending: boolean;
  redirected: boolean;
}

type CalculationsState = CalculationsInterface;

const initialState: CalculationsState = {
  data: null,
  error: null,
  pending: false,
  redirected: true,
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
        redirected: false,
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

    case CALCULATIONS_REDIRECTED: {
      return { ...state, redirected: true };
    }

    case CALCULATIONS_RESET: {
      return { ...initialState };
    }

    default:
      return { ...state };
  }
}

export type { CalculationsState };
