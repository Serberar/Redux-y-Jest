import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/login/loginSlice';

export function setupStore() {
  return configureStore({
    reducer: {
      counter: counterReducer,
      auth: authReducer,
    },
  });
}
