export interface CalculatorDataUnit {
  name?: string;
  value: number;
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
  data: CalculatorDataUnit | CalculatorShortDataUnit[];
  id: string;
}
export interface CalculatorShortDataUnit {
  name: string;
  createdAt: string;
  modifiedAt: string;
  numberOfFiles?: number;
  id: string;
}
