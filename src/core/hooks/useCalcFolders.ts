import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from './useRedux';
import { selectCalcFolders } from '../store/selectors/calcFolders.selector';
import { getAllCaclFoldersService } from '../services/calculator.service';

export const useCalcFolders = (token?: string) => {
  const dispatch = useAppDispatch();
  const calcFolders = useAppSelector(selectCalcFolders);

  const loadCalcFolders = useCallback(() => {
    if (token) dispatch(getAllCaclFoldersService(token));
  }, [dispatch, token]);

  return {
    calcFolders,
    loadCalcFolders,
  };
};
