import Title from 'components/Title/Title';
import { useTranslation } from 'react-i18next';
import { Container, PictureCont } from './AboutPageSection.styled';
import Picture from 'components/Picture/Picture';

const AboutPageSection = () => {
  const { t } = useTranslation();

  const paragraphs = [
    t('pages.aboutUs.firstParagraf', { companyName: t('companyName') }),
    t('pages.aboutUs.secondParagraf', { companyName: t('companyName') }),
    t('pages.aboutUs.thirdParagraf', { companyName: t('companyName') }),
    t('pages.aboutUs.fourthParagraf', { companyName: t('companyName') }),
  ];

  return (
    <Container>
      <Title
        style={{
          margin: '0 auto 50px',
          textTransform: 'uppercase',
          textAlign: 'center',
          fontFamily: '"HeliosCond", sans-serif',
          fontSize: '40px',
          color: 'var(--title-color)',
        }}
      >
        {t('titles.aboutUs')}
      </Title>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      <PictureCont>
        <Picture imagePath="about_us/trucks" altText="RA LOGISTICS TRUCKS" />
      </PictureCont>
    </Container>
  );
};

export default AboutPageSection;
