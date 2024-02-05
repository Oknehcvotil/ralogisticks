import ContactForm from 'components/ContactForm/ContactForm';
import Title from 'components/Title/Title';
import { useTranslation } from 'react-i18next';
import { FormSectionCont } from './FormSection.styled';

const FormSection = () => {
  const { t } = useTranslation();

  return (
    <FormSectionCont>
      <Title
        level={2}
        style={{
          margin: '0 auto 50px',
          textTransform: 'uppercase',
          textAlign: 'center',
          fontFamily: '"HeliosCond", sans-serif',
          fontSize: '40px',
          color: 'var(--title-color)',
        }}
      >
        {t('titles.request')}
      </Title>
      <ContactForm />
    </FormSectionCont>
  );
};

export default FormSection;
