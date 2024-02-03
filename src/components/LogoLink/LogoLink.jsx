import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link } from './LogoLink.styled';
import logo from '../../assets/images/logo/ralogistick_logo.png';

const LogoLink = () => {
  const { language } = useParams();
  const { t } = useTranslation();

  return (
    <Link to={`/${language}`}>
      <img src={logo} alt="RA LOGISTICS" width="84" height="51" />
      {t('companyName')}
    </Link>
  );
};

export default LogoLink;
