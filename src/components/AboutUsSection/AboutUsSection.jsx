import Title from 'components/Title/Title';
import { useTranslation } from 'react-i18next';
import { AboutUsCont } from './AboutUsSection.styled';

const AboutUsSection = () => {
  const { t } = useTranslation();
  const text = t('sections.aboutUs.aboutUsFirst', {
    companyName: t('companyName'),
  });

  return (
    <AboutUsCont
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <Title
        level={2}
        style={{
          margin: '0 auto 50px',
          textTransform: 'uppercase',
          textAlign: 'center',
          fontFamily: '"HeliosCond", sans-serif',
          fontSize: '40px',
          color: 'var(--title-color)',
        }}
      >
        {t('fullCompanyName')}
      </Title>
      <p>{text}</p>
      <p>{t('sections.aboutUs.aboutUsSecond')}</p>
    </AboutUsCont>
  );
};

export default AboutUsSection;
