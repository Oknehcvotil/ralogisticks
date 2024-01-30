import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import AboutUsPage from 'pages/AboutUsPage/AboutUsPage';
import ServicesPage from 'pages/ServicesPage/ServicesPage';
import ContactsPage from 'pages/ContactsPage/Contacts';
import DefaultLanguageRoute from 'components/DefaultLanguageRoute/DefaultLanguageRoute';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLanguageRoute />} />
      <Route path="/:language" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
