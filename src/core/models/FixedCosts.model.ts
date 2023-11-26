export interface FixedCostsData {
  id: number;
  name: string;
  value: number;
  columnNames: string[];
  data: FixedCostsEntry[];
}

export interface FixedCostsEntry {
  id: number;
  [key: string]: string | number;
}
