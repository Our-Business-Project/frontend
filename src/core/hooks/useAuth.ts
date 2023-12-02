import { useCallback, useEffect, useState } from 'react';
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

const privatePaths = ['/profile'];

export const useAuth = () => {
  const { storedValue: token, setValue: setLocalToken, removeValue: removeLocalToken } = useLocalStorage('token');
  const { storedValue: userId, setValue: setLocalUserId, removeValue: removeLocalUserId } = useLocalStorage('id');

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!token && !!userId);

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

  const logout = useCallback(() => {
    dispatch(logoutService());
    removeLocalToken();
    removeLocalUserId();
    setIsAuthenticated(false);
  }, [dispatch, removeLocalToken, removeLocalUserId]);

  useEffect(() => {
    if (auth.data) {
      setLocalToken(auth.data.accessToken);
      setLocalUserId(auth.data.user.id);
      setIsAuthenticated(true);
    } else if (isAuthenticated && (!token || !userId)) {
      logout();
    }
  }, [auth.data, dispatch, isAuthenticated, logout, setLocalToken, setLocalUserId, token, userId]);

  useEffect(() => {
    if (!isAuthenticated) {
      const currentPathname = window.location.pathname;
      if (privatePaths.includes(currentPathname)) {
        redirect('/sign-in');
      }
    }
  }, [isAuthenticated]);

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
