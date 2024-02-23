import ServicesPageSection from 'components/ServicesPageSection/ServicesPageSection';
import { worldTransportationParagraphs } from 'data/data';

const InternationalTransportationPage = () => {
  return (
    <section>
      <ServicesPageSection
        altText={'International Transportation'}
        imagePath={'world_transportation/world'}
        title={'navigation.services.international'}
        paragraphs={worldTransportationParagraphs}
      />
    </section>
  );
};

export default InternationalTransportationPage;
