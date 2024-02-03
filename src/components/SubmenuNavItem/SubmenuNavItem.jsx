import sprite from '../../assets/icons/sprite.svg';
import { SubmenuNavItemCont } from './SubmenuNavItem.styled';
import { useTranslation } from 'react-i18next';

const SubmenuNavItem = ({ id, children }) => {
  const { t } = useTranslation();

  return (
    <SubmenuNavItemCont>
      <svg width="90" height="55">
        <use href={sprite + id}></use>
      </svg>
      {t(children)}
    </SubmenuNavItemCont>
  );
};

export default SubmenuNavItem;
