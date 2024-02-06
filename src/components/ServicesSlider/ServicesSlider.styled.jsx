import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 62px 15px 0;
  width: 100%;

  .slick-next {
    right: 15px;
  }

  .slick-prev {
    left: 15px;
    z-index: 500;
  }

  .slick-prev:before,
  .slick-next:before {
    color: #cbc3c3;
    font-size: 10px;
  }

  .slick-dots {
    width: auto;
    bottom: 5px;
    left: 5px;

    li {
      margin: 0 2px;
    }

    li button:before {
      opacity: 1;
      font-size: 10px;
      color: var(--footer-text-color);
    }

    li.slick-active button:before {
      color: var(--logo-color);
    }
  }

  @media screen and (min-width: 768px) {
    .slick-prev:before,
    .slick-next:before {
      font-size: 20px;
    }

    .slick-dots {
      width: auto;
      bottom: 40px;
      left: 50px;

      li {
        margin: 0 8px;
      }

      li button:before {
        opacity: 1;
        font-size: 22px;
      }
    }
  }

  @media screen and (min-width: 1045px) {
    max-width: 1024px;
    padding-top: 84px;
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  border: 3px solid var(--logo-color);
  min-height: 90px;

  ::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(46, 47, 66, 0.2), rgba(46, 47, 66, 0.2));
    /* background-color: rgba(0, 0, 0, 0.2);  */
    z-index: 1;
  }

  @media screen and (min-width: 768px) {
    min-height: 250px;
  }

  @media screen and (min-width: 1045px) {
    min-height: 300px;
  }
`;

export const ServiceName = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
  color: #ffff;
  font-family: 'HeliosCond', sans-serif;
  transition: color 0.3s ease-in-out;
  z-index: 4;

  &:hover,
  &:focus {
    color: var(--logo-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 40px;
    top: 25px;
    left: 25px;
    transform: translate(0%, 0%);
  }

  @media screen and (min-width: 1045px) {
    font-size: 45px;
  }
`;
