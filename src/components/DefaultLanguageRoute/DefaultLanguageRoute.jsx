import { useDispatch} from 'react-redux';
import { setLanguage } from '../../redux/languageSlice/languageSlice';
import { useTranslation } from 'react-i18next';

import { Navigate } from 'react-router-dom';

const DefaultLanguageRoute = ({ defaultLanguage }) => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  i18n.changeLanguage(defaultLanguage);
  dispatch(setLanguage(defaultLanguage));

  return <Navigate to={`/${defaultLanguage}`} />;
};

export default DefaultLanguageRoute;
