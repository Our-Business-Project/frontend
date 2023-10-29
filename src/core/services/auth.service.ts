import { signInApiRequest } from '../api/auth/signIn.api.request';
import { errorNotify, successNotify } from '../helpers/notifications';
import { AppDispatch } from '../store';
import { authFailed, authRequest, authSuccess } from '../store/actions/auth.action';

type SignInProps = {
  email: string;
  password: string;
};

export const signInService = (payload: SignInProps) => {
  return async (dispatch: AppDispatch) => {
    dispatch(authRequest());
    try {
      const data = await signInApiRequest(payload);
      dispatch(authSuccess(data));
      successNotify('Успішна авторизація');
    } catch (err) {
      const error = err as Error;
      dispatch(authFailed(error.message));
      errorNotify('Не вдалося увійти');
    }
  };
};
