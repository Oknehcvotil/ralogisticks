import { useDispatch } from 'react-redux';
import { setLanguage } from '../../redux/languageSlice/languageSlice';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const DefaultLanguageRoute = ({ defaultLanguage }) => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(defaultLanguage);
    dispatch(setLanguage(defaultLanguage));
  }, [defaultLanguage, dispatch, i18n]);

  return <Navigate to={`/${defaultLanguage}`} />;
};

export default DefaultLanguageRoute;
