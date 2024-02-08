import { createAsyncThunk } from '@reduxjs/toolkit';
import { submitFormData } from '../../api/formApi';

export const submitForm = createAsyncThunk('contactForm/submitForm', values =>
  submitFormData(values)
);
