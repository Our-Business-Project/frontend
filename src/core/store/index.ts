import { configureStore } from '@reduxjs/toolkit';
import signInReducer from './reducers/signIn.reducer';

const store = configureStore({
  reducer: {
    signIn: signInReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
