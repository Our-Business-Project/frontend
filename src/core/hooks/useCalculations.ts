import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './useRedux';
import { selectCalculations } from '../store/selectors/calculations.selector';
import {
  getCalculationsExampleService,
  getCalculationsService,
  resetCalculations,
} from '../services/calculations.service';
import { calculationsRedirected } from '../store/actions/calculations.action';
import { redirect } from 'next/navigation';

export const useCalculations = (token?: string) => {
  const dispatch = useAppDispatch();
  const calculations = useAppSelector(selectCalculations);

  const getCalculations = useCallback(
    (folderId: string, fileId: string) => {
      if (token) dispatch(getCalculationsService(token, folderId, fileId));
    },
    [dispatch, token]
  );

  const getCalculationsExample = useCallback(
    (folderId: string, fileId: string) => {
      if (token) dispatch(getCalculationsExampleService());
    },
    [dispatch, token]
  );

  const reset = useCallback(() => {
    dispatch(resetCalculations());
  }, [dispatch]);

  useEffect(() => {
    if (calculations.data && !calculations.redirected) {
      dispatch(calculationsRedirected());
      redirect('/');
    }
  }, [calculations.data, calculations.redirected, dispatch]);

  return {
    calculations,
    getCalculations,
    reset,
  };
};
