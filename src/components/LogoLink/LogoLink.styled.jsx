import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
  display: flex;
  flex-direction: column;

  font-weight: 700;
  font-size: 10px;
  color: var(--logo-color);
  letter-spacing: 0.1em;

  svg {
    transition: transform 100ms ease-in-out;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 10px;
    font-size: 12px;
  }

  @media (min-width: 1200px) {
    font-size: 30px;
  }

  :hover,
  :focus {
    svg {
      transform: scale(1.05);
    }
  }
`;
