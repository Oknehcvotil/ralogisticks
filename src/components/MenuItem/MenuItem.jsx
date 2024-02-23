import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: index => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const MenuItem = ({
  to,
  onClick,
  children,
  variants,
  submenuBtnRef,
  index,
  animateFadeIn,
}) => {
  const motionProps = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.95 },
  };

  if (variants) {
    motionProps.variants = variants;
  }

  return (
    <motion.li
      {...motionProps}
      variants={animateFadeIn ? fadeInAnimationVariants : {}}
      initial={animateFadeIn ? 'initial' : undefined}
      whileInView={animateFadeIn ? 'animate' : undefined}
      viewport={{
        once: true,
      }}
      custom={index}
      onClick={onClick}
      ref={submenuBtnRef}
    >
      {to ? <NavLink to={to}>{children}</NavLink> : children}
    </motion.li>
  );
};
export default MenuItem;
