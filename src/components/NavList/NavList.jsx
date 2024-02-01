import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { MenuContext } from 'context/navState';

const NavList = () => {
  const { language } = useParams();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    if (isMenuOpen) {
      toggleMenuMode();
    }
  };

  return (
    <ul>
      <li>
        <NavLink to={`/${language}/about-us`} onClick={clickHandler}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to={`/${language}/services`} onClick={clickHandler}>
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to={`/${language}/contacts`} onClick={clickHandler}>
          Contacts
        </NavLink>
        ;
      </li>
    </ul>
  );
};

export default NavList;
