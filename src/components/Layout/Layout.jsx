import { Outlet, useParams, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
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

      <main>
        <Suspense fallback={'loading...'}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
