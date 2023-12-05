import { FixedCostsData } from './FixedCosts.model';
import { CalculatorDataUnit, CalculatorDesiredProductionPlanDataUnit } from './СalcData.model';

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
  DesiredProductionPlan: CalculatorDesiredProductionPlanDataUnit;
  DesiredCostPrice: CalculatorDataUnit;
  DesiredPricePerUnit: CalculatorDataUnit;
};

export type CalculationsData = {
  name: string;
  data: CalcData;
  fixedCosts: FixedCostsData[];
  createdAt: string;
  modifiedAt?: string;
  parentFolderId: string;
  id: string;
};

export function isCalculationsData(obj: any): obj is CalculationsData {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'name' in obj &&
    'data' in obj &&
    'fixedCosts' in obj &&
    'createdAt' in obj &&
    'parentFolderId' in obj &&
    'id' in obj
  );
}

export type CalculationsDataDefault = {
  data: CalcData;
  fixedCosts: FixedCostsData[];
};
