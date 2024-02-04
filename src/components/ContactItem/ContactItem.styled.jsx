import styled from '@emotion/styled';

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: 'OpenSans', sans-serif;
  font-style: normal;
  font-weight: 400;
  color: var(--footer-text-color);
  font-size: 14px;
  transition: color 300ms ease-in-out;

  @media (min-width: 1045px) {
    font-size: 16px;
  }
`;
