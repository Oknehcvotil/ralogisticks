import MenuItem from 'components/MenuItem/MenuItem';
import { useParams } from 'react-router-dom';
import { NavigationList } from './Navigation.styled';
import { useTranslation } from 'react-i18next';

const Navigation = ({ onClick, closeSubmenu }) => {
  const { language } = useParams();
  const { t } = useTranslation();

  const menuItems = [
    {
      label: 'navigation.about',
      to: `/${language}/about-us`,
      onClick: closeSubmenu,
    },
    { label: 'navigation.services.name', onClick: onClick },
    {
      label: 'navigation.contacts',
      to: `/${language}/contacts`,
      onClick: closeSubmenu,
    },
  ];

  return (
    <nav>
      <NavigationList>
        {menuItems.map((item, index) => (
          <MenuItem key={index} to={item.to} onClick={item.onClick}>
            {t(item.label)}
          </MenuItem>
        ))}
      </NavigationList>
    </nav>
  );
};

export default Navigation;
