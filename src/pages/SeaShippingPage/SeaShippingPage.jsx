import ServicesPageSection from 'components/ServicesPageSection/ServicesPageSection';
import { seaTransportationParagraphs } from 'data/data';

const SeaShippingPage = () => {
  return (
    <section>
      <ServicesPageSection
        altText={'Ocean Freight'}
        imagePath={'sea_shipping/containerVessle'}
        title={'navigation.services.seaShipping'}
        paragraphs={seaTransportationParagraphs}
      />
    </section>
  );
};

export default SeaShippingPage;
