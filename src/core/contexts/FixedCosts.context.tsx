import React, { createContext, PropsWithChildren, useState } from 'react';
import { FixedCostsData } from '../models/FixedCosts.model';

export type FixedCostsContextType = {
  fixedCostsData: FixedCostsData[];
  updateFixedCostsContext: (
    newValue: number,
    CostsTypeIndex: number,
    DataIndex?: number,
    DataItemIndex?: number
  ) => void;
};

export const FixedCostsContext = createContext<FixedCostsContextType | null>(null);

export function FixedCostsProvider({ children }: PropsWithChildren<{}>) {
  const contextValues: FixedCostsData[] = [
    {
      name: 'Оренда будівель та приміщень, обладнання',
      value: 0,
      columnNames: ['Посада', 'Од. вим', 'Кількість', 'Ціна, грн/од змін', 'Сума грн.'],
      data: [
        ['Виробниче приміщення', 'м кв', 0, 0, 0],
        ['Офісне приміщення', 'м кв', 0, 0, 0],
        ['Торгова точка 1', 'м кв', 0, 0, 0],
      ],
    },
    {
      name: 'Енергоресурси, Комунальні витрати',
      columnNames: ['Посада', 'Од. вим', 'Кількість', 'Ціна, грн/од змін', 'Сума грн.'],
      value: 0,
      data: [
        ['Електроенергія', 'кВт/год', 0, 0, 0],
        ['Газ', 'м3', 0, 0, 0],
        ['Опалення', 'ГКл', 0, 0, 0],
        ['Паливо', 'літр', 0, 0, 0],
        ['Комунальні витрати', 'грн', 0, 0, 0],
      ],
    },
    {
      name: 'Адміністративно управлінський персонал',
      value: 0,
      columnNames: ['Посада', 'Число, людина', 'Оклад грн./міс', 'Сума грн.'],
      data: [
        ['Директор', 0, 0, 0],
        ['Головний технолог', 0, 0, 0],
        ['Охоронець', 0, 0, 0],
        ['Прибиральниця', 0, 0, 0],
        ['Водій', 0, 0, 0],
        ['Бухгалтер', 0, 0, 0],
      ],
    },
    {
      name: "Зв'язок, Інше",
      value: 0,
      columnNames: ['Посада', 'Сума грн.'],
      data: [
        ["Мобільний зв'язок", 0],
        ['Інтернет', 0],
        ['Хостинг', 0],
        ['Поштові витрати', 0],
        ['Реклама', 0],
        ['Подяки…', 0],
      ],
    },
  ];

  const [fixedCostsData, setData] = useState(contextValues);

  const updateFixedCostsContext = (
    newValue: number,
    CostsTypeIndex: number,
    DataIndex?: number,
    DataItemIndex?: number
  ) => {
    const updatedData = [...fixedCostsData];
    if (typeof DataIndex === 'number' && typeof DataItemIndex === 'number') {
      const DataElement = updatedData[CostsTypeIndex].data[DataIndex];
      DataElement[DataItemIndex] = newValue;
      const indexOfSumaGrn = updatedData[CostsTypeIndex].columnNames.indexOf('Сума грн.');
      DataElement[indexOfSumaGrn] = newValue;
      let localProduct = 1;

      if (updatedData[CostsTypeIndex].columnNames.length > 2) {
        DataElement.forEach((element, index) => {
          if (typeof element === 'number' && index !== indexOfSumaGrn) {
            localProduct = localProduct * element;
          }
        });

        DataElement[indexOfSumaGrn] = localProduct;
      } else {
        updatedData[CostsTypeIndex].value = newValue;
      }

      let localSumm = 0;
      updatedData[CostsTypeIndex].data.forEach((row) => {
        if (Array.isArray(row) && row.length > indexOfSumaGrn) {
          localSumm += row[indexOfSumaGrn];
        }
      });
      updatedData[CostsTypeIndex].value = localSumm;
    }

    setData(updatedData);
  };

  return (
    <FixedCostsContext.Provider value={{ fixedCostsData, updateFixedCostsContext }}>
      {children}
    </FixedCostsContext.Provider>
  );
}
