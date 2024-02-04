import MenuItem from 'components/MenuItem/MenuItem';
import { useParams } from 'react-router-dom';
import { NavigationList } from './Navigation.styled';
import { useTranslation } from 'react-i18next';

const Navigation = ({ onClick, buttonRef }) => {
  const { language } = useParams();
  const { t } = useTranslation();

  const menuItems = [
    { label: 'navigation.about', to: `/${language}/about-us` },
    { label: 'navigation.services.name', onClick: onClick },
    { label: 'navigation.contacts', to: `/${language}/contacts` },
  ];

  return (
    <nav>
      <NavigationList>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            to={item.to}
            onClick={item.onClick}
            buttonRef={buttonRef}
          >
            {t(item.label)}
          </MenuItem>
        ))}
      </NavigationList>
    </nav>
  );
};

export default Navigation;
