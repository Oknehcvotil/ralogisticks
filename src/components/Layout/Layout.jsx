import { Outlet, useParams, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import useChangeLanguage from 'hooks/useChangeLanguage ';
import AppBar from 'components/AppBar/AppBar';
import AppFooter from 'components/AppFooter/AppFooter';
import { Main, Overlay } from './Layout.styled';

const Layout = () => {
  const { language } = useParams();

  useChangeLanguage(language);

  if (!['ua', 'en', 'ru'].includes(language)) {
    return <Navigate to={`/404`} />;
  }

  return (
    <Overlay>
      <AppBar />

      <Main>
        <Suspense fallback={'loading...'}>
          <Outlet />
        </Suspense>
      </Main>

      <AppFooter />
    </Overlay>
  );
};

export default Layout;
