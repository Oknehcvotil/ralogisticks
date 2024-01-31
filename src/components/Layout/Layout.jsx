import { Outlet, useParams, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import { NavLink } from 'react-router-dom';
import useChangeLanguage from 'hooks/useChangeLanguage ';
import AppBar from 'components/AppBar/AppBar';

const Layout = () => {
  const { language } = useParams();

  useChangeLanguage(language);

  if (!['ua', 'en', 'ru'].includes(language)) {
    return <Navigate to={`/404`} />;
  }

  return (
    <>
      <AppBar />
      <nav>
        <NavLink to={`/${language}/about-us`}>About</NavLink>
        <NavLink to={`/${language}/services`}>Services</NavLink>
        <NavLink to={`/${language}/contacts`}>Contacts</NavLink>
      </nav>
      <main>
        <Suspense fallback={'loading...'}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
