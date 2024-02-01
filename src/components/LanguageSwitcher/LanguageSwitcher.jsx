import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { LanguageList } from './LanguageSwitcher.styled';
import useOnClickOutside from 'hooks/useOnClickOutside';

const LanguageSwitcher = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();
  const { language: currentLanguage } = useParams();

  const languages = ['ua', 'en', 'ru'];

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLanguageChange = selectedLanguage => {
    const newPath = location.pathname.replace(
      `/${i18n.language}`,
      `/${selectedLanguage}`
    );
    navigate(newPath);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useOnClickOutside(dropdownRef, () => {
    if (isOpen) {
      toggleDropdown();
    }
  });

  return (
    <LanguageList
      onClick={toggleDropdown}
      ref={dropdownRef}
      className="custom-dropdown"
    >
      <li
        key={currentLanguage}
        onClick={() => handleLanguageChange(currentLanguage)}
      >
        {currentLanguage}
      </li>
      {isOpen && (
        <AnimatePresence>
          {languages.map(language =>
            language === currentLanguage ? null : (
              <motion.li
                key={language}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                onClick={() => handleLanguageChange(language)}
              >
                {language}
              </motion.li>
            )
          )}
        </AnimatePresence>
      )}
    </LanguageList>
  );
};

export default LanguageSwitcher;
