import MenuItem from 'components/MenuItem/MenuItem';
import { useParams } from 'react-router-dom';
import { NavigationList } from './Navigation.styled';

const Navigation = ({ onClick }) => {
  const { language } = useParams();

  const menuItems = [
    { label: 'about', to: `/${language}/about-us` },
    { label: 'services', onClick: onClick },
    { label: 'contacts', to: `/${language}/contacts` },
  ];

  return (
    <nav>
      <NavigationList>
        {menuItems.map((item, index) => (
          <MenuItem key={index} to={item.to} onClick={item.onClick}>
            {item.label}
          </MenuItem>
        ))}
      </NavigationList>
    </nav>
  );
};

export default Navigation;
