import { useTranslation } from 'react-i18next';
import { SbmtBtn } from './FormBtn.styled';

const FormBtn = () => {
  const { t } = useTranslation();

  return <SbmtBtn type="submit">{t('form.btn')}</SbmtBtn>;
};

export default FormBtn;
