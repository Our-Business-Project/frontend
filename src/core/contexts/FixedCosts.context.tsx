import React, { createContext, PropsWithChildren, useState } from 'react';
import { FixedCostsData } from '../models/FixedCosts.model';

export type FixedCostsContextType = {
  data: FixedCostsData[];
  updateContext: (id: number, newValue: number, element?: string) => void;
};

export const FixedCostsContext = createContext<FixedCostsContextType | null>(null);

export function FixedCostsProvider({ children }: PropsWithChildren<{}>) {
  const contextValues: FixedCostsData[] = [
    {
      id: 1,
      name: 'Оренда будівель та приміщень, обладнання',
      value: 0,
      columnNames: ['Посада', 'Од. вим', 'Кількість', 'Ціна, грн/од змін', 'Сума грн.'],
      data: [
        {
          id: 101,
          Посада: 'Виробниче приміщення',
          'Од. вим': 'м кв',
          Кількість: 0,
          'Ціна, грн/од змін': 0,
          'Сума грн.': 0,
        },
        {
          id: 102,
          Посада: 'Офісне приміщення',
          'Од. вим': 'м кв',
          Кількість: 0,
          'Ціна, грн/од змін': 0,
          'Сума грн.': 0,
        },
        {
          id: 103,
          Посада: 'Торгова точка 1',
          'Од. вим': 'м кв',
          Кількість: 0,
          'Ціна, грн/од змін': 0,
          'Сума грн.': 0,
        },
      ],
    },
    {
      id: 2,
      name: 'Енергоресурси, Комунальні Витрати',
      value: 0,
      columnNames: ['Посада', 'Од. вим', 'Кількість', 'Ціна, грн/од змін', 'Сума грн.'],
      data: [
        {
          id: 201,
          Посада: 'Електроенергія',
          'Од. вим': 'кВт/год',
          Кількість: 0,
          'Ціна, грн/од змін': 0,
          'Сума грн.': 0,
        },
        {
          id: 202,
          Посада: 'Газ',
          'Од. вим': 'м3',
          Кількість: 0,
          'Ціна, грн/од змін': 0,
          'Сума грн.': 0,
        },
        {
          id: 203,
          Посада: 'Опалення',
          'Од. вим': 'ГКл',
          Кількість: 0,
          'Ціна, грн/од змін': 0,
          'Сума грн.': 0,
        },
        {
          id: 204,
          Посада: 'Паливо',
          'Од. вим': 'літр',
          Кількість: 0,
          'Ціна, грн/од змін': 0,
          'Сума грн.': 0,
        },
        {
          id: 205,
          Посада: 'Комунальні витрати',
          'Од. вим': 'грн',
          Кількість: 0,
          'Ціна, грн/од змін': 0,
          'Сума грн.': 0,
        },
      ],
    },
    {
      id: 3,
      name: 'Адміністративно Управлінський Персонал',
      value: 0,
      columnNames: ['Посада', 'Число, людина', 'Оклад грн./міс', 'Сума грн.'],
      data: [
        {
          id: 301,
          Посада: 'Директор',
          'Число, людина': 0,
          'Оклад грн./міс': 0,
          'Сума грн.': 0,
        },
        {
          id: 302,
          Посада: 'Головний технолог',
          'Число, людина': 0,
          'Оклад грн./міс': 0,
          'Сума грн.': 0,
        },
        {
          id: 303,
          Посада: 'Охоронець',
          'Число, людина': 0,
          'Оклад грн./міс': 0,
          'Сума грн.': 0,
        },
        {
          id: 304,
          Посада: 'Прибиральниця',
          'Число, людина': 0,
          'Оклад грн./міс': 0,
          'Сума грн.': 0,
        },
        {
          id: 305,
          Посада: 'Водій',
          'Число, людина': 0,
          'Оклад грн./міс': 0,
          'Сума грн.': 0,
        },
        {
          id: 306,
          Посада: 'Бухгалтер',
          'Число, людина': 0,
          'Оклад грн./міс': 0,
          'Сума грн.': 0,
        },
      ],
    },
    {
      id: 4,
      name: "Зв'язок, Інше",
      value: 0,
      columnNames: ['Посада', 'Сума грн.'],
      data: [
        {
          id: 401,
          Посада: "Мобільний зв'язок",
          'Сума грн.': 0,
        },
        {
          id: 402,
          Посада: 'Інтернет',
          'Сума грн.': 0,
        },
        {
          id: 403,
          Посада: 'Хостинг',
          'Сума грн.': 0,
        },
        {
          id: 404,
          Посада: 'Поштові витрати',
          'Сума грн.': 0,
        },
        {
          id: 405,
          Посада: 'Реклама',
          'Сума грн.': 0,
        },
        {
          id: 406,
          Посада: 'Подяки…',
          'Сума грн.': 0,
        },
      ],
    },
  ];

  const [data, setData] = useState(contextValues);

  const updateContext = (id: number, newValue: number, element?: string) => {
    const updatedData = [...data];

    const foundContextValue = updatedData.find((contextValue) => {
      return contextValue.data.some((item) => item.id === id);
    });

    if (foundContextValue) {
      if (element) {
        const foundItemInData = foundContextValue.data.find((item) => item.id === id);
        if (foundItemInData) {
          foundItemInData[element] = +newValue;

          const numericValues = Object.entries(foundItemInData)
            .filter(([key, value]) => typeof value === 'number' && key !== 'id' && key !== 'Сума грн.')
            .map(([key, value]) => value);

          foundItemInData['Сума грн.'] = numericValues.reduce((acc, value) => +acc * +value, 1);
          const totalSum = foundContextValue.data.reduce((sum, item) => {
            return sum + (+item['Сума грн.'] || 0);
          }, 0);

          foundContextValue.value = totalSum;
        }
      }
    } else {
      const index = updatedData.findIndex((item) => item.id === id);

      if (index !== -1) {
        updatedData[index].value = +newValue;
      } else {
        console.log('Элемент с идентификатором', id, 'не найден.');
      }
    }

    setData(updatedData);
  };

  return <FixedCostsContext.Provider value={{ data, updateContext }}>{children}</FixedCostsContext.Provider>;
}
