import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const languageSlice = createSlice({
  name: 'language',
  initialState: { value: 'ua' },
  reducers: {
    setLanguage(state, { payload }) {
      return { value: payload };
    },
  },
});

const persistConfig = {
  key: 'language',
  storage,
};

export const persistedReducer = persistReducer(
  persistConfig,
  languageSlice.reducer
);

export const { setLanguage } = languageSlice.actions;
