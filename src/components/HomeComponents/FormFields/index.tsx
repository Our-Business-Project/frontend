import CategoryLayout from "@/components/CategoryLayout";
import CalcInput from "@/components/ui/CalcInput";

export default function FormFields() {
  const inputFields = [
    { measure: 'шт', label: 'План виробництва' },
    { measure: 'грн', label: 'Собівартість товару' },
    { measure: 'грн', label: 'Ціна за одиницю товару' },
    { measure: 'грн', label: 'Бажаю заробити' },
    { measure: 'грн', label: 'Постійні витрати', helper: true },
  ];

  return (
    <CategoryLayout title="Загальна інформація (обов'язково)">
      {inputFields.map((field, index) => (
        <CalcInput key={index} {...field} />
      ))}
    </CategoryLayout>
  );
}
