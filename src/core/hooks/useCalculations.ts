import { useCallback, useEffect, useState } from 'react';
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
import { calcDataDefaults, fixedCostsDataDefaults } from '../constants/calculations.constants';
import { redirect } from 'next/navigation';

type State = {
  fixedCostsData: FixedCostsData[];
  calcData: CalcData;
  calcName: string;
};

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
            if (index === indexOfSumaGrn || typeof item !== 'number') return 1;
            if (index === DataItemIndex) return newValue;
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
      }
    },
    [calculations.data, dispatch]
  );

  const updateCalcName = useCallback(
    (name: string) => {
      // setState((prevState) => ({ ...prevState, calcName: name }));
      dispatch(updateFileNameService(name));
    },
    [dispatch]
  );

  const updateCalcData = useCallback(
    (fieldName: FieldName, newValue: number) => {
      if (!calculations.data) return;
      const updatedData = {
        ...calculations.data.data,
        [fieldName]: {
          ...calculations.data.data[fieldName],
          value: newValue,
        },
        GrossProfit: {
          ...calculations.data.data.GrossProfit,
          value: +(calculations.data.data.PricePerUnit.value - calculations.data.data.CostPrice.value).toFixed(2),
        },
        ProductionCost: {
          ...calculations.data.data.ProductionCost,
          value: +(calculations.data.data.ProductionPlan.value * calculations.data.data.CostPrice.value).toFixed(2),
        },
        Revenue: {
          ...calculations.data.data.Revenue,
          value: +(calculations.data.data.ProductionPlan.value * calculations.data.data.PricePerUnit.value).toFixed(2),
        },
        BreakEvenPoint: {
          ...calculations.data.data.BreakEvenPoint,
          value: calculations.data.data.GrossProfit.value
            ? Math.round(+(calculations.data.data.FixedCosts.value / calculations.data.data.GrossProfit.value))
            : 0,
        },
        Profit: {
          ...calculations.data.data.Profit,
          value: +(
            calculations.data.data.ProductionPlan.value * calculations.data.data.GrossProfit.value -
            calculations.data.data.FixedCosts.value
          ).toFixed(2),
        },
      };

      const DesiredGrossProfit =
        +(updatedData.FixedCosts.value + updatedData.Want.value) / updatedData.ProductionPlan.value;

      const additionalFields =
        updatedData.Want.value &&
        updatedData.PricePerUnit.value &&
        updatedData.CostPrice.value &&
        updatedData.ProductionPlan.value
          ? {
              DesiredProductionPlan: {
                ...calculations.data.data.DesiredProductionPlan,
                value: Math.round(
                  +(updatedData.Want.value / updatedData.GrossProfit.value + updatedData.BreakEvenPoint.value)
                ),
              },
              DesiredPricePerUnit: {
                ...calculations.data.data.DesiredPricePerUnit,
                value: +(DesiredGrossProfit + updatedData.CostPrice.value).toFixed(2),
              },
              DesiredCostPrice: {
                ...calculations.data.data.DesiredCostPrice,
                value: +(updatedData.PricePerUnit.value - DesiredGrossProfit).toFixed(2),
              },
            }
          : {};

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
