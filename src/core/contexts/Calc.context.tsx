import React, { createContext, PropsWithChildren, useState } from 'react';
import { CalculatorData } from '../models/СalcData.model';

export type CalcContextType = {
  calcData: CalculatorData;
  updateContext: (fieldName: string, newValue: number) => void;
};

export const CalcContext = createContext<CalcContextType | null>(null);

export function CalcProvider({ children }: PropsWithChildren<{}>) {
  const contextValues: CalculatorData = {
    ProductionPlan: {
      value: 0,
      label: 'План виробництва',
      borderRadius: '0 0 15px 0',
      disabled: false,
      slider: true,
      maxValue: 10000,
    },
    CostPrice: {
      value: 0,
      label: 'Собівартість',
      borderRadius: '0 0 15px 15px',
      disabled: false,
      slider: true,
      maxValue: 10000,
    },
    PricePerUnit: {
      value: 0,
      label: 'Ціна за одиницю товару',
      borderRadius: '0 0 0 15px',
      disabled: false,
      slider: true,
      maxValue: 10000,
    },
    GrossProfit: { value: 0, label: 'Маржинальний дохід' },
    ProductionCost: {
      value: 0,
      label: 'Виробнича собівартість',
      borderRadius: '0 15px 15px 0',
    },
    FixedCosts: { value: 0, label: 'Постійні витрати', disabled: false },
    Revenue: {
      value: 0,
      label: 'Виторг від реалізації',
      borderRadius: '15px 0 0 15px',
    },
    BreakEvenPoint: { value: 0, label: 'Точка беззбитковості' },
    Profit: { value: 0, label: 'Прибуток' },
    Want: { value: 0, label: 'Бажаю заробити', slider: true, maxValue: 100000, disabled: false },
    DesiredProductionPlan: {
      value: 0,
      label: 'План виробництва повинен бути',
    },
    DesiredCostPrice: { value: 0, label: 'Собівартість повинна бути ' },
    DesiredPricePerUnit: { value: 0, label: 'Ціна повинна бути' },
  };

  const [calcData, setData] = useState(contextValues);

  const updateContext = (fieldName: string, newValue: number) => {
    if (fieldName in contextValues) {
      const updatedData = {
        ...calcData,
        [fieldName]: {
          ...calcData[fieldName],
          value: newValue,
        },
      };

      updatedData.GrossProfit.value = +(updatedData.PricePerUnit.value - updatedData.CostPrice.value).toFixed(2);
      updatedData.ProductionCost.value = +(updatedData.ProductionPlan.value * updatedData.CostPrice.value).toFixed(2);
      updatedData.Revenue.value = +(updatedData.ProductionPlan.value * updatedData.PricePerUnit.value).toFixed(2);
      updatedData.BreakEvenPoint.value = updatedData.GrossProfit.value
        ? Math.round(+(updatedData.FixedCosts.value / updatedData.GrossProfit.value))
        : 0;
      updatedData.Profit.value = +(
        updatedData.ProductionPlan.value * updatedData.GrossProfit.value -
        updatedData.FixedCosts.value
      ).toFixed(2);

      if (
        updatedData.Want.value &&
        updatedData.PricePerUnit.value &&
        updatedData.CostPrice.value &&
        updatedData.ProductionPlan.value
      ) {
        const DesiredGrossProfit =
          +(updatedData.FixedCosts.value + updatedData.Want.value) / updatedData.ProductionPlan.value;

        updatedData.DesiredProductionPlan.value = Math.round(
          +(updatedData.Want.value / updatedData.GrossProfit.value + updatedData.BreakEvenPoint.value)
        );
        updatedData.DesiredPricePerUnit.value = +(DesiredGrossProfit + updatedData.CostPrice.value).toFixed(2);
        updatedData.DesiredCostPrice.value = +(updatedData.PricePerUnit.value - DesiredGrossProfit).toFixed(2);
      }

      setData(updatedData);
    }
  };

  return <CalcContext.Provider value={{ calcData, updateContext }}>{children}</CalcContext.Provider>;
}
