import axios from 'axios';

const baseURL = 'https://ralogitics.onrender.com';

export const submitFormData = async values => {
  const { data } = await axios.post(`${baseURL}/submit-form`, values);

  return data;
};
