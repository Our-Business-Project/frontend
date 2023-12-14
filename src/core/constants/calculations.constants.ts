import { CalcData } from '../models/Calculations.model';
import { FixedCostsData } from '../models/FixedCosts.model';

export const calcDataDefaults: CalcData = {
  ProductionPlan: {
    value: 0,
    label: 'План виробництва',
    borderRadius: '0 0 15px 0',
    disabled: false,
    slider: true,
    maxValue: 10000,
  },
  CostPrice: {
    value: 0,
    label: 'Собівартість',
    borderRadius: '0 0 15px 15px',
    disabled: false,
    slider: true,
    maxValue: 10000,
  },
  PricePerUnit: {
    value: 0,
    label: 'Ціна за одиницю товару',
    borderRadius: '0 0 0 15px',
    disabled: false,
    slider: true,
    maxValue: 10000,
  },
  GrossProfit: { value: 0, label: 'Маржинальний дохід' },
  ProductionCost: {
    value: 0,
    label: 'Виробнича собівартість',
    borderRadius: '0 15px 15px 0',
  },
  FixedCosts: { value: 0, label: 'Постійні витрати', disabled: false },
  Revenue: {
    value: 0,
    label: 'Виторг від реалізації',
    borderRadius: '15px 0 0 15px',
  },
  BreakEvenPoint: { value: 0, label: 'Точка беззбитковості' },
  Profit: { value: 0, label: 'Прибуток' },
  Want: { value: 0, label: 'Бажаю заробити', slider: true, maxValue: 100000, disabled: false },
  DesiredProductionPlan: {
    value: 0,
    label: 'План виробництва повинен бути',
  },
  DesiredCostPrice: { value: 0, label: 'Собівартість повинна бути ' },
  DesiredPricePerUnit: { value: 0, label: 'Ціна повинна бути' },
};

export const fixedCostsDataDefaults: FixedCostsData[] = [
  {
    name: 'Оренда будівель та приміщень, обладнання',
    value: 0,
    columnNames: ['Посада', 'Од. вим', 'Кількість', 'Ціна, грн/од змін', 'Сума грн.'],
    data: [
      ['Виробниче приміщення', 'м кв', 0, 0, 0],
      ['Офісне приміщення', 'м кв', 0, 0, 0],
      ['Торгова точка', 'м кв', 0, 0, 0],
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
