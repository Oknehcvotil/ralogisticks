import ServicesPageSection from 'components/ServicesPageSection/ServicesPageSection';

const MultimodalTransportationPage = () => {
  const paragraphs = [
    'pages.services.multimodal.firstParagraf',
    'pages.services.multimodal.secondParagraf',
    'pages.services.multimodal.thirdParagraf',
    'pages.services.multimodal.fourthParagraf',
  ];

  return (
    <section>
      <ServicesPageSection
        altText={'Multimodal Transportation'}
        imagePath={'multimodal_transportation/multimodal'}
        title={'navigation.services.multimodal'}
        paragraphs={paragraphs}
      />
    </section>
  );
};

export default MultimodalTransportationPage;
