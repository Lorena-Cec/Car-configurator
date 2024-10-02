import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from '../modules/authentication/state/authSlice'; 
import carConfigReducer from '../modules/configurator/state/carConfigSlice'; 

const rootReducer = combineReducers({
  auth: authReducer,
  carConfig: carConfigReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
