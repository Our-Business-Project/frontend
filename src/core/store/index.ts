import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth.reducer';
import profileReducer from './reducers/profile.reducer';
import mailVerificationReducer from './reducers/mailVerification.reducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    mailVerification: mailVerificationReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
