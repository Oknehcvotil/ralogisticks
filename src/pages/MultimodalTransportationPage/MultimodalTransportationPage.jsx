import ServicesPageSection from 'components/ServicesPageSection/ServicesPageSection';
import { multimodlParagraphs } from 'data/data';

const MultimodalTransportationPage = () => {
  return (
    <section>
      <ServicesPageSection
        altText={'Multimodal Transportation'}
        imagePath={'multimodal_transportation/multimodal'}
        title={'navigation.services.multimodal'}
        paragraphs={multimodlParagraphs}
      />
    </section>
  );
};

export default MultimodalTransportationPage;
