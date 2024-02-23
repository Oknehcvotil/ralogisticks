import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Cont = styled.div`
  margin: 0 auto;
  padding: 62px 15px;

  @media (min-width: 1045px) {
    padding: 84px 15px;
    max-width: 1024px;
  }
`;

export const ContactsList = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  margin: 0 auto 50px;
  max-width: 375px;
  color: var(--main-text-color);

  @media (min-width: 768px) {
    font-size: 16px;
    justify-content: space-between;
    margin: 0;
    flex-basis: calc(100% / 2);
  }

  svg {
    fill: var(--logo-color);
  }

  li:not(:last-of-type) {
    margin-bottom: 40px;
  }

  li a {
    gap: 10px;
    color: var(--main-text-color);
  }

  li:nth-of-type(2),
  li:nth-of-type(3) {
    svg {
      fill: transparent;
      stroke: var(--logo-color);
    }
  }
`;

export const ContactsListItem = styled(motion.li)`
  display: flex;
  gap: 10px;
  align-items: center;

  p {
    max-width: 250px;

    @media (min-width: 768px) {
      max-width: 100%;
    }
  }
`;

export const FlexBox = styled.div`
  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

export const FormCont = styled(motion.div)`
  flex-basis: calc(100% / 2);
`;
