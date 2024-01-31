import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const ServicesPage = () => {
  return (
    <>
      <h2>ServicesPage</h2>
      <Suspense fallback={'loadin...'}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default ServicesPage;
