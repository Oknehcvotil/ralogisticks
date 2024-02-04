import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const SubmenuSection = styled(motion.div)`
  height: 300px;
  background: rgb(230 231 255 / 70%);
  /* background: linear-gradient(to right, #ecedff1a, #8c8cff); */
`;

export const SubmenuCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 30px 15px;
  width: 100%;

  @media (min-width: 1045px) {
    max-width: 1024px;
  }
`;

export const SubmenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  text-transform: uppercase;
  font-family: 'HeliosCond', sans-serif;
  font-size: 14px;
  font-weight: 400;

  svg {
    fill: var(--logo-color);
  }

  a {
    color: var(--logo-color);

    &.active {
      color: var(--title-color);

      svg {
        fill: var(--title-color);
      }
    }

    &.active::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      bottom: -8px;
      left: 0;
      background-color: var(--title-color);
    }
  }
`;
