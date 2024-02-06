import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const ServicesPage = () => {
  return (
    <>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default ServicesPage;
