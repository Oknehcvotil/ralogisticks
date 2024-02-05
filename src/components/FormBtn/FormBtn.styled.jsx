import styled from '@emotion/styled';

export const SbmtBtn = styled.button`
  color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(52, 112, 255);
  opacity: 0.8;
  height: 60px;
  width: 200px;
  font-family: 'HeliosCond-Bold', sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  border-radius: 30px;
  transition: opacity 300ms ease-out 0s;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;
