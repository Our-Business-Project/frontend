import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth.reducer';
import calculatorReducer from './reducers/calculator.reducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    calculatorData: calculatorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
