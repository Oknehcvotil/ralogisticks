import LogoLink from 'components/LogoLink/LogoLink';
import { Header, HeaderCont, LangCont } from './AppBar.styled';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import BurgerMenuBtn from 'components/BurgerMenuBtn/BurgerMenuBtn';
import { useRef, useContext } from 'react';
import SideMenu from 'components/SideMenu/SideMenu';
import useOnClickOutside from 'hooks/useOnClickOutside';
import { MenuContext } from '../../context/navState';
import NavList from 'components/NavList/NavList';

const AppBar = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  const sideMenuRef = useRef(null);

  useOnClickOutside(sideMenuRef, () => {
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <Header>
      <HeaderCont>
        <LogoLink />
        <LangCont>
          <LanguageSwitcher />
        </LangCont>
        <div ref={sideMenuRef}>
          <BurgerMenuBtn />
          <SideMenu>
            <NavList />
          </SideMenu>
        </div>
      </HeaderCont>
    </Header>
  );
};

export default AppBar;
