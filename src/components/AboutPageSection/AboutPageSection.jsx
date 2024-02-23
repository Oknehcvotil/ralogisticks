import Title from 'components/Title/Title';
import { useTranslation } from 'react-i18next';
import { Container, PictureCont } from './AboutPageSection.styled';
import Picture from 'components/Picture/Picture';
import { motion } from 'framer-motion';

const fadeInVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: index => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

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
        <motion.p
          key={index}
          variants={fadeInVariants}
          initial="initial"
          animate="animate"
          custom={index}
        >
          {paragraph}
        </motion.p>
      ))}

      <PictureCont
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <Picture imagePath="about_us/trucks" altText="RA LOGISTICS TRUCKS" />
      </PictureCont>
    </Container>
  );
};

export default AboutPageSection;
