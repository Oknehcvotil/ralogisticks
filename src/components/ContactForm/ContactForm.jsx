import { Formik, Field } from 'formik';
import { FormStyled, InputContainer } from './ContactForm.styled';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { submitForm } from '../../redux/contactFormSlice/contactFormThunk';
import {
  selectFormData,
  selectLoading,
} from '../../redux/contactFormSlice/selectors';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CustomTextArea from 'components/CustomTextArea/CustomTextArea';
import FormBtn from 'components/FormBtn/FormBtn';
import FormSubmitedMessage from 'components/FormSubmitedMessage/FormSubmitedMessage';
import CustomInput from 'components/CustomInput/CustomInput';
import Loading from 'components/Loading';

const emailRegex = /^\w+(\.?\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const phoneRegex = /^\+?\d{6,}$/;

const ContactForm = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

  const formData = useSelector(selectFormData);
  const isLoading = useSelector(selectLoading);

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

  const handleSubmit = (values, { resetForm }) => {
    try {
      dispatch(submitForm(values));

      resetForm();

      setIsSuccessMessage(true);

      setTimeout(() => {
        setIsSuccessMessage(false);
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

  return (
    <Formik
      initialValues={formData}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <FormStyled className={className}>
        {isLoading && <Loading />}
        {isSuccessMessage && (
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
