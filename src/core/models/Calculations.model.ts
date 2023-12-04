import { FixedCostsData } from './FixedCosts.model';
import { CalculatorDataUnit } from './СalcData.model';

export type FieldName =
  | 'ProductionPlan'
  | 'CostPrice'
  | 'PricePerUnit'
  | 'GrossProfit'
  | 'ProductionCost'
  | 'FixedCosts'
  | 'Revenue'
  | 'BreakEvenPoint'
  | 'Profit'
  | 'Want'
  | 'DesiredProductionPlan'
  | 'DesiredCostPrice'
  | 'DesiredPricePerUnit';

export type CalcData = {
  ProductionPlan: CalculatorDataUnit;
  CostPrice: CalculatorDataUnit;
  PricePerUnit: CalculatorDataUnit;
  GrossProfit: CalculatorDataUnit;
  ProductionCost: CalculatorDataUnit;
  FixedCosts: CalculatorDataUnit;
  Revenue: CalculatorDataUnit;
  BreakEvenPoint: CalculatorDataUnit;
  Profit: CalculatorDataUnit;
  Want: CalculatorDataUnit;
  DesiredProductionPlan: CalculatorDataUnit;
  DesiredCostPrice: CalculatorDataUnit;
  DesiredPricePerUnit: CalculatorDataUnit;
};

export type CalculationsData = {
  name: string;
  data: CalcData;
  fixedCosts: FixedCostsData[];
  createdAt: string;
  modifiedAt?: string;
  id: string;
};

export type CalculationsDataDefault = {
  data: CalcData;
  fixedCosts: FixedCostsData[];
};
