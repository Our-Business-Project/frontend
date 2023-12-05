export interface CalculatorDataUnit {
  value: number;
  label?: string;
  borderRadius?: string;
  disabled?: boolean;
  slider?: boolean;
  maxValue?: number;
}
export interface CalculatorDesiredProductionPlanDataUnit {
  value: number | null;
  label?: string;
  borderRadius?: string;
  disabled?: boolean;
  slider?: boolean;
  maxValue?: number;
}

export interface CalculatorData {
  [key: string]: CalculatorDataUnit;
}
export interface CalculatorDataIncome {
  name: string;
  data: CalculatorShortDataUnit[];
  id: string;
}
export interface CalculatorShortDataUnit {
  name: string;
  createdAt: string;
  modifiedAt: string;
  parentFolderId: string;
  numberOfFiles?: number;
  id: string;
}
