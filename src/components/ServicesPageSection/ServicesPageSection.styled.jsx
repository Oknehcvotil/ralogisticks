import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled.div`
  margin: 0 auto;
  padding: 62px 15px;
  line-height: 16px;

  p {
    margin-bottom: 30px;
    text-align: justify;
  }

  @media (min-width: 748px) {
    font-size: 14px;
    line-height: 18px;

    p {
      margin-bottom: 30px;
      text-align: justify;
    }
  }

  @media (min-width: 1045px) {
    padding: 84px 15px;
    max-width: 1024px;
  }
`;

export const PictureCont = styled(motion.div)`
  overflow: hidden;
  border-radius: 15px;
`;
