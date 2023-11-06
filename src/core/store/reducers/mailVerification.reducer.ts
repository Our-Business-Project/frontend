import {
  MAIL_VERIFICATION_REQUEST,
  MAIL_VERIFICATION_SUCCESS,
  MAIL_VERIFICATION_FAILED,
} from '../constants/mailVerification.constants';
import { MailVerificationActions } from '../actions/mailVerification.action';
import { MessageResponse } from '@/core/models/MessageResponse.model';

interface MailVerificationInterface {
  data: MessageResponse | null;
  error: string | null;
  pending: boolean;
}

type MailVerificationState = MailVerificationInterface;

const initialState: MailVerificationState = {
  data: null,
  error: null,
  pending: false,
};

export default function mailVerificationReducer(
  state = initialState,
  action: MailVerificationActions
): MailVerificationState {
  switch (action.type) {
    case MAIL_VERIFICATION_REQUEST: {
      return {
        ...state,
        data: null,
        error: null,
        pending: true,
      };
    }
    case MAIL_VERIFICATION_SUCCESS: {
      return {
        ...state,
        data: action.data,
        error: null,
        pending: false,
      };
    }
    case MAIL_VERIFICATION_FAILED: {
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

export type { MailVerificationState };
