import { SignInUserResponse } from '@/core/models/SignInUserResponse.model';
import { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILED } from '../constants/signIn.constants';

interface SignInRequestAction {
  type: typeof SIGNIN_REQUEST;
}

interface SignInSuccessAction {
  type: typeof SIGNIN_SUCCESS;
  data: SignInUserResponse;
}

interface SignInFailedAction {
  type: typeof SIGNIN_FAILED;
  message: string;
}

type SignInActions = SignInRequestAction | SignInSuccessAction | SignInFailedAction;

const SignInRequest = (): SignInRequestAction => ({
  type: SIGNIN_REQUEST,
});

const SignInSuccess = (data: SignInUserResponse): SignInSuccessAction => ({
  type: SIGNIN_SUCCESS,
  data,
});

const SignInFailed = (message: string): SignInFailedAction => ({
  type: SIGNIN_FAILED,
  message,
});

export type { SignInActions };
export { SignInRequest, SignInSuccess, SignInFailed };
