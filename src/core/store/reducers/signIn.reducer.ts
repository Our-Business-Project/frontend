import { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILED } from '../constants/signIn.constants';
import { SignInActions } from '../actions/signIn.action';
import { SignInUserResponse } from '@/core/models/SignInUserResponse.model';

interface SignInInterface {
  data: SignInUserResponse | null;
  error: string | null;
  pending: boolean;
}

type SignInState = SignInInterface;

const initialState: SignInState = {
  data: null,
  error: null,
  pending: false,
};

export default function signInReducer(state = initialState, action: SignInActions): SignInState {
  switch (action.type) {
    case SIGNIN_REQUEST: {
      return {
        ...state,
        data: null,
        error: null,
        pending: true,
      };
    }
    case SIGNIN_SUCCESS: {
      return {
        ...state,
        data: action.data,
        error: null,
        pending: false,
      };
    }
    case SIGNIN_FAILED: {
      return {
        ...state,
        data: null,
        error: action.message,
        pending: false,
      };
    }

    default:
      return { ...state };
  }
}

export type { SignInState };
