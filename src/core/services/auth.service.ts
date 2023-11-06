import { SignInUserProps, signInApiRequest } from '../api/auth/signIn.api.request';
import { SignUpUserProps, signUpApiRequest } from '../api/auth/signUp.api.request';
import { errorNotify, successNotify } from '../helpers/notifications';
import { AppDispatch } from '../store';
import { authFailed, authRequest, authSuccess, authReset } from '../store/actions/auth.action';
import { profileReset } from '../store/actions/profile.action';

export const signInService = (payload: SignInUserProps) => {
  return async (dispatch: AppDispatch) => {
    dispatch(authRequest());
    try {
      const data = await signInApiRequest(payload);
      dispatch(authSuccess(data));
      successNotify('Успішна авторизація');
    } catch (err) {
      const error = err as Error;
      dispatch(authFailed(error.message));
      errorNotify(error.message);
    }
  };
};

export const signUpService = (payload: SignUpUserProps) => {
  return async (dispatch: AppDispatch) => {
    dispatch(authRequest());
    try {
      const data = await signUpApiRequest(payload);
      dispatch(authSuccess(data));
      successNotify('Успішна реєстрація');
    } catch (err) {
      const error = err as Error;
      dispatch(authFailed(error.message));
      errorNotify(error.message);
    }
  };
};

export const logoutService = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(authReset());
    dispatch(profileReset());
    successNotify('Ви вийшли з аккаунта');
  };
};

export type { SignInUserProps, SignUpUserProps };
