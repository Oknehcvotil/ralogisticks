import LogoLink from 'components/LogoLink/LogoLink';
import { Header, HeaderCont, LangCont } from './AppBar.styled';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import BurgerMenuBtn from 'components/BurgerMenuBtn/BurgerMenuBtn';
import { useRef, useContext, useState } from 'react';
import SideMenu from 'components/SideMenu/SideMenu';
import useOnClickOutside from 'hooks/useOnClickOutside';
import { MenuContext } from '../../context/navState';
import SideNavList from 'components/SideNavList/SideNavList';
import Navigation from 'components/Navigation/Navigation';
import Submenu from 'components/Submenu/Submenu';
import useResize from 'hooks/useResize';

const AppBar = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const sideMenuRef = useRef(null);
  const submenuRef = useRef(null);

  const windowSize = useResize();
  const isDesktop = windowSize.width >= 1200;

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  useOnClickOutside(sideMenuRef, () => {
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  useOnClickOutside(submenuRef, () => {
    if (isSubmenuOpen) {
      toggleSubmenu();
    }
  });

  return (
    <>
      <Header>
        <HeaderCont>
          <LogoLink />

          {isDesktop && <Navigation onClick={toggleSubmenu} />}

          <LangCont>
            <LanguageSwitcher />
          </LangCont>

          {!isDesktop && (
            <div ref={sideMenuRef}>
              <BurgerMenuBtn />
              <SideMenu>
                <SideNavList />
              </SideMenu>
            </div>
          )}
        </HeaderCont>
      </Header>

      {isSubmenuOpen && isDesktop && (
        <Submenu
          isOpen={isSubmenuOpen}
          onClick={toggleSubmenu}
          submenuRef={submenuRef}
        />
      )}
    </>
  );
};

export default AppBar;
