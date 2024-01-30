import { Navigate } from 'react-router-dom';

const DefaultLanguageRoute = () => {
  const defaultLanguage = 'ua';
  return <Navigate to={`/${defaultLanguage}`} />;
};

export default DefaultLanguageRoute;
