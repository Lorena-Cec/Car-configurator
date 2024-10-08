import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'; // Import Redux Persist
import storage from 'redux-persist/lib/storage'; // Default storage, koristi local storage
import authReducer from '../modules/authentication/state/authSlice'; 
import carConfigReducer from '../modules/configurator/state/carConfigSlice'; 

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  carConfig: carConfigReducer,
});

// Uvođenje persist reducer-a
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

// Kreiraj persist store
const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor }; // Izvadi store i persistor
