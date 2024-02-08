import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from './languageSlice/languageSlice';
import { persistedFormReducer } from './contactFormSlice/contactFormSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    language: persistedReducer,
    contactForm: persistedFormReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
