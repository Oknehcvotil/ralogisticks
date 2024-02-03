import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { MenuContext } from 'context/navState';
import { NavListCont } from './SideNavList.styled';
import MenuItem from 'components/MenuItem/MenuItem';
import SideServicesMenuItem from 'components/SideServicesMenuItem/SideServicesMenuItem';
import { useTranslation } from 'react-i18next';

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

const SideNavList = () => {
  const { language } = useParams();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  const { t } = useTranslation();

  const clickHandler = () => {
    if (isMenuOpen) {
      toggleMenuMode();
    }
  };

  /////services routes

  const servicesRoutes = [
    {
      path: `/${language}/services/international-transportation`,
      label: 'navigation.services.international',
    },
    {
      path: `/${language}/services/sea-shipping`,
      label: 'navigation.services.seaShipping',
    },
    {
      path: `/${language}/services/multimodal-transportation`,
      label: 'navigation.services.multimodal',
    },
    {
      path: `/${language}/services/customs-clearance`,
      label: 'navigation.services.customs',
    },
    {
      path: `/${language}/services/cargo-insurance`,
      label: 'navigation.services.insurance',
    },
  ];

  return (
    <nav>
      <NavListCont
        variants={listVariants}
        initial={'closed'}
        animate={isMenuOpen ? 'open' : 'closed'}
      >
        <MenuItem
          to={`/${language}/about-us`}
          variants={itemVariants}
          onClick={clickHandler}
        >
          {t('navigation.about')}
        </MenuItem>

        {/* services */}

        <SideServicesMenuItem
          serviceRoutes={servicesRoutes}
          onClick={clickHandler}
        >
          {t('navigation.services.name')}
        </SideServicesMenuItem>

        {/* services */}

        <MenuItem
          to={`/${language}/contacts`}
          variants={itemVariants}
          onClick={clickHandler}
        >
          {t('navigation.contacts')}
        </MenuItem>
      </NavListCont>
    </nav>
  );
};

export default SideNavList;
