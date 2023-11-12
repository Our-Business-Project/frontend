import React, { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { FixedCostsData } from '../models/FixedCosts.model';

export type FixedCostsContextType = {
  data: { [key: string]: FixedCostsData };
  updateContext: (fieldName: string, newValue: number) => void;
};

export const FixedCostsContext = createContext<FixedCostsContextType | null>(null);

export function FixedCostsProvider({ children }: PropsWithChildren<{}>) {
  const contextValues: FixedCostsData[] = [
    {
      name: 'Оренда будівель та приміщень, обладнання',
      value: 0,
      columnNames: ['Посада', 'Од. вим', 'Кількість', 'Ціна, грн/од змін', 'Сума грн.'],
      data: [
        {
          Посада: 'Виробниче приміщення',
          'Од. вим': 'м кв',
          Кількість: 300,
          'Ціна, грн/од змін': 250,
          'Сума грн.': 75000,
        },
        {
          Посада: 'Офісне приміщення',
          'Од. вим': 'м кв',
          Кількість: 50,
          'Ціна, грн/од змін': 350,
          'Сума грн.': 17500,
        },
        {
          Посада: 'Торгова точка 1',
          'Од. вим': 'м кв',
          Кількість: 10,
          'Ціна, грн/од змін': 200,
          'Сума грн.': 20000,
        },
      ],
    },
    {
      name: 'Енергоресурси, Комунальні Витрати',
      value: 0,
      columnNames: ['Посада', 'Од. вим', 'Кількість', 'Ціна, грн/од змін', 'Сума грн.'],
      data: [
        {
          Посада: 'Електроенергія',
          'Од. вим': 'кВт/год',
          Кількість: null,
          'Ціна, грн/од змін': null,
          'Сума грн.': 1,
        },
        {
          Посада: 'Газ',
          'Од. вим': 'м3',
          Кількість: null,
          'Ціна, грн/од змін': null,
          'Сума грн.': null,
        },
        {
          Посада: 'Опалення',
          'Од. вим': 'ГКл',
          Кількість: null,
          'Ціна, грн/од змін': null,
          'Сума грн.': null,
        },
        {
          Посада: 'Паливо',
          'Од. вим': 'літр',
          Кількість: null,
          'Ціна, грн/од змін': null,
          'Сума грн.': null,
        },
        {
          Посада: 'Комунальні витрати',
          'Од. вим': 'грн',
          Кількість: null,
          'Ціна, грн/од змін': null,
          'Сума грн.': null,
        },
      ],
    },
    {
      name: 'Адміністративно Управлінський Персонал',
      value: 0,
      columnNames: ['Посада', 'Число, людина', 'Оклад грн./міс', 'Сума грн.'],
      data: [
        {
          Посада: 'Директор',
          'Число, людина': null,
          'Оклад грн./міс': null,
          'Сума грн.': null,
        },
        {
          Посада: 'Головний технолог',
          'Число, людина': null,
          'Оклад грн./міс': null,
          'Сума грн.': null,
        },
        {
          Посада: 'Охоронець',
          'Число, людина': null,
          'Оклад грн./міс': null,
          'Сума грн.': null,
        },
        {
          Посада: 'Прибиральниця',
          'Число, людина': null,
          'Оклад грн./міс': null,
          'Сума грн.': null,
        },
        {
          Посада: 'Водій',
          'Число, людина': null,
          'Оклад грн./міс': null,
          'Сума грн.': null,
        },
        {
          Посада: 'Бухгалтер',
          'Число, людина': null,
          'Оклад грн./міс': null,
          'Сума грн.': null,
        },
      ],
    },
    {
      name: "Зв'язок, Інше",
      value: 0,
      columnNames: ['Посада', 'Сума грн.'],
      data: [
        {
          Посада: "Мобільний зв'язок",
          'Сума грн.': null,
        },
        {
          Посада: 'Інтернет',
          'Сума грн.': null,
        },
        {
          Посада: 'Хостинг',
          'Сума грн.': null,
        },
        {
          Посада: 'Поштові витрати',
          'Сума грн.': null,
        },
        {
          Посада: 'Реклама',
          'Сума грн.': null,
        },
        {
          Посада: 'Подяки…',
          'Сума грн.': null,
        },
      ],
    },
  ];

  const [data, setData] = useState<{ [key: string]: FixedCostsData }>({});

  useEffect(() => {
    const initData: { [key: string]: FixedCostsData } = {};
    contextValues.forEach((item) => {
      initData[item.name] = item;
    });
    setData(initData);
  }, []);

  const updateContext = (fieldName: string, newValue: number) => {
    if (fieldName in data) {
      const updatedData = { ...data };
      updatedData[fieldName] = { ...updatedData[fieldName], value: newValue };
      setData(updatedData);
    }
  };

  return <FixedCostsContext.Provider value={{ data, updateContext }}>{children}</FixedCostsContext.Provider>;
}
