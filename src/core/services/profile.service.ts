import { getProfileRequest } from '../api/profile/getProfile.api.request';
import { updateProfileRequest, UpdateProfileDataProps } from '../api/profile/updateProfile.api.request';
import { errorNotify, successNotify } from '../helpers/notifications';
import { AppDispatch } from '../store';
import { profileFailed, profileRequest, profileSuccess } from '../store/actions/profile.action';

export const getProfileInfoService = (token: string, id: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(profileRequest());
    try {
      const data = await getProfileRequest(token, id);
      dispatch(profileSuccess(data));
    } catch (err) {
      const error = err as Error;
      dispatch(profileFailed(error.message));
      errorNotify(error.message);
    }
  };
};

export const updateProfileInfoService = (token: string, updatedData: UpdateProfileDataProps) => {
  return async (dispatch: AppDispatch) => {
    dispatch(profileRequest());
    try {
      const data = await updateProfileRequest(token, updatedData);
      dispatch(profileSuccess(data));
      successNotify('Профіль оновлено');
    } catch (err) {
      const error = err as Error;
      dispatch(profileFailed(error.message));
      errorNotify(error.message);
    }
  };
};
export type { UpdateProfileDataProps };
