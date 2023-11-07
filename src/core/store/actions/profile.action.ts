import { UserResponse } from '@/core/models/UserResponse.model';
import { PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_FAILED, PROFILE_RESET } from '../constants/profile.constants';

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

interface ProfileResetAction {
  type: typeof PROFILE_RESET;
}

type ProfileActions = ProfileRequestAction | ProfileSuccessAction | ProfileFailedAction | ProfileResetAction;

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

const profileReset = (): ProfileResetAction => ({
  type: PROFILE_RESET,
});

export type { ProfileActions };
export { profileRequest, profileSuccess, profileFailed, profileReset };
