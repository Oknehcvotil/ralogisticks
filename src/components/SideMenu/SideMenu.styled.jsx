import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const SideMenuCont = styled(motion.aside)`
  position: absolute;
  width: 70%;
  max-width: 100%;
  top: 92px;
  z-index: 900;
  background: rgb(230 231 255 / 90%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;

  @media (min-width: 768px) {
    width: 50%;
  }
`;
