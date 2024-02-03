import SideServicesList from 'components/SideServicesList/SideServicesList';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import useOnClickOutside from 'hooks/useOnClickOutside';

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

const SideServicesMenuItem = ({
  children,
  serviceRoutes,
  onClick ,
}) => {
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

  return (
    <motion.li
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="services-list"
      onClick={toggleServices}
      ref={servicesRef}
    >
      {children}
      <SideServicesList
        servicesOpen={isServicesOpen}
        serviceRoutes={serviceRoutes}
        onClick={onClick}
      />
    </motion.li>
  );
};
export default SideServicesMenuItem;
