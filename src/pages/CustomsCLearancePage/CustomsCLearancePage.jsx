import ServicesPageSection from 'components/ServicesPageSection/ServicesPageSection';

const CustomsClearancePage = () => {
  const paragraphs = [
    'pages.services.customsService.firstParagraf',
    'pages.services.customsService.secondParagraf',
  ];

  return (
    <section>
      <ServicesPageSection
        altText={'Customs Clearance'}
        imagePath={'customs_service/customs'}
        title={'navigation.services.customs'}
        paragraphs={paragraphs}
      />
    </section>
  );
};

export default CustomsClearancePage;
