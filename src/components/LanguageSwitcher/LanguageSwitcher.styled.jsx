import styled from '@emotion/styled';

export const LanguageList = styled.ul`
  position: absolute;
  z-index: 1000;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 600;
  color: var(--title-color);

  li:nth-of-type(1) {
    border-bottom: 2px solid var(--logo-color);
    width: 100%;
  }

  li:not(:last-child) {
    margin-bottom: 10px;
  }
`;
