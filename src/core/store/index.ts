import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth.reducer';
import profileReducer from './reducers/profile.reducer';
import mailVerificationReducer from './reducers/mailVerification.reducer';
import calculatorReducer from './reducers/calcFolders.reducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    mailVerification: mailVerificationReducer,
    profile: profileReducer,
    calcFolders: calculatorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
