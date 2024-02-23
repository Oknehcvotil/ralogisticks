import ServicesPageSection from 'components/ServicesPageSection/ServicesPageSection';
import { customsParagraphs } from 'data/data';

const CustomsClearancePage = () => {
  return (
    <section>
      <ServicesPageSection
        altText={'Customs Clearance'}
        imagePath={'customs_service/customs'}
        title={'navigation.services.customs'}
        paragraphs={customsParagraphs}
      />
    </section>
  );
};

export default CustomsClearancePage;
