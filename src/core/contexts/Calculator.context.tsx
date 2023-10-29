import { createContext, PropsWithChildren, useReducer } from 'react';

type AdditionalInfo = {
  taxGroup: string; // Група оподаткування
  rentPrice: number; // Ціна за аренду
  squareFootage: number; // Квадратура приміщення
  averageSalary: number; // Середня зарплата співробітника
  numberOfEmployees: number; // Кількість співробітників
  advertisingCosts: number; // Витрати на рекламу
  additionalCosts: number; // Додаткові витрати
};

type CalculatorData = {
  productionPlan: number;
  costPrice: number;
  unitPrice: number;
  desiredEarnings: number;
  fixedCosts: number; // Постійні витрати
  additionalInfo: AdditionalInfo; // Додаткова інформація
};

type CalculatorAction = { type: 'UPDATE_DATA'; payload: CalculatorData } | { type: 'RESET_DATA' };

type CalculatorContextType = {
  data: CalculatorData;
  updateData: (data: CalculatorData) => void;
  resetData: () => void;
};

const CalculatorContext = createContext<CalculatorContextType | null>(null);

export default function CalculatorProvider({ children }: PropsWithChildren<{}>) {
  const initialState: CalculatorData = {
    productionPlan: 0,
    costPrice: 0,
    unitPrice: 0,
    desiredEarnings: 0,
    fixedCosts: 0,
    additionalInfo: {
      taxGroup: '',
      rentPrice: 0,
      squareFootage: 0,
      averageSalary: 0,
      numberOfEmployees: 0,
      advertisingCosts: 0,
      additionalCosts: 0,
    },
  };

  const calculatorReducer = (state: CalculatorData, action: CalculatorAction): CalculatorData => {
    switch (action.type) {
      case 'UPDATE_DATA':
        return { ...state, ...action.payload };

      case 'RESET_DATA':
        return initialState;

      default:
        return state;
    }
  };

  const [data, dispatch] = useReducer(calculatorReducer, initialState);

  const updateData = (newData: CalculatorData) => {
    dispatch({ type: 'UPDATE_DATA', payload: newData });
  };

  const resetData = () => {
    dispatch({ type: 'RESET_DATA' });
  };

  const contextValue: CalculatorContextType = {
    data,
    updateData,
    resetData,
  };

  return <CalculatorContext.Provider value={contextValue}>{children}</CalculatorContext.Provider>;
}
