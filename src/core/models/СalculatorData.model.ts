export interface CalculatorData {
  productionPlan: number | null;
  costPrice: number | null;
  unitPrice: number | null;
  desiredEarnings: number | null;
  fixedCosts: number | null; // Постійні витрати
  additionalInfo: {
    taxGroup: string | null; // Група оподаткування
    rentPrice: number | null; // Ціна за аренду
    squareFootage: number | null; // Квадратура приміщення
    averageSalary: number | null; // Середня зарплата співробітника
    numberOfEmployees: number | null; // Кількість співробітників
    advertisingCosts: number | null; // Витрати на рекламу
    additionalCosts: number | null;
  };
}
