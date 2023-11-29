import { CALC_DATA_REQUEST, CALC_DATA_SUCCESS, CALC_DATA_FAILED } from '../constants/calcData.constants';
import { CalcDataActions } from '../actions/calcData.action';
import { CalculatorDataIncome } from '@/core/models/СalcData.model';

interface CalcDataInterface {
  data: CalculatorDataIncome | null;
  error: string | null;
  pending: boolean;
}

type CalcDataState = CalcDataInterface;

const initialState: CalcDataState = {
  data: null,
  error: null,
  pending: false,
};

export default function calcDataReducer(state = initialState, action: CalcDataActions): CalcDataState {
  switch (action.type) {
    case CALC_DATA_REQUEST: {
      return {
        ...state,
        data: null,
        error: null,
        pending: true,
      };
    }
    case CALC_DATA_SUCCESS: {
      return {
        ...state,
        data: action.data,
        error: null,
        pending: false,
      };
    }
    case CALC_DATA_FAILED: {
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

export type { CalcDataState };
