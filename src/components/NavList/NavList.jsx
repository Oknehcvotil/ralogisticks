import { useParams, NavLink } from 'react-router-dom';
import { useContext, useState, useRef } from 'react';
import { MenuContext } from 'context/navState';
import { motion } from 'framer-motion';
import { NavListCont, ServicesListCont } from './NavList.styled';
import useOnClickOutside from 'hooks/useOnClickOutside';

const listVariants = {
  open: {
    display: 'flex',
    transition: {
      delay: 0.3,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    display: 'none',
    transition: {
      delay: 0.3,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
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

  /////services logick
  const [isServicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  const toggleServices = () => {
    setServicesOpen(!isServicesOpen);
  };

  useOnClickOutside(servicesRef, () => {
    if (isServicesOpen) {
      toggleServices();
    }
  });

  /////services logick

  return (
    <NavListCont
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
        className="services-list"
        onClick={toggleServices}
        ref={servicesRef}
      >
        Services
        {/* services */}
        <ServicesListCont
          variants={listVariants}
          initial={'closed'}
          animate={isServicesOpen ? 'open' : 'closed'}
        >
          <motion.li
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink
              to={`/${language}/services/international-transportation`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              onClick={clickHandler}
            >
              International Transportation
            </NavLink>
          </motion.li>
          <motion.li
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink
              to={`/${language}/services/sea-shipping`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              onClick={clickHandler}
            >
              Sea Shipping
            </NavLink>
          </motion.li>
          <motion.li
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink
              to={`/${language}/services/multimodal-transportation`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              onClick={clickHandler}
            >
              multimodal transportation
            </NavLink>
          </motion.li>
          <motion.li
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink
              to={`/${language}/services/customs-clearance`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              onClick={clickHandler}
            >
              customs clearance
            </NavLink>
          </motion.li>
          <motion.li
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink
              to={`/${language}/services/cargo-insurance`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              onClick={clickHandler}
            >
              cargo insurance
            </NavLink>
          </motion.li>
        </ServicesListCont>
        {/* services */}
      </motion.li>
      <motion.li
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <NavLink
          to={`/${language}/contacts`}
          className="nav_link"
          onClick={clickHandler}
        >
          Contacts
        </NavLink>
      </motion.li>
    </NavListCont>
  );
};

export default NavList;
