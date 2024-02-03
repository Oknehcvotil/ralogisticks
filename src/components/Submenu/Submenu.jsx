import { SubmenuSection, SubmenuCont, SubmenuList } from './Submenu.styled';
import { useParams } from 'react-router-dom';
import MenuItem from 'components/MenuItem/MenuItem';
import SubmenuNavItem from 'components/SubmenuNavItem/SubmenuNavItem';

const submenuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: 150, opacity: 1 },
};

const Submenu = ({ isOpen, onClick, submenuRef }) => {
  const { language } = useParams();

  const servicesRoutes = [
    {
      path: `/${language}/services/international-transportation`,
      label: 'navigation.services.international',
      id: '#icon-container-truck',
    },
    {
      path: `/${language}/services/sea-shipping`,
      label: 'navigation.services.seaShipping',
      id: '#icon-vessel',
    },
    {
      path: `/${language}/services/multimodal-transportation`,
      label: 'navigation.services.multimodal',
      id: '#icon-multimodal',
    },
    {
      path: `/${language}/services/customs-clearance`,
      label: 'navigation.services.customs',
      id: '#icon-customs',
    },
    {
      path: `/${language}/services/cargo-insurance`,
      label: 'navigation.services.insurance',
      id: '#icon-insurance',
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
              <SubmenuNavItem key={route.id} id={route.id}>
                {route.label}
              </SubmenuNavItem>
            </MenuItem>
          ))}
        </SubmenuList>
      </SubmenuCont>
    </SubmenuSection>
  );
};

export default Submenu;
