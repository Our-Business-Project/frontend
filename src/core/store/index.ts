import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth.reducer';
import profileReducer from './reducers/profile.reducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
