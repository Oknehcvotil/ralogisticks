import Title from 'components/Title/Title';
import Picture from 'components/Picture/Picture';
import { useTranslation } from 'react-i18next';
import { Container, PictureCont } from './ServicesPageSection.styled';

const ServicesPageSection = ({ title, paragraphs, imagePath, altText }) => {
  const { t } = useTranslation();

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
        {t(title)}
      </Title>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{t(paragraph, { companyName: t('companyName') })}</p>
      ))}

      <PictureCont>
        <Picture imagePath={imagePath} altText={altText} />
      </PictureCont>
    </Container>
  );
};

export default ServicesPageSection;
