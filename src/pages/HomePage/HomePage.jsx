import ServicesSlider from 'components/ServicesSlider/ServicesSlider';
import GoogleMap from 'components/GoogleMap/GoogleMap';
import Title from 'components/Title/Title';
import OurServicesSection from 'components/OurServicesSection/OurServicesSection';
import AboutUsSection from 'components/AboutUsSection/AboutUsSection';
import FormSection from 'components/FormSection/FormSection';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
      >
        <Title
          style={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            margin: '-1px',
            padding: '0',
            overflow: 'hidden',
            border: '0',
            clip: 'rect(0 0 0 0)',
          }}
        >
          Home Page
        </Title>
        <ServicesSlider />
      </motion.section>

      <section>
        <AboutUsSection />
      </section>

      <OurServicesSection animateFadeIn={true} />

      <motion.section
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
        <FormSection />
      </motion.section>

      <section>
        <GoogleMap />
      </section>
    </>
  );
};

export default HomePage;
