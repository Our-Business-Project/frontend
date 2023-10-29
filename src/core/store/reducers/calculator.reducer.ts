import { RESET_DATA, UPDATE_DATA } from '../constants/calculator.constants';
import { CalculatorActions } from '../actions/calculator.action';
import { CalculatorData } from '@/core/models/СalculatorData.model';

interface CalculatorInterface {
  data: CalculatorData;
}

type CalculatorState = CalculatorInterface;

const initialState: CalculatorState = {
  data: {
    productionPlan: null,
    costPrice: null,
    unitPrice: null,
    desiredEarnings: null,
    fixedCosts: null,
    additionalInfo: {
      taxGroup: null,
      rentPrice: null,
      squareFootage: null,
      averageSalary: null,
      numberOfEmployees: null,
      advertisingCosts: null,
      additionalCosts: null,
    },
  },
};

export default function calculatorReducer(state = initialState, action: CalculatorActions): CalculatorState {
  switch (action.type) {
    case UPDATE_DATA: {
      return {
        ...state,
        data: action.data,
      };
    }
    case RESET_DATA: {
      return {
        ...initialState,
      };
    }
    default:
      return { ...state };
  }
}

export type { CalculatorState };
