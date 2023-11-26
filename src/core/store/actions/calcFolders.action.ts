import { CalcFolders } from '@/core/models/CalcFolders.model';
import { CALC_FOLDERS_REQUEST, CALC_FOLDERS_SUCCESS, CALC_FOLDERS_FAILED } from '../constants/calcFolders.constants';

interface CalcFoldersRequestAction {
  type: typeof CALC_FOLDERS_REQUEST;
}

interface CalcFoldersSuccessAction {
  type: typeof CALC_FOLDERS_SUCCESS;
  data: CalcFolders;
}

interface CalcFoldersFailedAction {
  type: typeof CALC_FOLDERS_FAILED;
  message: string;
}

type CalcFoldersActions = CalcFoldersRequestAction | CalcFoldersSuccessAction | CalcFoldersFailedAction;

const calcFoldersRequest = (): CalcFoldersRequestAction => ({
  type: CALC_FOLDERS_REQUEST,
});

const calcFoldersSuccess = (data: CalcFolders): CalcFoldersSuccessAction => ({
  type: CALC_FOLDERS_SUCCESS,
  data,
});

const calcFoldersFailed = (message: string): CalcFoldersFailedAction => ({
  type: CALC_FOLDERS_FAILED,
  message,
});

export type { CalcFoldersActions };
export { calcFoldersRequest, calcFoldersSuccess, calcFoldersFailed };
