export interface FixedCostsData {
  name: string;
  value: number;
  columnNames: string[];
  data: FixedCostsEntry[];
}

interface FixedCostsEntry {
  [key: string]: string | number | null;
}
