import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/CounterSlice';
import authReducer from '../features/login/LoginSlice';

export function setupStore() {
  return configureStore({
    reducer: {
      counter: counterReducer,
      auth: authReducer,
    },
  });
}
