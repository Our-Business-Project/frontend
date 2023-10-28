import { RootState } from '../';
import { SignInState } from '../reducers/signIn.reducer';

const selectSignIn = (state: RootState): SignInState => state.signIn;

export { selectSignIn };
