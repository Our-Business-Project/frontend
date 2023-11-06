import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from './useRedux';
import { selectMailVerification } from '../store/selectors/mailVerification.selector';
import { verifyMailService } from '../services/mailVerification.service';
import { MailVerificationState } from '../store/reducers/mailVerification.reducer';

export const useMail = (token?: string) => {
  const dispatch = useAppDispatch();
  const mailVerification = useAppSelector(selectMailVerification);

  const verifyMail = useCallback(
    (mailToken: string) => {
      if (token) dispatch(verifyMailService(token, mailToken));
    },
    [dispatch, token]
  );

  return {
    mailVerification,
    verifyMail,
  };
};

export type UseAuthReturn = {
  mailVerification: MailVerificationState;
  verifyMail: (mailToken: string) => void;
};
