import { getProfileRequest } from '../api/profile/getProfile.api.request';
import { errorNotify } from '../helpers/notifications';
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
