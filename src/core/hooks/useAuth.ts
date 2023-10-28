import { useCallback } from 'react';
import { signInService } from '../services/auth.service';
import { selectAuth } from '../store/selectors/auth.selector';
import { AuthState } from '../store/reducers/auth.reducer';
import { useLocalStorage } from './useLocalStorage';
import { useAppDispatch, useAppSelector } from './useRedux';

export const useAuth = () => {
  const { storedValue: token, setValue: setLocalToken, removeValue: removeLocalToken } = useLocalStorage('token');

  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectAuth);

  const login = useCallback(
    (payload: LoginProps) => {
      dispatch(signInService(payload));
    },
    [dispatch]
  );

  const isAuthenticated = useCallback(() => {
    if (auth.data?.accessToken) {
      setLocalToken(auth.data.accessToken);
    }

    return !!token || !!auth.data?.accessToken;
  }, [token, auth.data?.accessToken, setLocalToken]);

  return {
    auth,
    login,
    isAuthenticated,
  };
};

type LoginProps = {
  email: string;
  password: string;
};

export type UseAuthReturn = {
  auth: AuthState;
  login: (payload: LoginProps) => void;
  isAuthenticated: () => boolean;
};
