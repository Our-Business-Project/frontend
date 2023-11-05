import { RootState } from '../';
import { ProfileState } from '../reducers/profile.reducer';

const selectProfile = (state: RootState): ProfileState => state.profile;

export { selectProfile };
