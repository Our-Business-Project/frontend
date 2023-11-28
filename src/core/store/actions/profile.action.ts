import { UserResponse } from '@/core/models/UserResponse.model';
import { Image } from '@/core/models/Image.model';
import {
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_FAILED,
  PROFILE_IMAGE_UPLOAD_REQUEST,
  PROFILE_IMAGE_UPLOAD_SUCCESS,
  PROFILE_IMAGE_UPLOAD_FAILED,
  PROFILE_RESET,
} from '../constants/profile.constants';

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

interface ProfileImageUploadRequestAction {
  type: typeof PROFILE_IMAGE_UPLOAD_REQUEST;
}

interface ProfileImageUploadSuccessAction {
  type: typeof PROFILE_IMAGE_UPLOAD_SUCCESS;
  image: Image;
}

interface ProfileImageUploadFailedAction {
  type: typeof PROFILE_IMAGE_UPLOAD_FAILED;
  message: string;
}

interface ProfileResetAction {
  type: typeof PROFILE_RESET;
}

type ProfileActions =
  | ProfileRequestAction
  | ProfileSuccessAction
  | ProfileFailedAction
  | ProfileImageUploadRequestAction
  | ProfileImageUploadSuccessAction
  | ProfileImageUploadFailedAction
  | ProfileResetAction;

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

const profileImageUploadRequest = (): ProfileImageUploadRequestAction => ({
  type: PROFILE_IMAGE_UPLOAD_REQUEST,
});

const profileImageUploadSuccess = (image: Image): ProfileImageUploadSuccessAction => ({
  type: PROFILE_IMAGE_UPLOAD_SUCCESS,
  image,
});

const profileImageUploadFailed = (message: string): ProfileImageUploadFailedAction => ({
  type: PROFILE_IMAGE_UPLOAD_FAILED,
  message,
});

const profileReset = (): ProfileResetAction => ({
  type: PROFILE_RESET,
});

export type { ProfileActions };
export {
  profileRequest,
  profileSuccess,
  profileFailed,
  profileImageUploadRequest,
  profileImageUploadSuccess,
  profileImageUploadFailed,
  profileReset,
};
