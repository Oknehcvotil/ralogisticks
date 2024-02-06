import styled from '@emotion/styled';

export const TextCont = styled.div`
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  max-width: 530px;
  transform: translate(-50%, -50%);
  border: 1px solid var(--logo-color);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  padding: 15px 25px;
  background-color: var(--logo-color);
  opacity: 0.9;
  color: var(--footer-text-color);

  p {
    text-align: justify;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
