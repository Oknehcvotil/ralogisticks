import styled from '@emotion/styled';

export const LanguageList = styled.ul`
  position: absolute;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 600;
  color: var(--title-color);

  li:nth-child(1) {
    border-bottom: 2px solid var(--logo-color);
    width: 100%;
  }

  li:not(:last-child) {
    margin-bottom: 10px;
  }
`;
