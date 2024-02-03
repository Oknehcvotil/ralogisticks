import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const SideMenuCont = styled(motion.aside)`
  position: absolute;
  width: 70%;
  max-width: 100%;
  top: 85px;
  z-index: 900;

  background: rgb(230 231 255 / 100%);
  height: calc(100vh - 105px);
  height: -webkit-calc(100vh - 105px);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    height: calc(100vh - 91px);
    height: -webkit-calc(100vh - 91px);
    width: 50%;
    top: 71px;
  }
`;
