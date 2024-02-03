import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const MenuItem = ({ to, onClick, children, variants }) => {
  const motionProps = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.95 },
  };

  if (variants) {
    motionProps.variants = variants;
  }

  return (
    <motion.li {...motionProps} onClick={onClick}>
      {to ? <NavLink to={to}>{children}</NavLink> : children}
    </motion.li>
  );
};
export default MenuItem;
