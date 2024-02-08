import { useContext } from 'react';
import { MenuContext } from '../../context/navState';
import { SideMenuCont } from './SideMenu.styled';

const SideMenu = ({ children }) => {
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <>
      {isMenuOpen && (
        <SideMenuCont
          initial={{ right: '-100%' }}
          animate={{ right: 0 }}
          exit={{ right: '-100%', transition: { delay: 0.2 } }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </SideMenuCont>
      )}
    </>
  );
};

export default SideMenu;
