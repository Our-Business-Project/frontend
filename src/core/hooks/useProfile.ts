import { useCallback } from 'react';
import { ProfileState } from '../store/reducers/profile.reducer';
import { useAppDispatch, useAppSelector } from './useRedux';
import { selectProfile } from '../store/selectors/profile.selector';
import {
  UpdateProfileDataProps,
  getProfileInfoService,
  updateProfileInfoService,
  uploadProfileImageService,
} from '../services/profile.service';
import { FieldValues } from 'react-hook-form';

export const useProfile = (token?: string) => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector(selectProfile);

  const loadProfile = useCallback(
    (id: string) => {
      if (token) dispatch(getProfileInfoService(token, id));
    },
    [dispatch, token]
  );

  const updateProfile = useCallback(
    (data: FieldValues) => {
      if (token) dispatch(updateProfileInfoService(token, data as UpdateProfileDataProps));
    },
    [dispatch, token]
  );

  const uploadProfileImage = useCallback(
    (image: FormData) => {
      if (token) dispatch(uploadProfileImageService(token, image));
    },
    [dispatch, token]
  );

  return {
    profile,
    loadProfile,
    updateProfile,
    uploadProfileImage,
  };
};

export type UseAuthReturn = {
  profile: ProfileState;
  loadProfile: (id: string) => void;
  updateProfile: (data: FieldValues) => void;
  uploadProfileImage: (data: FormData) => void;
};
