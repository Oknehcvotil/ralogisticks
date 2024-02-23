import Icon from 'components/Icon/Icon';
import { ContactLink } from './ContactItem.styled';
import { motion } from 'framer-motion';

const ContactItem = ({ href, iconName, text, width, height, animation }) => {
  const variants = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.95 },
    transition: {
      duration: 0.3,
    },
  };

  return (
    <motion.li {...variants} variants={animation}>
      <ContactLink href={href}>
        <Icon iconName={iconName} width={width} height={height} />
        <span>{text}</span>
      </ContactLink>
    </motion.li>
  );
};
export default ContactItem;
