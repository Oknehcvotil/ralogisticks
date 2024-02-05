import ServicesSlider from 'components/ServicesSlider/ServicesSlider';
import GoogleMap from 'components/GoogleMap/GoogleMap';
import Title from 'components/Title/Title';
import OurServicesSection from 'components/OurServicesSection/OurServicesSection';
import AboutUsSection from 'components/AboutUsSection/AboutUsSection';

const HomePage = () => {
  return (
    <>
      <section>
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
      </section>
      <AboutUsSection />
      <OurServicesSection />
      <section>
        <GoogleMap />
      </section>
    </>
  );
};

export default HomePage;
