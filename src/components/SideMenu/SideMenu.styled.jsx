import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const SideMenuCont = styled(motion.nav)`
  position: absolute;
  width: 70%;
  max-width: 100%;
  top: 85px;

  background: rgb(230 231 255 / 69%);
  height: 100vh;

  @media (min-width: 768px) {
    width: 50%;
    top: 71px;
  }
`;
