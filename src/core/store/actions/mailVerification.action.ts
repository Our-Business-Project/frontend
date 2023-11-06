import { MessageResponse } from '@/core/models/MessageResponse.model';
import {
  MAIL_VERIFICATION_REQUEST,
  MAIL_VERIFICATION_SUCCESS,
  MAIL_VERIFICATION_FAILED,
} from '../constants/mailVerification.constants';

interface MailVerificationRequestAction {
  type: typeof MAIL_VERIFICATION_REQUEST;
}

interface MailVerificationSuccessAction {
  type: typeof MAIL_VERIFICATION_SUCCESS;
  data: MessageResponse;
}

interface MailVerificationFailedAction {
  type: typeof MAIL_VERIFICATION_FAILED;
  message: string;
}

type MailVerificationActions =
  | MailVerificationRequestAction
  | MailVerificationSuccessAction
  | MailVerificationFailedAction;

const mailVerificationRequest = (): MailVerificationRequestAction => ({
  type: MAIL_VERIFICATION_REQUEST,
});

const mailVerificationSuccess = (data: MessageResponse): MailVerificationSuccessAction => ({
  type: MAIL_VERIFICATION_SUCCESS,
  data,
});

const mailVerificationFailed = (message: string): MailVerificationFailedAction => ({
  type: MAIL_VERIFICATION_FAILED,
  message,
});

export type { MailVerificationActions };
export { mailVerificationRequest, mailVerificationSuccess, mailVerificationFailed };
