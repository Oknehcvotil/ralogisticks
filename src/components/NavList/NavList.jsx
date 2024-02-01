import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { MenuContext } from 'context/navState';
import { motion } from 'framer-motion';

const listVariants = {
  open: {
    transition: { delay: 0.3, staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { delay: 0.3, staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 1000, velocity: -100 } },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: { y: { stiffness: 1000 } },
  },
};

const NavList = () => {
  const { language } = useParams();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    if (isMenuOpen) {
      toggleMenuMode();
    }
  };

  return (
    <motion.ul
      variants={listVariants}
      initial={'closed'}
      animate={isMenuOpen ? 'open' : 'closed'}
    >
      <motion.li
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <NavLink to={`/${language}/about-us`} onClick={clickHandler}>
          About
        </NavLink>
      </motion.li>
      <motion.li
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <NavLink to={`/${language}/services`} onClick={clickHandler}>
          Services
        </NavLink>
      </motion.li>
      <motion.li
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <NavLink to={`/${language}/contacts`} onClick={clickHandler}>
          Contacts
        </NavLink>
      </motion.li>
    </motion.ul>
  );
};

export default NavList;
