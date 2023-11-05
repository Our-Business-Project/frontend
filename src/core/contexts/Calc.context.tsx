import { createContext, PropsWithChildren } from 'react';
import { CalculatorData } from '../models/СalculatorData.model';

export const CalcContext = createContext<CalculatorData | null>(null);

export function CalcProvider({ children }: PropsWithChildren<{}>) {
  const defaultValue = {
    ProductionPlan: { value: 0, label: 'План виробництва', borderRadius: '0 0 15px 0', disabled: false, slider: true },
    CostPrice: { value: 0, label: 'Собівартість', borderRadius: '0 0 15px 15px', disabled: false, slider: true },
    PricePerUnit: {
      value: 0,
      label: 'Ціна за одиницю товару',
      borderRadius: '0 0 0 15px',
      disabled: false,
      slider: true,
    },
    GrossProfit: { value: 0, label: 'Маржинальний прибуток' },
    ProductionCost: { value: 0, label: 'Виробнича собівартість', borderRadius: '0 15px 15px 0' },
    FixedCosts: { value: 0, label: 'Постійні витрати' },
    Revenue: { value: 0, label: 'Виторг від реалізації', borderRadius: '15px 0 0 15px' },
    BreakEvenPoint: { value: 0, label: 'Точка беззбитковості' },
    Profit: { value: 0, label: 'Прибуток' },
    Want: { value: 0, label: 'Хочу...' },
  };

  return <CalcContext.Provider value={defaultValue}>{children}</CalcContext.Provider>;
}
