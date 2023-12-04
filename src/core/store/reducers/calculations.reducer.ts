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
import { CalculationsActions } from '../actions/calculations.action';
import { CalculationsData, CalculationsDataDefault } from '@/core/models/Calculations.model';
import { calcDataDefaults, fixedCostsDataDefaults } from '@/core/constants/calculations.constants';

interface CalculationsInterface {
  data: CalculationsData | CalculationsDataDefault;
  error: string | null;
  pending: boolean;
  redirected: boolean;
}

type CalculationsState = CalculationsInterface;

const initData = {
  data: calcDataDefaults,
  fixedCosts: fixedCostsDataDefaults,
};

const initialState: CalculationsState = {
  data: { ...initData },
  error: null,
  pending: false,
  redirected: true,
};

export default function calculationsReducer(state = initialState, action: CalculationsActions): CalculationsState {
  switch (action.type) {
    case CALCULATIONS_REQUEST: {
      return {
        ...state,
        data: { ...initData },
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
        data: { ...initData },
        error: action.message,
        pending: false,
      };
    }

    case CALCULATIONS_UPDATE_DATA: {
      return {
        ...state,
        data: state.data ? { ...state.data, data: action.data } : { ...initData },
      };
    }

    case CALCULATIONS_UPDATE_FIXED_COSTS: {
      return {
        ...state,
        data: state.data ? { ...state.data, fixedCosts: action.data } : { ...initData },
      };
    }

    case CALCULATIONS_UPDATE_FILE_NAME: {
      return {
        ...state,
        data: state.data ? { ...state.data, name: action.data } : { ...initData },
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
