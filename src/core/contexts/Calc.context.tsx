import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { CalculatorData } from '../models/СalculatorData.model';

export type CalcContextType = {
  data: CalculatorData;
  updateContext: (fieldName: string, newValue: number) => void;
};

export const CalcContext = createContext<CalcContextType | null>(null);

export function CalcProvider({ children }: PropsWithChildren<{}>) {
  const contextValues: CalculatorData = {
    ProductionPlan: {
      name: 'ProductionPlan',
      value: 2800,
      label: 'План виробництва',
      borderRadius: '0 0 15px 0',
      disabled: false,
      slider: true,
    },
    CostPrice: {
      name: 'CostPrice',
      value: 80,
      label: 'Собівартість',
      borderRadius: '0 0 15px 15px',
      disabled: false,
      slider: true,
    },
    PricePerUnit: {
      name: 'PricePerUnit',
      value: 140,
      label: 'Ціна за одиницю товару',
      borderRadius: '0 0 0 15px',
      disabled: false,
      slider: true,
    },
    GrossProfit: { name: 'GrossProfit', value: 4, label: 'Маржинальний дохід' },
    ProductionCost: {
      name: 'ProductionCost',
      value: 0,
      label: 'Виробнича собівартість',
      borderRadius: '0 15px 15px 0',
    },
    FixedCosts: { name: 'FixedCosts', value: 168000, label: 'Постійні витрати' },
    Revenue: { name: 'Revenue', value: 0, label: 'Виторг від реалізації', borderRadius: '15px 0 0 15px' },
    BreakEvenPoint: { name: 'BreakEvenPoint', value: 0, label: 'Точка беззбитковості' },
    Profit: { name: 'Profit', value: 0, label: 'Прибуток' },
    Want: { name: 'GrossProfit', value: 0, label: 'Хочу...' },
  };

  const [data, setData] = useState(contextValues);

  const updateContext = (fieldName: string, newValue: number) => {
    if (fieldName in contextValues) {
      const updatedData = {
        ...data,
        [fieldName]: {
          ...data[fieldName],
          value: newValue,
        },
      };

      updatedData.GrossProfit.value = updatedData.PricePerUnit.value - updatedData.CostPrice.value;
      updatedData.ProductionCost.value = updatedData.ProductionPlan.value * updatedData.CostPrice.value;
      updatedData.Revenue.value = updatedData.ProductionPlan.value * updatedData.PricePerUnit.value;
      updatedData.BreakEvenPoint.value = updatedData.FixedCosts.value / updatedData.GrossProfit.value;

      console.log(newValue);

      setData(updatedData);
    }
  };

  useEffect(() => {
    // console.log(data)
    // data.GrossProfit.value = data.PricePerUnit.value - data.CostPrice.value;
    // data.ProductionCost.value = data.ProductionPlan.value * data.CostPrice.value;
    // data.Revenue.value = data.ProductionPlan.value * data.PricePerUnit.value;
    // data.BreakEvenPoint.value = data.FixedCosts.value / data.GrossProfit.value;
  }, [data]);

  return <CalcContext.Provider value={{ data, updateContext }}>{children}</CalcContext.Provider>;
}
