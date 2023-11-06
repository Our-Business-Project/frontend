import { RootState } from '../';
import { MailVerificationState } from '../reducers/mailVerification.reducer';

const selectMailVerification = (state: RootState): MailVerificationState => state.mailVerification;

export { selectMailVerification };
