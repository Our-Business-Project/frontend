import CategoryLayout from '@/components/CategoryLayout';
import CalcInput from '@/components/ui/InputComponents/CalcInput';
import { useContext } from 'react';
import { CalcContext } from '@/core/contexts/Calc.context';
import { CalculatorData } from '@/core/models/СalculatorData.model';

export default function FormFields() {
const inputFields: CalculatorData | null = useContext(CalcContext);

  const fieldKeys = inputFields ? Object.keys(inputFields) : [];

  return (
    <CategoryLayout title="Загальна інформація (обов'язково)">
      {inputFields && fieldKeys.map((key) => <CalcInput key={key} {...inputFields[key]} />)}
    </CategoryLayout>
  );
}
