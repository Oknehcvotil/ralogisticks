import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const SideMenuCont = styled(motion.nav)`
  position: absolute;
  width: 70%;
  max-width: 100%;
  top: 85px;
  background-color: #f4f4f4;
  height: 100vh;

  @media (min-width: 768px) {
    top: 71px;
  }
`;
