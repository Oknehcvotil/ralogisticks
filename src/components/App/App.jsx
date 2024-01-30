import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import AboutUsPage from 'pages/AboutUsPage/AboutUsPage';
import ServicesPage from 'pages/ServicesPage/ServicesPage';
import ContactsPage from 'pages/ContactsPage/Contacts';
import DefaultLanguageRoute from 'components/DefaultLanguageRoute/DefaultLanguageRoute';
import InternationalTransportationPage from 'pages/InternationalTransportationPage/InternationalShippingPage';
import SeaShippingPage from 'pages/SeaShippingPage/SeaShippingPage';
import MultimodalTransportationPage from 'pages/MultimodalTransportationPage/MultimodalTransportationPage';
import CustomsCLearancePage from 'pages/CustomsCLearancePage/CustomsCLearancePage';
import CargoInsurancePage from 'pages/CargoInsurancePage/CargoInsurancePage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLanguageRoute defaultLanguage="ua" />} />
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
          <Route path="customs-clearance" element={<CustomsCLearancePage />} />
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
