import { useCallback } from 'react';
import { SignInUserProps, SignUpUserProps, signInService, signUpService } from '../services/auth.service';
import { selectAuth } from '../store/selectors/auth.selector';
import { AuthState } from '../store/reducers/auth.reducer';
import { useLocalStorage } from './useLocalStorage';
import { useAppDispatch, useAppSelector } from './useRedux';

export const useAuth = () => {
  const { storedValue: token, setValue: setLocalToken, removeValue: removeLocalToken } = useLocalStorage('token');

  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectAuth);

  const login = useCallback(
    (payload: SignInUserProps) => {
      dispatch(signInService(payload));
    },
    [dispatch]
  );

  const register = useCallback(
    (payload: SignUpUserProps) => {
      dispatch(signUpService(payload));
    },
    [dispatch]
  );

  const isAuthenticated = useCallback(() => {
    if (auth.data?.accessToken) {
      setLocalToken(auth.data.accessToken);
    }

    const isAuth = !!token || !!auth.data?.accessToken;

    if (!isAuth) removeLocalToken();

    return isAuth;
  }, [auth.data?.accessToken, token, removeLocalToken, setLocalToken]);

  return {
    auth,
    login,
    register,
    isAuthenticated,
  };
};

export type UseAuthReturn = {
  auth: AuthState;
  login: (payload: SignInUserProps) => void;
  register: (payload: SignUpUserProps) => void;
  isAuthenticated: () => boolean;
};
