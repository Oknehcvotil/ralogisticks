import { useEffect } from 'react';
import { setLanguage } from '../redux/languageSlice/languageSlice';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

const useChangeLanguage = language => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (['ua', 'en', 'ru'].includes(language)) {
      dispatch(setLanguage(language));

      i18n.changeLanguage(language);
    }
    //eslint-disable-next-line
  }, [language, i18n]);
};

export default useChangeLanguage;
