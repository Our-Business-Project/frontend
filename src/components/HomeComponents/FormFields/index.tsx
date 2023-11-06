import CategoryLayout from '@/components/CategoryLayout';
import CalcInput from '@/components/ui/InputComponents/CalcInput';
import { CalcContext } from '@/core/contexts/Calc.context';
import { Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';

export default function FormFields() {
  const calcContext = useContext(CalcContext);

  if (!calcContext) {
    return <Typography title="Щось пішло не так..." />;
  }

  const { data } = calcContext;

  return (
    <CategoryLayout title="Загальна інформація (обов'язково)">
      {Object.keys(data).map((key) => (
        <CalcInput key={key} {...data[key]} />
      ))}
    </CategoryLayout>
  );
}
