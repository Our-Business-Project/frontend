import { useCallback, useEffect, useMemo } from 'react';
import { redirect } from 'next/navigation';
import {
  SignInUserProps,
  SignUpUserProps,
  logoutService,
  signInService,
  signUpService,
} from '../services/auth.service';
import { selectAuth } from '../store/selectors/auth.selector';
import { AuthState } from '../store/reducers/auth.reducer';
import { useLocalStorage } from './useLocalStorage';
import { useAppDispatch, useAppSelector } from './useRedux';

export const useAuth = () => {
  const { storedValue: token, setValue: setLocalToken, removeValue: removeLocalToken } = useLocalStorage('token');
  const { storedValue: userId, setValue: setLocalUserId, removeValue: removeLocalUserId } = useLocalStorage('id');

  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectAuth);

  useEffect(() => {
    if (auth.data) {
      setLocalToken(auth.data.accessToken);
      setLocalUserId(auth.data.user.id);
    } else if (!token) {
      removeLocalToken();
      removeLocalUserId();
    }
  });

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

  const logout = useCallback(() => {
    dispatch(logoutService());
    removeLocalToken();
    removeLocalUserId();
    redirect('/');
  }, [dispatch, removeLocalToken, removeLocalUserId]);

  const isAuthenticated = useMemo(() => !!token, [token]);

  return {
    auth,
    login,
    register,
    logout,
    isAuthenticated,
    token,
    userId,
  };
};

export type UseAuthReturn = {
  auth: AuthState;
  login: (payload: SignInUserProps) => void;
  register: (payload: SignUpUserProps) => void;
  isAuthenticated: boolean;
  token: string;
  userId: string;
};
