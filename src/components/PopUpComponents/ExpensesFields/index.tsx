import * as React from 'react';
import CalcInput from '@/components/ui/CalcInput';
import { Box } from '@mui/material';

export default function ExpensesFields() {
  const inputFields = [
    { measure: 'м²', label: 'Розмір приміщення' },
    { measure: 'грн', label: 'Ціна за оренду' },
    { measure: 'чол.', label: 'Кількість співробітників' },
    { measure: 'грн', label: 'Середня зарплата співр.' },
    { measure: 'грн', label: 'Витрати на рекламу' },
    { measure: 'грн', label: 'Додаткові витрати' },
  ];

  return (
    <Box
      sx={{
        display: 'grid',
        justifyItems: 'center',
        gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
      }}
    >
      {inputFields.map((field, index) => (
        <CalcInput key={index} {...field} />
      ))}
    </Box>
  );
}
