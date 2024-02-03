import Icon from 'components/Icon/Icon';
import { SubmenuNavItemCont } from './SubmenuNavItem.styled';
import { useTranslation } from 'react-i18next';

const SubmenuNavItem = ({ id, children }) => {
  const { t } = useTranslation();

  return (
    <SubmenuNavItemCont>
      <Icon width='90' height='55' iconName={id} />
      {t(children)}
    </SubmenuNavItemCont>
  );
};

export default SubmenuNavItem;
