import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from './useRedux';
import { selectCalculations } from '../store/selectors/calculations.selector';
import {
  getCalculationsExampleService,
  getCalculationsService,
  resetCalculationsService,
  setCalculationsIsRedirectedService,
  updateCalcDataService,
  updateFileNameService,
  updateFixedCostsService,
} from '../services/calculations.service';
import { FixedCostsData } from '../models/FixedCosts.model';
import { CalcData, FieldName } from '../models/Calculations.model';
import { redirect } from 'next/navigation';

export const useCalculations = (token?: string) => {
  const dispatch = useAppDispatch();
  const calculations = useAppSelector(selectCalculations);

  const updateFixedCosts = useCallback(
    (newValue: number, CostsTypeIndex: number, DataIndex?: number, DataItemIndex?: number) => {
      if (!calculations.data) return;
      const updatedFixedCosts = [...calculations.data.fixedCosts];

      if (typeof DataIndex === 'number' && typeof DataItemIndex === 'number') {
        const fixedCostsUpdateElem = updatedFixedCosts[CostsTypeIndex];
        const indexOfSumaGrn = fixedCostsUpdateElem.columnNames.indexOf('Сума грн.');

        const updatedData = updatedFixedCosts.map((item, index) => {
          if (index !== CostsTypeIndex) {
            return { ...item };
          }

          const prevSumItem = fixedCostsUpdateElem.data[DataIndex][indexOfSumaGrn];

          const numList = fixedCostsUpdateElem.data[DataIndex].map((item, index) => {
            if (index === DataItemIndex) return newValue;
            if (index === indexOfSumaGrn || typeof item !== 'number') return 1;
            return item;
          });
          const newSumItem = !numList.includes(0)
            ? numList.reduce((acc, curr) => {
                return acc * curr;
              }, 1)
            : 0;

          const newSumCategory = fixedCostsUpdateElem.value + newSumItem - prevSumItem;

          const newSubData =
            indexOfSumaGrn > DataItemIndex
              ? [
                  ...fixedCostsUpdateElem.data[DataIndex].slice(0, DataItemIndex),
                  newValue,
                  ...fixedCostsUpdateElem.data[DataIndex].slice(DataItemIndex + 1, indexOfSumaGrn),
                  newSumItem,
                  ...fixedCostsUpdateElem.data[DataIndex].slice(indexOfSumaGrn + 1),
                ]
              : indexOfSumaGrn < DataItemIndex
              ? [
                  ...fixedCostsUpdateElem.data[DataIndex].slice(0, indexOfSumaGrn),
                  newValue,
                  ...fixedCostsUpdateElem.data[DataIndex].slice(indexOfSumaGrn + 1, DataItemIndex),
                  newSumItem,
                  ...fixedCostsUpdateElem.data[DataIndex].slice(DataItemIndex + 1),
                ]
              : [
                  ...fixedCostsUpdateElem.data[DataIndex].slice(0, indexOfSumaGrn),
                  newValue,
                  ...fixedCostsUpdateElem.data[DataIndex].slice(indexOfSumaGrn + 1),
                ];
          const newData = [
            ...fixedCostsUpdateElem.data.slice(0, DataIndex),
            [...newSubData],
            ...fixedCostsUpdateElem.data.slice(DataIndex + 1),
          ];

          return {
            ...fixedCostsUpdateElem,
            value: newSumCategory,
            data: [...newData],
          };
        });

        dispatch(updateFixedCostsService([...updatedData]));
      } else {
        if (typeof DataIndex === 'undefined' && typeof DataItemIndex === 'undefined') {
          const newData = [...updatedFixedCosts];
          newData[CostsTypeIndex] = {
            ...newData[CostsTypeIndex],
            value: newValue,
          };
          dispatch(updateFixedCostsService([...newData]));
        }
      }
    },
    [calculations.data, dispatch]
  );

  const updateCalcName = useCallback(
    (name: string) => {
      dispatch(updateFileNameService(name));
    },
    [dispatch]
  );

  const updateCalcData = useCallback(
    (fieldName: FieldName, newValue: number) => {
      if (!calculations.data) return;

      const PricePerUnitValue = fieldName === 'PricePerUnit' ? newValue : calculations.data.data.PricePerUnit.value;
      const CostPriceValue = fieldName === 'CostPrice' ? newValue : calculations.data.data.CostPrice.value;

      const ProductionPlanValue =
        fieldName === 'ProductionPlan' ? newValue : calculations.data.data.ProductionPlan.value;

      const FixedCostsValue = fieldName === 'FixedCosts' ? newValue : calculations.data.data.FixedCosts.value;
      const WantValue = fieldName === 'Want' ? newValue : calculations.data.data.Want.value;

      const GrossProfitValue = +(PricePerUnitValue - CostPriceValue).toFixed(2);
      const BreakEvenPointValue = GrossProfitValue ? Math.round(+(FixedCostsValue / GrossProfitValue)) : 0;

      const updatedData = {
        ...calculations.data.data,
        [fieldName]: {
          ...calculations.data.data[fieldName],
          value: newValue,
        },
        GrossProfit: {
          ...calculations.data.data.GrossProfit,
          value: GrossProfitValue,
        },
        ProductionCost: {
          ...calculations.data.data.ProductionCost,
          value: +(ProductionPlanValue * CostPriceValue).toFixed(2),
        },
        Revenue: {
          ...calculations.data.data.Revenue,
          value: +(ProductionPlanValue * PricePerUnitValue).toFixed(2),
        },
        BreakEvenPoint: {
          ...calculations.data.data.BreakEvenPoint,
          value: BreakEvenPointValue,
        },
        Profit: {
          ...calculations.data.data.Profit,
          value: +(ProductionPlanValue * GrossProfitValue - FixedCostsValue).toFixed(2),
        },
      };

      const DesiredGrossProfit = +(FixedCostsValue + WantValue) / ProductionPlanValue;

      const additionalFields =
        WantValue && PricePerUnitValue && CostPriceValue && ProductionPlanValue
          ? {
              DesiredProductionPlan: {
                ...calculations.data.data.DesiredProductionPlan,
                value: Math.round(+(WantValue / GrossProfitValue + BreakEvenPointValue)),
              },
              DesiredPricePerUnit: {
                ...calculations.data.data.DesiredPricePerUnit,
                value: +(DesiredGrossProfit + CostPriceValue).toFixed(2),
              },
              DesiredCostPrice: {
                ...calculations.data.data.DesiredCostPrice,
                value: +(PricePerUnitValue - DesiredGrossProfit).toFixed(2),
              },
            }
          : {
              DesiredProductionPlan: {
                ...calculations.data.data.DesiredProductionPlan,
                value: 0,
              },
              DesiredPricePerUnit: {
                ...calculations.data.data.DesiredPricePerUnit,
                value: 0,
              },
              DesiredCostPrice: {
                ...calculations.data.data.DesiredCostPrice,
                value: 0,
              },
            };

      dispatch(updateCalcDataService({ ...updatedData, ...additionalFields }));
    },
    [calculations.data, dispatch]
  );

  const getCalculations = useCallback(
    (folderId: string, fileId: string) => {
      if (token) dispatch(getCalculationsService(token, folderId, fileId));
    },
    [dispatch, token]
  );

  const getCalculationsExample = useCallback(() => {
    dispatch(getCalculationsExampleService());
  }, [dispatch]);

  const updateAllCalcData = (newContextData: CalcData) => {
    dispatch(updateCalcDataService({ ...newContextData }));
  };

  const updateAllFixedCostsData = (newFixedCostsData: FixedCostsData[]) => {
    dispatch(updateFixedCostsService([...newFixedCostsData]));
  };

  const redirection = useCallback(
    (path = '/') => {
      dispatch(setCalculationsIsRedirectedService());
      redirect(path);
    },
    [dispatch]
  );

  const reset = useCallback(() => {
    dispatch(resetCalculationsService());
  }, [dispatch]);

  return {
    calculations,
    getCalculations,
    getCalculationsExample,
    updateFixedCosts,
    updateCalcName,
    updateCalcData,
    updateAllCalcData,
    updateAllFixedCostsData,
    reset,
    redirection,
  };
};
