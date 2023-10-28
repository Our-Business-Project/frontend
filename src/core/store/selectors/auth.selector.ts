import { RootState } from '../';
import { AuthState } from '../reducers/auth.reducer';

const selectAuth = (state: RootState): AuthState => state.auth;

export { selectAuth };
