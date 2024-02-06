import ServicesPageSection from 'components/ServicesPageSection/ServicesPageSection';

const SeaShippingPage = () => {
  const paragraphs = [
    'pages.services.seaTransportation.firstParagraf',
    'pages.services.seaTransportation.secondParagraf',
    'pages.services.seaTransportation.thirdParagraf',
    'pages.services.seaTransportation.fourthParagraf',
  ];

  return (
    <section>
      <ServicesPageSection
        altText={'Ocean Freight'}
        imagePath={'sea_shipping/containerVessle'}
        title={'navigation.services.seaShipping'}
        paragraphs={paragraphs}
      />
    </section>
  );
};

export default SeaShippingPage;
