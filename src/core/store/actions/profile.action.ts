import { UserResponse } from '@/core/models/UserResponse.model';
import { PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_FAILED } from '../constants/profile.constants';

interface ProfileRequestAction {
  type: typeof PROFILE_REQUEST;
}

interface ProfileSuccessAction {
  type: typeof PROFILE_SUCCESS;
  data: UserResponse;
}

interface ProfileFailedAction {
  type: typeof PROFILE_FAILED;
  message: string;
}

type ProfileActions = ProfileRequestAction | ProfileSuccessAction | ProfileFailedAction;

const profileRequest = (): ProfileRequestAction => ({
  type: PROFILE_REQUEST,
});

const profileSuccess = (data: UserResponse): ProfileSuccessAction => ({
  type: PROFILE_SUCCESS,
  data,
});

const profileFailed = (message: string): ProfileFailedAction => ({
  type: PROFILE_FAILED,
  message,
});

export type { ProfileActions };
export { profileRequest, profileSuccess, profileFailed };
