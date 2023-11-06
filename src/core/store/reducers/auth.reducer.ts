import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILED, AUTH_RESET } from '../constants/auth.constants';
import { AuthActions } from '../actions/auth.action';
import { AuthResponse } from '@/core/models/AuthResponse.model';

interface AuthInterface {
  data: AuthResponse | null;
  error: string | null;
  pending: boolean;
}

type AuthState = AuthInterface;

const initialState: AuthState = {
  data: null,
  error: null,
  pending: false,
};

export default function authReducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AUTH_REQUEST: {
      return {
        ...state,
        data: null,
        error: null,
        pending: true,
      };
    }
    case AUTH_SUCCESS: {
      return {
        ...state,
        data: action.data,
        error: null,
        pending: false,
      };
    }
    case AUTH_FAILED: {
      return {
        ...state,
        data: null,
        error: action.message,
        pending: false,
      };
    }

    case AUTH_RESET: {
      return {
        ...initialState,
      };
    }

    default:
      return { ...state };
  }
}

export type { AuthState };
