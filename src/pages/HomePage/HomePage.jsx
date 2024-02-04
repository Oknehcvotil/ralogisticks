import ServicesSlider from 'components/ServicesSlider/ServicesSlider';
import GoogleMap from 'components/GoogleMap/GoogleMap';

const HomePage = () => {
  return (
    <>
      <section>
        <ServicesSlider />
      </section>
      <section>
        <GoogleMap />
      </section>
    </>
  );
};

export default HomePage;
