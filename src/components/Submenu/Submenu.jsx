import { SubmenuSection, SubmenuCont, SubmenuList } from './Submenu.styled';
import { useParams } from 'react-router-dom';
import MenuItem from 'components/MenuItem/MenuItem';

const submenuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: 150, opacity: 1 },
};

const Submenu = ({ isOpen, onClick, submenuRef }) => {
  const { language } = useParams();

  const servicesRoutes = [
    {
      path: `/${language}/services/international-transportation`,
      label: 'International Transportation',
    },
    {
      path: `/${language}/services/sea-shipping`,
      label: 'Sea Shipping',
    },
    {
      path: `/${language}/services/multimodal-transportation`,
      label: 'multimodal transportation',
    },
    {
      path: `/${language}/services/customs-clearance`,
      label: 'customs clearance',
    },
    {
      path: `/${language}/services/cargo-insurance`,
      label: 'cargo insurance',
    },
  ];

  return (
    <SubmenuSection
      initial="hidden"
      animate={isOpen ? 'visible' : 'hidden'}
      variants={submenuVariants}
      transition={{ duration: 0.5 }}
      ref={submenuRef}
    >
      <SubmenuCont>
        <SubmenuList>
          {servicesRoutes.map((route, index) => (
            <MenuItem key={index} to={route.path} onClick={onClick}>
              {route.label}
            </MenuItem>
          ))}
        </SubmenuList>
      </SubmenuCont>
    </SubmenuSection>
  );
};

export default Submenu;
