import { useState } from 'react';
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

  const handleSubmit = (values, { resetForm }) => {
    setFormData(values);
    resetForm();
    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 1000);
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
