import { mailVerifyRequest } from '../api/mail/verify.api.request';
import { errorNotify, successNotify } from '../helpers/notifications';
import { AppDispatch } from '../store';
import {
  mailVerificationFailed,
  mailVerificationRequest,
  mailVerificationSuccess,
} from '../store/actions/mailVerification.action';

export const verifyMailService = (token: string, mailToken: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(mailVerificationRequest());
    try {
      const data = await mailVerifyRequest(token, mailToken);
      dispatch(mailVerificationSuccess(data));
      successNotify('Пошта успішно підтверджена!');
    } catch (err) {
      const error = err as Error;
      dispatch(mailVerificationFailed(error.message));
      errorNotify(error.message);
    }
  };
};
