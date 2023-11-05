import { useCallback, useMemo } from 'react';
import { SignInUserProps, SignUpUserProps, signInService, signUpService } from '../services/auth.service';
import { selectAuth } from '../store/selectors/auth.selector';
import { AuthState } from '../store/reducers/auth.reducer';
import { useLocalStorage } from './useLocalStorage';
import { useAppDispatch, useAppSelector } from './useRedux';

export const useAuth = () => {
  const { storedValue: token, setValue: setLocalToken, removeValue: removeLocalToken } = useLocalStorage('token');
  const { storedValue: userId, setValue: setLocalUserId, removeValue: removeLocalUserId } = useLocalStorage('id');

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

  const isAuthenticated = useMemo(() => {
    if (auth.data?.accessToken) {
      setLocalToken(auth.data.accessToken);
      setLocalUserId(auth.data.user._id);
    }

    const isAuth = !!token || !!auth.data?.accessToken;

    if (!isAuth) {
      removeLocalToken();
      removeLocalUserId();
    }

    return isAuth;
  }, [
    auth.data?.accessToken,
    auth.data?.user._id,
    token,
    setLocalToken,
    setLocalUserId,
    removeLocalToken,
    removeLocalUserId,
  ]);

  return {
    auth,
    login,
    register,
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
