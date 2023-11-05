import CategoryLayout from '@/components/CategoryLayout';
import CalcInput from '@/components/ui/InputComponents/CalcInput';

export default function FormFields() {
  const inputFields = [
    { label: 'План виробництва', borderRadius: '0 0 15px 0', disabled: false, slider: true },
    { label: 'Собівартість', borderRadius: '0 0 15px 15px', disabled: false, slider: true },
    { label: 'Ціна за одиницю товару', borderRadius: '0 0 0 15px', disabled: false, slider: true },
    { label: 'Маржинальний прибуток' },
    { label: 'Виробнича собівартість', borderRadius: '0 15px 15px 0' },
    { label: 'Постійні витрати' },
    { label: 'Виторг від реалізації', borderRadius: '15px 0 0 15px' },
    { label: 'Точка беззбитковості' },
    { label: 'Прибуток' },
    { label: 'Хочу...' },
    { label: 'Точка беззбитковості' },
    { label: 'Точка беззбитковості' },
  ];

  return (
    <CategoryLayout title="Загальна інформація (обов'язково)">
      {inputFields.map((field, index) => (
        <CalcInput key={index} {...field} />
      ))}
    </CategoryLayout>
  );
}


