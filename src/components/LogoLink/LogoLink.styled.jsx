import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  font-weight: 700;
  font-size: 10px;
  color: var(--logo-color);
  letter-spacing: 0.1em;

  img {
    transition: transform 100ms ease-in-out;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 10px;
    font-size: 30px;
  }

  @media (min-width: 1045px) {
    margin-right: 0;
  }

  :hover,
  :focus {
    img {
      transform: scale(1.05);
    }
  }
`;
