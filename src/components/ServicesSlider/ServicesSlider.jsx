import Slider from 'react-slick';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container, ImgContainer, ServiceName } from './ServicesSlider.styled';
import { serviceData } from 'utils/servicesSliderData';

const ServicesSlider = () => {
  const { language } = useParams();
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Container>
      <Slider {...settings}>
        {serviceData.map((service, index) => (
          <ImgContainer key={index}>
            <picture>
              <source
                srcSet={`${require(`../../assets/images/slider_img/${service.img['regular']}`)} 1x`}
                type="image/jpg"
              />
              <source
                srcSet={`${require(`../../assets/images/slider_img/${service.img['x']}`)} 2x`}
                type="image/jpg"
              />
              <source
                srcSet={`${require(`../../assets/images/slider_img/${service.img['webpRegular']}`)} 1x`}
                type="image/webp"
              />
              <source
                srcSet={`${require(`../../assets/images/slider_img/${service.img['webpX']}`)} 2x`}
                type="image/webp"
              />
              <img
                src={require(`../../assets/images/slider_img/${service.img['regular']}`)}
                alt={service.alt}
              />
            </picture>
            <ServiceName to={`/${language}${service.to}`}>
              {t(service.translationKey)}
            </ServiceName>
          </ImgContainer>
        ))}
      </Slider>
    </Container>
  );
};

export default ServicesSlider;
