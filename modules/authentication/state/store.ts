// modules/authentication/state/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Define RootState
export type RootState = ReturnType<typeof store.getState>;

export default store;
