import { useContext, useEffect } from 'react';
import { MenuContext } from '../../context/navState';
import { AnimatePresence } from 'framer-motion';
import { SideMenuCont } from './SideMenu.styled';

const SideMenu = ({ children }) => {
  const { isMenuOpen } = useContext(MenuContext);

  useEffect(() => {
    const body = document.body;

    if (isMenuOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }

    return () => {
      body.style.overflow = 'visible';
    };
  }, [isMenuOpen]);

  return (
    <AnimatePresence>
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
    </AnimatePresence>
  );
};

export default SideMenu;
