import { CALC_FOLDERS_REQUEST, CALC_FOLDERS_SUCCESS, CALC_FOLDERS_FAILED } from '../constants/calcFolders.constants';
import { CalcFoldersActions } from '../actions/calcFolders.action';
import { CalcFolders } from '@/core/models/CalcFolders.model';

interface CalcFoldersInterface {
  data: CalcFolders | null;
  error: string | null;
  pending: boolean;
}

type CalcFoldersState = CalcFoldersInterface;

const initialState: CalcFoldersState = {
  data: null,
  error: null,
  pending: false,
};

export default function calcFoldersReducer(state = initialState, action: CalcFoldersActions): CalcFoldersState {
  switch (action.type) {
    case CALC_FOLDERS_REQUEST: {
      return {
        ...state,
        data: null,
        error: null,
        pending: true,
      };
    }
    case CALC_FOLDERS_SUCCESS: {
      return {
        ...state,
        data: action.data,
        error: null,
        pending: false,
      };
    }
    case CALC_FOLDERS_FAILED: {
      return {
        ...state,
        data: null,
        error: action.message,
        pending: false,
      };
    }

    default:
      return { ...state };
  }
}

export type { CalcFoldersState };
