import { Route, Routes, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { lazy, useEffect } from 'react';

import Layout from 'components/Layout/Layout';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const AboutUsPage = lazy(() => import('../../pages/AboutUsPage/AboutUsPage'));
const ServicesPage = lazy(() =>
  import('../../pages/ServicesPage/ServicesPage')
);
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage')
);
const InternationalTransportationPage = lazy(() =>
  import(
    '../../pages/InternationalTransportationPage/InternationalShippingPage'
  )
);
const SeaShippingPage = lazy(() =>
  import('../../pages/SeaShippingPage/SeaShippingPage')
);
const MultimodalTransportationPage = lazy(() =>
  import(
    '../../pages/MultimodalTransportationPage/MultimodalTransportationPage'
  )
);
const CargoInsurancePage = lazy(() =>
  import('../../pages/CargoInsurancePage/CargoInsurancePage')
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);
const CustomsClearancePage = lazy(() =>
  import('../../pages/CustomsClearancePage/CustomsClearancePage')
);

const App = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.title = t('companyName');
  }, [i18n.language, t]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/ua`} />} />
      <Route path="/:language" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="services" element={<ServicesPage />}>
          <Route
            path="international-transportation"
            element={<InternationalTransportationPage />}
          />
          <Route path="sea-shipping" element={<SeaShippingPage />} />
          <Route
            path="multimodal-transportation"
            element={<MultimodalTransportationPage />}
          />
          <Route path="customs-clearance" element={<CustomsClearancePage />} />
          <Route path="cargo-insurance" element={<CargoInsurancePage />} />
        </Route>
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
      <Route path="404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default App;
