import { CALC_FOLDERS_REQUEST, CALC_FOLDERS_SUCCESS, CALC_FOLDERS_FAILED } from '../constants/calcFolders.constants';
import { CalculatorShortDataUnit } from '@/core/models/СalcData.model';

interface CalcFoldersRequestAction {
  type: typeof CALC_FOLDERS_REQUEST;
}

interface CalcFoldersSuccessAction {
  type: typeof CALC_FOLDERS_SUCCESS;
  data: CalculatorShortDataUnit[];
}

interface CalcFoldersFailedAction {
  type: typeof CALC_FOLDERS_FAILED;
  message: string;
}

type CalcFoldersActions = CalcFoldersRequestAction | CalcFoldersSuccessAction | CalcFoldersFailedAction;

const calcFoldersRequest = (): CalcFoldersRequestAction => ({
  type: CALC_FOLDERS_REQUEST,
});

const calcFoldersSuccess = (data: CalculatorShortDataUnit[]): CalcFoldersSuccessAction => ({
  type: CALC_FOLDERS_SUCCESS,
  data,
});

const calcFoldersFailed = (message: string): CalcFoldersFailedAction => ({
  type: CALC_FOLDERS_FAILED,
  message,
});

export type { CalcFoldersActions };
export { calcFoldersRequest, calcFoldersSuccess, calcFoldersFailed };
