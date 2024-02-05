import Title from 'components/Title/Title';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Cont, ListCont, SectionCont } from './OurServicesSection.styled';
import MenuItem from 'components/MenuItem/MenuItem';
import SubmenuNavItem from 'components/SubmenuNavItem/SubmenuNavItem';

const OurServicesSection = () => {
  const { language } = useParams();
  const { t } = useTranslation();

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
    <SectionCont>
      <Cont>
        <Title
          level={2}
          style={{
            margin: '0 auto 50px',
            textTransform: 'uppercase',
            textAlign: 'center',
            fontFamily: '"HeliosCond", sans-serif',
            fontSize: '40px',
            color: 'var(--title-color)',
          }}
        >
          {t('titles.ourServices')}
        </Title>
        <ListCont>
          {servicesRoutes.map((route, index) => (
            <MenuItem key={index} to={route.path}>
              <SubmenuNavItem key={route.id} id={route.id}>
                {route.label}
              </SubmenuNavItem>
            </MenuItem>
          ))}
        </ListCont>
      </Cont>
    </SectionCont>
  );
};

export default OurServicesSection;
