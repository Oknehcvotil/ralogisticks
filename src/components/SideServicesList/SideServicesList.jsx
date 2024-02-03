import MenuItem from 'components/MenuItem/MenuItem';
import { ServicesListCont } from './SideServicesList.styled';
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

const SideServicesList = ({ servicesOpen, serviceRoutes, onClick }) => {
  const { t } = useTranslation();

  return (
    <ServicesListCont
      variants={listVariants}
      initial={'closed'}
      animate={servicesOpen ? 'open' : 'closed'}
    >
      {serviceRoutes.map((route, index) => (
        <MenuItem
          key={index}
          to={route.path}
          onClick={onClick}
          variants={itemVariants}
        >
          {t(route.label)}
        </MenuItem>
      ))}
    </ServicesListCont>
  );
};

export default SideServicesList;
