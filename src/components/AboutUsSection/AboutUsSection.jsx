import Title from 'components/Title/Title';
import { useTranslation } from 'react-i18next';
import { AboutUsCont } from './AboutUsSection.styled';

const AboutUsSection = () => {
  const { t } = useTranslation();
  const text = t('sections.aboutUs.aboutUsFirst', {
    companyName: t('companyName'),
  });

  return (
    <section>
      <AboutUsCont>
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
    </section>
  );
};

export default AboutUsSection;
