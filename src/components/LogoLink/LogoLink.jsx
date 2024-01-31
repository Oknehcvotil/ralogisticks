import { useParams } from 'react-router-dom';
import sprite from '../../assets/icons/sprite.svg';
import { useTranslation } from 'react-i18next';
import { Link } from './LogoLink.styled';

const LogoLink = () => {
  const { language } = useParams();
  const { t } = useTranslation();

  return (
    <Link to={`/${language}`}>
      <svg width="84" height="51">
        <use href={sprite + '#icon-logo'}></use>
      </svg>
      {t('companyName')}
    </Link>
  );
};

export default LogoLink;
