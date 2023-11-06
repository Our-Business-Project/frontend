import { useCallback } from 'react';
import { ProfileState } from '../store/reducers/profile.reducer';
import { useAppDispatch, useAppSelector } from './useRedux';
import { selectProfile } from '../store/selectors/profile.selector';
import { getProfileInfoService } from '../services/profile.service';

export const useProfile = (token?: string) => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector(selectProfile);

  const loadProfile = useCallback(
    (id: string) => {
      if (token) dispatch(getProfileInfoService(token, id));
    },
    [dispatch, token]
  );

  return {
    profile,
    loadProfile,
  };
};

export type UseAuthReturn = {
  profile: ProfileState;
  loadProfile: (id: string) => void;
};
