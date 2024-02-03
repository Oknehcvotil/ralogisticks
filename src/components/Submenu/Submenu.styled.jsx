import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const SubmenuSection = styled(motion.div)`
  height: 300px;
  background: linear-gradient(to right, #ecedff1a, #8c8cff);
`;

export const SubmenuCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 30px 15px 0;
  width: 100%;

  /* @media (min-width: 768px) {
    max-width: 766px;
  } */

  @media (min-width: 1200px) {
    max-width: 1158px;
  }
`;

export const SubmenuList = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
`;
