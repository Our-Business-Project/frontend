import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './useRedux';
import { selectCalculations } from '../store/selectors/calculations.selector';
import {
  getCalculationsExampleService,
  getCalculationsService,
  resetCalculations,
} from '../services/calculations.service';
import { calculationsRedirected } from '../store/actions/calculations.action';
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

  const [state, setState] = useState<State>({
    fixedCostsData: [...fixedCostsDataDefaults],
    calcData: { ...calcDataDefaults },
    calcName: '',
  });

  useEffect(() => {
    if (calculations.data) {
      setState({
        fixedCostsData: [...calculations.data.fixedCosts],
        calcData: { ...calculations.data.data },
        calcName: calculations.data.name,
      });
    }
  }, [calculations.data]);

  const updateFixedCosts = useCallback(
    (newValue: number, CostsTypeIndex: number, DataIndex?: number, DataItemIndex?: number) => {
      const updatedData = [...state.fixedCostsData];
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

          let localSumm = 0;
          updatedData[CostsTypeIndex].data.forEach((row) => {
            if (Array.isArray(row) && row.length > indexOfSumaGrn) {
              localSumm += row[indexOfSumaGrn];
            }
          });
          updatedData[CostsTypeIndex].value = localSumm;
        } else {
          updatedData[CostsTypeIndex].value = newValue;
        }
      }

      setState((prevState) => ({
        ...prevState,
        fixedCostsData: updatedData,
      }));
    },
    [state.fixedCostsData]
  );

  const updateCalcName = useCallback((name: string) => {
    setState((prevState) => ({ ...prevState, calcName: name }));
  }, []);

  const updateCalcData = useCallback(
    (fieldName: FieldName, newValue: number) => {
      if (fieldName in calcDataDefaults) {
        const updatedData = {
          ...state.calcData,
          [fieldName]: {
            ...state.calcData[fieldName],
            value: newValue,
          },
        };

        updatedData.GrossProfit.value = +(updatedData.PricePerUnit.value - updatedData.CostPrice.value).toFixed(2);
        updatedData.ProductionCost.value = +(updatedData.ProductionPlan.value * updatedData.CostPrice.value).toFixed(2);
        updatedData.Revenue.value = +(updatedData.ProductionPlan.value * updatedData.PricePerUnit.value).toFixed(2);
        updatedData.BreakEvenPoint.value = updatedData.GrossProfit.value
          ? Math.round(+(updatedData.FixedCosts.value / updatedData.GrossProfit.value))
          : 0;
        updatedData.Profit.value = +(
          updatedData.ProductionPlan.value * updatedData.GrossProfit.value -
          updatedData.FixedCosts.value
        ).toFixed(2);

        if (
          updatedData.Want.value &&
          updatedData.PricePerUnit.value &&
          updatedData.CostPrice.value &&
          updatedData.ProductionPlan.value
        ) {
          const DesiredGrossProfit =
            +(updatedData.FixedCosts.value + updatedData.Want.value) / updatedData.ProductionPlan.value;

          updatedData.DesiredProductionPlan.value = Math.round(
            +(updatedData.Want.value / updatedData.GrossProfit.value + updatedData.BreakEvenPoint.value)
          );
          updatedData.DesiredPricePerUnit.value = +(DesiredGrossProfit + updatedData.CostPrice.value).toFixed(2);
          updatedData.DesiredCostPrice.value = +(updatedData.PricePerUnit.value - DesiredGrossProfit).toFixed(2);
        }

        setState((prevState) => ({
          ...prevState,
          calcData: updatedData,
        }));
      }
    },
    [state.calcData]
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
    setState((prev) => ({
      ...prev,
      calcData: { ...newContextData },
    }));
  };

  const updateAllFixedCostsData = (newFixedCostsData: FixedCostsData[]) => {
    setState((prev) => ({
      ...prev,
      fixedCostsData: [...newFixedCostsData],
    }));
  };

  const redirection = useCallback(
    (path = '/') => {
      dispatch(calculationsRedirected());
      redirect(path);
    },
    [dispatch]
  );

  const reset = useCallback(() => {
    setState({
      fixedCostsData: [...fixedCostsDataDefaults],
      calcData: { ...calcDataDefaults },
      calcName: '',
    });
    dispatch(resetCalculations());
  }, [dispatch]);

  return {
    calculations,
    ...state,
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
