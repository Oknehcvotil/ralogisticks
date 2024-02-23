import Title from 'components/Title/Title';
import Picture from 'components/Picture/Picture';
import { useTranslation } from 'react-i18next';
import { Container, PictureCont } from './ServicesPageSection.styled';
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
          fontSize: '35px',
          color: 'var(--title-color)',
          lineHeight: '40px',
        }}
      >
        {t(title)}
      </Title>
      {paragraphs.map((paragraph, index) => (
        <motion.p
          key={index}
          variants={fadeInVariants}
          initial="initial"
          animate="animate"
          custom={index}
        >
          {t(paragraph, { companyName: t('companyName') })}
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
        <Picture imagePath={imagePath} altText={altText} />
      </PictureCont>
    </Container>
  );
};

export default ServicesPageSection;
