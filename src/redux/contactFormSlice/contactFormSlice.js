import { createSlice } from '@reduxjs/toolkit';
import { submitForm } from './contactFormThunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  formData: {
    name: '',
    phone: '',
    email: '',
    message: '',
  },
  showSuccessMessage: false,
  loading: false,
  error: null,
};

const contactFormSlice = createSlice({
  name: 'contactForm',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
    setShowSuccessMessage: (state, action) => {
      state.showSuccessMessage = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(submitForm.pending, state => {
        state.loading = true;
      })
      .addCase(submitForm.fulfilled, (state, action) => {
        state.loading = false;
        state.formData = initialState.formData;
        state.showSuccessMessage = true;
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const persistConfig = {
  key: 'formData',
  storage,
};

export const { setFormData, setShowSuccessMessage } = contactFormSlice.actions;

export const persistedFormReducer = persistReducer(
  persistConfig,
  contactFormSlice.reducer
);

