import styled from '@emotion/styled';

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2e2f42;
  padding: 50px 0;
  bottom: 0;
  width: 100%;
  gap: 50px;
  flex: 0 0 auto;

  @media (min-width: 1045px) {
    padding: 100px 0 50px 0;
    gap: 70px;
  }
`;

export const FooterCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 50px;
  margin: 0 auto;
  padding: 0 15px;

  @media (min-width: 768px) {
    flex-direction: row;
    font-size: 16px;
    justify-content: space-around;
    align-items: flex-start;
  }

  @media (min-width: 1045px) {
    justify-content: space-between;
    gap: 0;
    max-width: 1024px;
  }
`;

export const FooterCompanyNameCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const FooterCompanyName = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: var(--footer-text-color);
  margin-bottom: 5px;

  @media (min-width: 768px) {
    margin-bottom: 10px;
  }

  @media (min-width: 1045px) {
    font-size: 16px;
  }
`;

export const FooterCompanyYear = styled.p`
  font-size: 12px;
  color: var(--footer-text-color);

  @media (min-width: 1045px) {
    font-size: 14px;
  }
`;

export const DeveloperCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 5px;
  flex-shrink: 0;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.4);
  font-size: 14px;

  & > a {
    color: rgba(255, 255, 255, 0.8);

    transition: color 200ms ease-out;

    &:hover,
    &:focus {
      color: var(--logo-color);
    }
  }
`;

export const FooterContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  svg {
    fill: transparent;
    stroke: var(--footer-text-color);
    transition: fill 300ms ease-in-out, stroke 300ms ease-in-out;
  }

  li:last-of-type svg {
    fill: var(--footer-text-color);
  }

  li:hover {
    a {
      color: var(--logo-color);
    }

    svg {
      stroke: var(--logo-color);
    }
  }

  li:last-of-type:hover {
    svg {
      fill: var(--logo-color);
    }
  }
`;
