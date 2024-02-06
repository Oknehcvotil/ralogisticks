import ServicesPageSection from 'components/ServicesPageSection/ServicesPageSection';

const InternationalTransportationPage = () => {
  const paragraphs = [
    'pages.services.worldTransportation.firstParagraf',
    'pages.services.worldTransportation.secondParagraf',
    'pages.services.worldTransportation.thirdParagraf',
    'pages.services.worldTransportation.fourthParagraf',
  ];

  return (
    <section>
      <ServicesPageSection
        altText={'International Transportation'}
        imagePath={'world_transportation/world'}
        title={'navigation.services.international'}
        paragraphs={paragraphs}
      />
    </section>
  );
};

export default InternationalTransportationPage;
