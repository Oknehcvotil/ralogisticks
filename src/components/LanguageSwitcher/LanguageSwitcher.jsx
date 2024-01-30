import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageSwitcher = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const companyName = t('companyName');

  const handleLanguageChange = selectedLanguage => {
    const newPath = location.pathname.replace(
      `/${i18n.language}`,
      `/${selectedLanguage}`
    );
    navigate(newPath);
  };

  // useEffect(() => {
  //   i18n.changeLanguage(language);
  // }, [language, i18n]);

  return (
    <div>
      <div>
        <button type="button" onClick={() => handleLanguageChange('ua')}>
          UA
        </button>
        <button type="button" onClick={() => handleLanguageChange('en')}>
          EN
        </button>
        <button type="button" onClick={() => handleLanguageChange('ru')}>
          RU
        </button>
      </div>
      <div>
        <p>{companyName}</p>
      </div>
    </div>

    // <LanguageCont>
    //   <button
    //     type="button"
    //     onClick={() => handleLanguageChange('ua')}
    //     className={`${language === 'ua' ? 'active' : ''}`}
    //   >
    //   <EnBtn
    //     type="button"
    //     onClick={() => handleLanguageChange('en')}
    //     className={`${language === 'en' ? 'active' : ''}`}
    //   />
    // </LanguageCont>
  );
};

export default LanguageSwitcher;
