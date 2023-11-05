export interface CalculatorData {
  [key: string]: {
    value: number;
    label: string;
    borderRadius?: string;
    disabled?: boolean;
    slider?: boolean;
  };
}
