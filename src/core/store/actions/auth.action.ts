import { AuthResponse } from '@/core/models/AuthResponse.model';
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILED, AUTH_RESET } from '../constants/auth.constants';

interface AuthRequestAction {
  type: typeof AUTH_REQUEST;
}

interface AuthSuccessAction {
  type: typeof AUTH_SUCCESS;
  data: AuthResponse;
}

interface AuthFailedAction {
  type: typeof AUTH_FAILED;
  message: string;
}

interface AuthResetAction {
  type: typeof AUTH_RESET;
}

type AuthActions = AuthRequestAction | AuthSuccessAction | AuthFailedAction | AuthResetAction;

const authRequest = (): AuthRequestAction => ({
  type: AUTH_REQUEST,
});

const authSuccess = (data: AuthResponse): AuthSuccessAction => ({
  type: AUTH_SUCCESS,
  data,
});

const authFailed = (message: string): AuthFailedAction => ({
  type: AUTH_FAILED,
  message,
});

const authReset = (): AuthResetAction => ({
  type: AUTH_RESET,
});

export type { AuthActions };
export { authRequest, authSuccess, authFailed, authReset };
