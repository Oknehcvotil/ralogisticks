import { useState } from 'react';
import axios from 'axios';
import CustomInput from 'components/CustomInput/CustomInput';
import { Formik, Field } from 'formik';
import { FormStyled, InputContainer } from './ContactForm.styled';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import CustomTextArea from 'components/CustomTextArea/CustomTextArea';
import FormBtn from 'components/FormBtn/FormBtn';
import FormSubmitedMessage from 'components/FormSubmitedMessage/FormSubmitedMessage';

const emailRegex = /^\w+(\.?\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const phoneRegex = /^(\+\d{6,})?(\d{6,})$/;

const ContactForm = ({ className }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  console.log(formData);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const ContactSchema = Yup.object().shape({
    name: Yup.string().required(t('form.messeges.required')),
    phone: Yup.string()
      .matches(phoneRegex, t('form.messeges.invalid.phone'))
      .required(t('form.messeges.required')),
    email: Yup.string()
      .matches(emailRegex, t('form.messeges.invalid.email'))
      .required(t('form.messeges.required')),
    message: Yup.string(),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      // Отправка данных на бэкенд
      const response = await axios.post(
        'https://ralogitics.onrender.com/submit-form',
        values
      );

      // Обработка успешной отправки
      console.log('Ответ от сервера:', response.data);

      setFormData(values);
      resetForm();
      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000);
    } catch (error) {
      // Обработка ошибок при отправке на бэкенд
      console.error('Ошибка при отправке данных:', error.message);
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
        email: '',
        message: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <FormStyled className={className}>
        {showSuccessMessage && (
          <FormSubmitedMessage>{t('form.submitedText')}</FormSubmitedMessage>
        )}

        <InputContainer className="input-container">
          <Field
            name="name"
            label={t('form.labels.name')}
            type="text"
            autoComplete="off"
            component={CustomInput}
          />

          <Field
            name="phone"
            label={t('form.labels.tel')}
            type="tel"
            autoComplete="off"
            component={CustomInput}
          />

          <Field
            name="email"
            label="Email"
            type="email"
            autoComplete="off"
            component={CustomInput}
          />
        </InputContainer>

        <Field
          name="message"
          label={t('form.labels.message')}
          autoComplete="off"
          component={CustomTextArea}
        />

        <FormBtn />
      </FormStyled>
    </Formik>
  );
};

export default ContactForm;
