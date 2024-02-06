import ServicesPageSection from 'components/ServicesPageSection/ServicesPageSection';

const CargoInsurancePage = () => {
  const paragraphs = [
    'pages.services.insurance.firstParagraf',
    'pages.services.insurance.secondParagraf',
    'pages.services.insurance.thirdParagraf',
  ];

  return (
    <section>
      <ServicesPageSection
        altText={'Cargo Insurance'}
        imagePath={'insurance/insurance'}
        title={'navigation.services.insurance'}
        paragraphs={paragraphs}
      />
    </section>
  );
};

export default CargoInsurancePage;
