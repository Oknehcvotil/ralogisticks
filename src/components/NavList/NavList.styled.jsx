import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const NavListCont = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-family: 'HeliosCond-Bold', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 18px;

  a {
    color: var(--title-color);

    &.active {
      color: var(--logo-color);
    }

    &.active::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      bottom: -8px;
      left: 0;
      background-color: var(--logo-color);
    }
  }

  .services-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
`;

export const ServicesListCont = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-family: 'HeliosCond', sans-serif;
  font-size: 14px;
  font-weight: 400;

  /* a {
    color: var(--title-color);

    &.active {
      color: var(--logo-color);
    }

    &.active::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      bottom: -8px;
      left: 0;
      background-color: var(--logo-color);
    }
  } */
`;
