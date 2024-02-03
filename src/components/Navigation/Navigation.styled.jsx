import styled from '@emotion/styled';

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: 'HeliosCond-Bold', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 18px;
  color: var(--title-color);
  cursor: pointer;

  a {
    color: var(--title-color);

    &.active {
      color: var(--logo-color);
    }

    &.active::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      bottom: -8px;
      left: 0;
      background-color: var(--logo-color);
    }
  }
`;
