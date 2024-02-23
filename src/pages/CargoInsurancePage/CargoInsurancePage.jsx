import ServicesPageSection from 'components/ServicesPageSection/ServicesPageSection';
import { insuranceParagraphs } from 'data/data';

const CargoInsurancePage = () => {
  return (
    <section>
      <ServicesPageSection
        altText={'Cargo Insurance'}
        imagePath={'insurance/insurance'}
        title={'navigation.services.insurance'}
        paragraphs={insuranceParagraphs}
      />
    </section>
  );
};

export default CargoInsurancePage;
