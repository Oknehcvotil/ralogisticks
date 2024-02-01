import { useContext } from 'react';
import { MenuContext } from '../../context/navState';
import { AnimatePresence } from 'framer-motion';
import { SideMenuCont } from './SideMenu.styled';

const SideMenu = ({ children }) => {
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <SideMenuCont
          initial={{ opacity: 0, right: '-100%' }}
          animate={{ opacity: 1, right: 0 }}
          exit={{ opacity: 0, right: '-100%' }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </SideMenuCont>
      )}
    </AnimatePresence>
  );
};

export default SideMenu;
