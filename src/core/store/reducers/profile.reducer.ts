import { PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_FAILED, PROFILE_RESET } from '../constants/profile.constants';
import { ProfileActions } from '../actions/profile.action';
import { UserResponse } from '@/core/models/UserResponse.model';

interface ProfileInterface {
  data: UserResponse | null;
  error: string | null;
  pending: boolean;
}

type ProfileState = ProfileInterface;

const initialState: ProfileState = {
  data: null,
  error: null,
  pending: false,
};

export default function profileReducer(state = initialState, action: ProfileActions): ProfileState {
  switch (action.type) {
    case PROFILE_REQUEST: {
      return {
        ...state,
        data: null,
        error: null,
        pending: true,
      };
    }
    case PROFILE_SUCCESS: {
      return {
        ...state,
        data: action.data,
        error: null,
        pending: false,
      };
    }
    case PROFILE_FAILED: {
      return {
        ...state,
        data: null,
        error: action.message,
        pending: false,
      };
    }

    case PROFILE_RESET: {
      return {
        ...initialState,
      };
    }

    default:
      return { ...state };
  }
}

export type { ProfileState };
